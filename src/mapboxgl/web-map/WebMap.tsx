import React from 'react';
import { addListener, removeListener } from 'resize-detector';
import debounce from 'lodash.debounce';
import capitalize from 'lodash.capitalize';
import mapEvent from '../_types/map-event';
import WebMapViewModel from './WebMapViewModel';
import { isFunction } from '../../common/_utils/util';
import { WebMapProps, WebMapState, MAP_EVENT_NAMES } from './interface';

class WebMap extends React.Component<WebMapProps, WebMapState> {
  map?: mapboxglTypes.Map;
  viewModel: WebMapViewModel;
  selfRef: React.RefObject<HTMLInputElement>;

  static defaultProps = {
    target: 'map',
    autoresize: true
  };

  // state: WebMapState
  constructor(props: WebMapProps) {
    super(props);
    this.state = {
      viewModelProps: [
        'mapId',
        'serverUrl',
        'mapOptions.center',
        'mapOptions.zoom',
        'mapOptions.style',
        'mapOptions.crs',
        'mapOptions.minZoom',
        'mapOptions.maxZoom',
        'mapOptions.maxBounds',
        'mapOptions.renderWorldCopies',
        'mapOptions.bearing',
        'mapOptions.pitch',
        'withCredentials'
      ]
    };
    this.selfRef = React.createRef();
    this.__resizeHandler = debounce(this.__resizeHandler.bind(this), 100, { leading: true });
  }

  componentDidMount() {
    this.initializeWebMap();
    this.registerEvents();
  }

  componentDidUpdate(prevProps: WebMapProps) {
    if (this.viewModel) {
      this.state.viewModelProps.forEach(prop => {
        const propArr = prop.split('.');
        const funcName = `set${propArr[propArr.length - 1].charAt(0).toUpperCase()}${propArr[propArr.length - 1].slice(
          1
        )}`;
        if (propArr.length > 1) {
          if (
            this.props[propArr[0]] &&
            this.props[propArr[0]][propArr[1]] &&
            (!prevProps.mapOptions || this.props[propArr[0]][propArr[1]] !== prevProps[propArr[0]][propArr[1]])
          ) {
            this.viewModel[funcName](this.props[propArr[0]][propArr[1]]);
          }
        } else {
          if (this.props[propArr[0]] && this.props[propArr[0]] !== prevProps[propArr[0]]) {
            this.viewModel[funcName](this.props.mapId);
          }
        }
      });
    }
  }

  componentWillUnmount() {
    const { target, autoresize } = this.props;
    mapEvent.deleteMap(target);
    mapEvent.deleteWebMap(target);
    if (autoresize && this.selfRef.current) {
      removeListener(this.selfRef.current, this.__resizeHandler);
    }
  }

  initializeWebMap = () => {
    let {
      target,
      serverUrl,
      accessToken,
      accessKey,
      tiandituKey,
      withCredentials,
      excludePortalProxyUrl,
      mapOptions,
      autoresize
    } = this.props;
    this.viewModel = new WebMapViewModel(
      this.props.mapId,
      {
        target,
        serverUrl,
        accessToken,
        accessKey,
        tiandituKey,
        withCredentials,
        excludePortalProxyUrl
      },
      mapOptions
    );
    if (autoresize) {
      addListener(this.selfRef.current, this.__resizeHandler);
    }
  };

  registerEvents = () => {
    const { target, onLoad } = this.props;
    this.viewModel &&
      this.viewModel.on('addlayerssucceeded', (e) => {
        this.setState({
          spinning: false
        });
        mapEvent.setMap(target, e.map);
        this.viewModel && mapEvent.setWebMap(target, this.viewModel);
        mapEvent.emit('load-map', e.map, target);
        e.map.resize();
        this.map = e.map;
        // 绑定map event
        this.bindMapEvents();
        /**
         * @event load
         * @desc webmap 加载完成之后触发。
         * @property {mapboxgl.Map} map - MapBoxGL Map 对象。
         */
        isFunction(onLoad) && onLoad({ ...e, component: this });
      });
  };

  __resizeHandler() {
    this.resize();
  }

  resize() {
    if (this.viewModel && this.viewModel.resize) {
      this.viewModel.resize();
    }
  }

  bindMapEvents(): void {
    Object.keys(this.props).forEach(eventName => {
      if (MAP_EVENT_NAMES.includes(eventName)) {
        const name = eventName.replace('on', '');
        this.bindMapEvent(name.toLowerCase(), this.mapEventCallback.bind(this));
      }
    });
  }

  bindMapEvent(eventName: string, eventCallback) {
    this.map.on(eventName, eventCallback);
  }

  mapEventCallback(event, data = {}): void {
    this.emitMapEvent(event.type, { mapboxEvent: event, ...data });
  }

  emitMapEvent(name: string, data = {}): void {
    const originEventName = `on${capitalize(name)}`;
    if (isFunction(this.props[originEventName])) {
      this.props[originEventName]({
        map: this.map,
        component: this,
        ...data
      });
    }
  }

  render() {
    const { target, children } = this.props;
    return (
      <div id={target} className="sm-component-web-map" ref={this.selfRef}>
        {children}
      </div>
    );
  }
}

export default WebMap;
