import React, { Component } from 'react';
import ReactDom from 'react-dom';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { getDisplayName } from 'recompose';
import mapEvent from '../_types/map-event';
import { getFirstMapTarget } from '../../common/_utils/util';

const withControl = WrappedComponent => {
  class Control extends Component {
    constructor(props) {
      super(props);
      const { parentParams = {} } = props;
      this.parentIsWebMapOrMap = parentParams.name && parentParams.name.toLowerCase() === 'smwebmap';
    }
    componentDidMount() {
      this.$el = ReactDom.findDOMNode(this.instance);
      const componentName = getDisplayName(WrappedComponent);
      this.filterDelayLoad = !['webmap', 'minimap'].includes(componentName.toLowerCase());
      if (this.$el && this.parentIsWebMapOrMap) {
        if (this.filterDelayLoad) {
          this.$el.style && (this.$el.style.display = 'none');
        }
        const targetName = this.getControlMapName();
        if (mapEvent.getMap(targetName)) {
          this.mapLoaded(mapEvent.getMap(targetName));
        }
        mapEvent.on('load-map', this.controlLoadMapSucceed);
      }
    }
    componentDidUpdate(prevProps) {
      if (prevProps.position !== this.props.position) {
        this.remove();
        this.addTo();
      }
    }
    componentWillUnmount() {
      this.remove();
      mapEvent.off('load-map', this.controlLoadMapSucceed);
    }
    addTo = () => {
      this.control = this.initControl();
      this.$el.classList.add('mapboxgl-ctrl');
      this.map.addControl(this.control, this.props.position);
    };
    remove = () => {
      this.control && this.map && this.map.removeControl(this.control);
    };
    initControl = () => {
      const self = this;
      return {
        onAdd() {
          return self.$el;
        },
        onRemove() {
          return self.map;
        }
      };
    };
    getControlMapName = () => {
      const selfParent = this.props.parentParams;
      const parentTarget = selfParent && selfParent.name.toLowerCase() === 'smwebmap' && selfParent.target;
      const maps = mapEvent.getAllMaps();
      return this.props.mapTarget || parentTarget || getFirstMapTarget(maps);
    };
    controlLoadMapSucceed = (map, target) => {
      const targetName = this.getControlMapName();
      if (target === targetName) {
        this.mapLoaded(map);
      }
    };
    mapLoaded = map => {
      this.map = map;
      this.addTo();

      if (this.filterDelayLoad) {
        this.$el.style && (this.$el.style.display = 'block');
      }
    };
    render() {
      return (
        <WrappedComponent
          ref={ref => {
            this.instance = ref;
          }}
        />
      );
    }
  };
  return hoistNonReactStatics(Control, WrappedComponent);
};

export default withControl;
