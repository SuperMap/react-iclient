import React from 'react';
import { addListener, removeListener } from 'resize-detector';
import debounce from 'lodash.debounce';
import capitalize from 'lodash.capitalize';
import upperFirst from 'lodash.upperfirst';
import { Spin, message } from 'antd';
import get from 'lodash.get';
import isEqual from 'lodash.isequal';
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

  constructor(props: WebMapProps) {
    super(props);
    this.state = {
      spinning: true,
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
    this.viewModel && this.state.viewModelProps.forEach(prop => {
      const name = prop.includes('.') ? prop.split('.')[1] : prop;
      const funcName = `set${upperFirst(name)}`;
      const propsValue = get(this.props, prop);
      const prevPropsValue = get(prevProps, prop);
      if (propsValue && !isEqual(propsValue, prevPropsValue)) {
        this.viewModel[funcName](propsValue);
      }
    });
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
    this.viewModel.on('getmapinfofailed', e => {
      const { onGetMapFailed } = this.props;
      /**
       * @event getMapFailed
       * @desc 获取 WebMap 地图信息失败。
       * @property {Object} error - 失败原因。
       */
      isFunction(onGetMapFailed) && onGetMapFailed({ error: e.error });
      message.error(e.error.message);
      this.setState({
        spinning: false
      });
    });
    this.viewModel.on('getlayerdatasourcefailed', e => {
      const { onGetLayerDatasourceFailed } = this.props;
      /**
       * @event getLayerDatasourceFailed
       * @desc 获取图层数据失败。
       * @property {Object} error - 失败原因。
       * @property {Object} layer - 图层信息。
       * @property {mapboxgl.Map} map - MapBoxGL Map 对象。
       */
      isFunction(onGetLayerDatasourceFailed) && onGetLayerDatasourceFailed({ error: e.error, layer: e.layer, map: e.map });
      // TODO
      // message.error(this.$t('webmap.getLayerInfoFailed'));
      message.error('获取图层信息失败！');
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
    const { spinning } = this.state;
    const { target, children } = this.props;
    return (
      <div id={target} className="sm-component-web-map" ref={this.selfRef}>
        {children}
        {
          spinning
          &&
          <Spin size="large" tip="地图加载中..." spinning={spinning} />
        }
      </div>
    );
  }
}

export default WebMap;
