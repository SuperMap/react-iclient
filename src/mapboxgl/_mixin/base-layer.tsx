import React, { PureComponent } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import UniqueId from 'lodash.uniqueid';
import capitalize from 'lodash.capitalize';
import { wrapDisplayName } from 'recompose';
import { callHook, getComponentInstance, isFunction } from '../../common/_utils/util';

interface layerEvents {
  onMousedown?(params: object): void,
  onMouseup?(params: object): void,
  onClick?(params: object): void,
  onDblclick?(params: object): void,
  onMousemove?(params: object): void,
  onMouseenter?(params: object): void,
  onMouseleave?(params: object): void,
  onMouseover?(params: object): void,
  onMouseout?(params: object): void,
  onContextmenu?(params: object): void,
  onTouchstart?(params: object): void,
  onTouchend?(params: object): void,
  onTouchcancel?(params: object): void
}

export interface BaseLayerProps extends layerEvents {
  layerId?: string;
  layerName?: string;
  minzoom?: number;
  maxzoom?: number;
  filter?: any[];
  layout?: object;
  paint?: object;
  metadata?: object;
  before?: string;
}

export default function withLayer<P extends BaseLayerProps = BaseLayerProps>(WrappedComponent: React.ComponentType<P>) {
  class BaseLayer extends PureComponent<P> {
    map: mapboxglTypes.Map;
    instanceRef: React.ReactInstance;
    eventList: string[];
    registerEvents: string[] = [];
    overLayer: object;
    getComponentInstance: typeof getComponentInstance;

    static displayName = wrapDisplayName(WrappedComponent, 'withLayer');
    static defaultProps = {
      layerId: UniqueId(`${WrappedComponent.name.toLowerCase()}-`),
      minzoom: 0,
      maxzoom: 22
    };
    constructor(props: React.ComponentProps<typeof WrappedComponent>) {
      super(props);
      this.eventList = [
        'onMousedown',
        'onMouseup',
        'onClick',
        'onDblclick',
        'onMousemove',
        'onMouseenter',
        'onMouseleave',
        'onMouseover',
        'onMouseout',
        'onContextmenu',
        'onTouchstart',
        'onTouchend',
        'onTouchcancel'
      ];
      this.getComponentInstance = getComponentInstance.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.minzoom !== this.props.minzoom || prevProps.maxzoom !== this.props.maxzoom) {
        this.map.setLayerZoomRange(this.props.layerId, this.props.minzoom, this.props.maxzoom);
      }

      if (prevProps.filter !== this.props.filter) {
        this.map.setFilter(this.props.layerId, this.props.filter);
      }

      if (this.props.layout && prevProps.layout !== this.props.layout) {
        for (let prop of Object.keys(this.props.layout)) {
          this.map.setLayoutProperty(this.props.layerId, prop, this.props.layout[prop]);
        }
      }

      if (this.props.paint && prevProps.paint !== this.props.paint) {
        for (let prop of Object.keys(this.props.paint)) {
          this.map.setPaintProperty(this.props.layerId, prop, this.props.paint[prop]);
        }
      }
      if (this.props.metadata && prevProps.metadata !== this.props.metadata) {
        const layer = this.map.getLayer(this.props.layerId),
          metadata = layer.metadata;
        if (metadata) {
          Object.assign(layer.metadata, this.props.metadata);
        } else {
          layer.metadata = this.props.metadata;
        }
      }
    }

    componentWillUnmount() {
      this.remove();
    }

    loaded(map) {
      this.map = map;
      callHook(this.instanceRef, 'loaded', this.map);
      this.$_bindLayerEvents();
    }

    $_emitEvent = (name, data = {}) => {
      const originEventName = `on${capitalize(name)}`;
      if (isFunction(this.props[originEventName])) {
        this.props[originEventName]({ map: this.map, layerId: this.props.layerId, ...data });
      }
    };
    $_emitLayerMapEvent = event => {
      this.$_emitEvent(event.type, { mapboxEvent: event });
    };
    $_bindLayerEvents = () => {
      Object.keys(this.props).forEach(eventName => {
        if (this.eventList.includes(eventName)) {
          const { layerId } = this.props;
          // @ts-ignore
          const layer = this.map.overlayLayersManager[layerId];
          const name: any = eventName.replace('on', '');
          const registerEventName = name.toLowerCase();
          this.registerEvents.push(registerEventName);
          if (layer) {
            this.overLayer = layer;
            layer.on(registerEventName, this.$_emitLayerMapEvent);
          } else {
            this.map.on(registerEventName, layerId, this.$_emitLayerMapEvent);
          }
        }
      });
    };
    $_unbindLayerEvents = events => {
      if (this.map) {
        events.forEach(eventName => {
          !this.overLayer && this.map.off(eventName, this.props.layerId, this.$_emitLayerMapEvent);
        });
      }
    };
    // move = beforeId => {
    //   this.map.moveLayer(this.props.layerId, beforeId);
    //   this.$_emitEvent('layer-moved', {
    //     beforeId: beforeId
    //   });
    // };

    remove = (layerId = this.props.layerId) => {
      if (this.registerEvents && this.registerEvents.length) {
        this.$_unbindLayerEvents(this.registerEvents);
      }
      if(this.map) {
        this.map && this.map.removeLayer(layerId);
        this.$_emitEvent('layer-removed');
      }
    };

    removed(map) {
      if (this.props.layerId && this.map) {
        this.remove();
      }
      this.map = map;
      callHook(this.instanceRef, 'removed', this.map);
    }

    render() {
      // const { layerId } = this.props;
      // const id = source || layerId;
      // const sourceLoaded =
      //   this.map && layerId ? this.map.isSourceLoaded(layerId) : false;
      // const mapLayer = this.map ? this.map.getLayer(layerId) : null;
      // const mapSource =
      //   this.map && layerId ? this.map.getSource(layerId) : null;
      const newProps = Object.assign({}, this.props, {
        // sourceLoaded,
        // mapLayer,
        // mapSource
      });
      return <WrappedComponent {...newProps} ref={this.getComponentInstance} remove={this.remove} />;
    }
  };
  return hoistNonReactStatics(BaseLayer, WrappedComponent);
};
