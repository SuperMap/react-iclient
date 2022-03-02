import React, { Component, ReactNode } from 'react';
import { MapEvents, MapOptions, MAP_EVENT_NAMES } from './interface';
import MapViewModal from './MapViewModal';
import debounce from 'lodash.debounce';
import capitalize from 'lodash.capitalize';
import upperFirst from 'lodash.upperfirst';
import get from 'lodash.get';
import isEqual from 'lodash.isequal';
import { addListener, removeListener } from 'resize-detector';
import mapEvent from '../_types/map-event';
import { isFunction } from '../../common/_utils/util';

export interface MapProps extends MapEvents {
  target?: string;
  mapOptions?: Omit<MapOptions, 'style'>;
  sprites?: {
    [source: string]: string;
  };
  glyphs?: {
    [source: string]: string;
  };
  tiandituKey?: string;
  autoresize: boolean;
  onLoad?(params: object): void;
  onError?(params: object): void;
}

type MapPreProps = MapProps & Readonly<{ children?: ReactNode }>;
export interface MapState {
  spinning?: boolean;
}

class Map extends Component<MapProps, MapState> {
  selfRef: React.RefObject<HTMLDivElement>;
  viewModel: MapViewModal;
  map: mapboxglTypes.Map;

  viewModelProps: string[] = [
    'mapOptions.center',
    'mapOptions.zoom',
    'mapOptions.crs',
    'mapOptions.minZoom',
    'mapOptions.maxZoom',
    'mapOptions.maxBounds',
    'mapOptions.renderWorldCopies',
    'mapOptions.bearing',
    'mapOptions.pitch'
  ];

  static defaultProps = {
    target: 'map',
    autoresize: true
  };

  constructor(props: MapProps) {
    super(props);
    this.state = {
      spinning: true
    };

    this.selfRef = React.createRef();
    this.__resizeHandler = debounce(this.__resizeHandler.bind(this), 100, { leading: true });
  }

  componentDidMount() {
    this.initializeWebMap();
    this.registerEvents();
  }


  getLayerIds(children) {
    return children?.reduce((layerIds, child) => {
      if (child?.type?.displayName?.includes('Layer')) {
        const id = child.props.layerId;
        id && layerIds.push(id);
      }
      return layerIds;
    }, []);
  }

  componentDidUpdate(prevProps: MapPreProps) {
    this.viewModel &&
      this.viewModelProps.forEach(prop => {
        const name = prop.includes('.') ? prop.split('.')[1] : prop;
        const funcName = `set${upperFirst(name)}`;
        const propsValue = get(this.props, prop);
        const prevPropsValue = get(prevProps, prop);
        if (propsValue && !isEqual(propsValue, prevPropsValue)) {
          this.viewModel[funcName](propsValue);
        }
      });
    const { sprites, glyphs } = this.props;
    for (const id in sprites) {
      if (prevProps.sprites[id] !== sprites[id]) {
        this.viewModel.addSprites(id, sprites[id]);
      }
    }
    for (const id in glyphs) {
      if (prevProps.glyphs[id] !== glyphs[id]) {
        this.viewModel.addGlyphs(id, glyphs[id]);
      }
    }

    if (!this.map) {
      return;
    }
    const preLayerIds = this.getLayerIds(prevProps.children);
    const newLayerIds = this.getLayerIds(this.props.children);
    // 过滤图层顺序相等的情况
    if (!isEqual(preLayerIds, newLayerIds)) {
      this.viewModel.changeLayersOrder(newLayerIds);
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
    let { target, tiandituKey, mapOptions, autoresize } = this.props;
    this.viewModel = new MapViewModal(
      {
        target,
        tiandituKey
      },
      mapOptions
    );
    if (autoresize) {
      addListener(this.selfRef.current, this.__resizeHandler);
    }
  };

  registerEvents = () => {
    const { target, onLoad } = this.props;
    this.viewModel.on('addlayerssucceeded', e => {
      this.setState({
        spinning: false
      });
      mapEvent.setMap(target, e.map);
      this.viewModel && mapEvent.setWebMap(target, this.viewModel);
      mapEvent.emit('load-map', e.map, target);
      e.map.resize();
      this.map = e.map;
      if (process.env.NODE_ENV === 'development') {
        (window as any).map = this.map;
      }
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

  bindMapEvents(): void {
    Object.keys(this.props).forEach(eventName => {
      if (MAP_EVENT_NAMES.includes(eventName)) {
        const name = eventName.replace('on', '');
        this.bindMapEvent(name.toLowerCase(), this.mapEventCallback);
      }
    });
  }

  bindMapEvent(eventName: string, eventCallback) {
    this.map.on(eventName, eventCallback);
  }

  mapEventCallback = (event, data = {}): void => {
    this.emitMapEvent(event.type, { mapboxEvent: event, ...data });
  };

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

  __resizeHandler() {
    this.resize();
  }

  resize() {
    if (this.viewModel && this.viewModel.resize) {
      this.viewModel.resize();
    }
  }

  render() {
    const { spinning } = this.state;
    const { target, children } = this.props;
    return (
      <div id={target} className="sm-component-map" ref={this.selfRef}>
        {!spinning && children}
      </div>
    );
  }
}

export default Map;
