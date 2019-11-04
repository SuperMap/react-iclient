import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { wrapDisplayName } from 'recompose';
import { message } from 'antd';
import WebMapViewModel from '../web-map/WebMapViewModel';
import mapEvent from '../_types/map-event';
import globalEvent from '../../common/_utils/global-event';
import { callHook, getComponentInstance, getFirstMapTarget } from '../../common/_utils/util';

export interface MapGetterProps {
  mapTarget?: string;
}

export default function mapGetter<P extends MapGetterProps = MapGetterProps>(WrappedComponent: React.ComponentType<P>) {
  class MapGetter extends React.Component<P> {
    map: mapboxglTypes.Map;
    webmap: WebMapViewModel;
    instanceRef: React.ReactInstance;
    getComponentInstance: typeof getComponentInstance;


    static displayName = wrapDisplayName(WrappedComponent, 'mapGetter');

    constructor(props: React.ComponentProps<typeof WrappedComponent>) {
      super(props);
      this.loadMapSucceed = this.loadMapSucceed.bind(this);
      this.deleteMapSucceed = this.deleteMapSucceed.bind(this);
      this.getComponentInstance = getComponentInstance.bind(this);
    }

    componentDidMount() {
      const targetName = this.getTargetName();
      if (mapEvent.getMap(targetName)) {
        this.loadMap(targetName);
      }
      mapEvent.on('load-map', this.loadMapSucceed);
      globalEvent.on('delete-map', this.deleteMapSucceed);
    }

    componentDidUpdate(prevProps: React.ComponentProps<typeof WrappedComponent>) {
      const { mapTarget } = this.props;
      const { mapTarget: prevMapTarget } = prevProps;
      if (mapTarget && prevMapTarget && mapTarget !== prevMapTarget) {
        this.mapTargetChanged(mapTarget);
      }
    }

    componentWillUnmount() {
      mapEvent.off('load-map', this.loadMapSucceed);
      globalEvent.off('delete-map', this.deleteMapSucceed);
    }

    getTargetName(): string {
      /**
       * 便于区分存在多个map时，子组件对应的map的渲染；
       * map 和 webmap  的 props 属性是 target 其他组件都叫 mapTarget
       * 如果子组件包裹在 map 组件里面，若没有传 mapTarget, 则 targetName 直接取父元素的target 的值
       * 如果子组件和 map 同层级，且没有设置 mapTarget 时，则默认渲染到第一个 map 上
       *
       */
      // const selfParent = this._reactInternalInstance._currentElement._owner._instance;
      // console.log(selfParent);
      // console.log('selfParent: ', selfParent);
      // const parentTarget =
      //   selfParent && selfParent.name.toLowerCase() === 'smwebmap' &&
      //   selfParent.target;
      // return this.props.mapTarget || parentTarget || Object.keys(mapEvent.getAllMaps())[0];
      const maps = mapEvent.getAllMaps();
      return this.props.mapTarget || getFirstMapTarget(maps);
    }

    loadMapSucceed(map: mapboxglTypes.Map, target: string) {
      const targetName = this.getTargetName();
      if (target === targetName) {
        this.loadMap(target);
      }
    }

    mapTargetChanged(target: string) {
      // 多个map切换的时候，需要删除该组件与前一个map的图层绑定, 如果新的target没有对应的map，那么默认绑定第一个地图
      const maps = mapEvent.getAllMaps();
      const targetName = getFirstMapTarget(maps);
      const firstMap = mapEvent.getMap(targetName);
      this.resetData();
      if (mapEvent.getMap(target) || firstMap) {
        this.loadMap(target);
      }
    }

    loadMap(targetName: string) {
      this.map = mapEvent.getMap(targetName);
      this.webmap = mapEvent.getWebMap(targetName);
      callHook(this.instanceRef, 'loaded', this.map);
      // 控制与map组件同级的组件的显示加载
      // setTimeout(() => {
      //   /**
      //    * @event loaded
      //    * @desc 组件加载渲染完成之后触发。
      //    */
      //   this.$emit('loaded');
      // }, 0);
    }

    deleteMapSucceed(target: string) {
      const targetName = this.getTargetName();
      if (target === targetName) {
        this.resetData();
      }
    }

    resetData() {
      this.map = null;
      this.webmap = null;
      callHook(this.instanceRef, 'removed', this.map);
    }

    mapNotLoadedTip(): boolean {
      if (!this.map) {
        message.destroy();
        // TODO
        // message.warning(this.$t('warning.unassociatedMap'));
        message.warning('您需要配置关联地图！');
        return true;
      }
      return false;
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          ref={this.getComponentInstance}
          mapNotLoadedTip={this.mapNotLoadedTip}
        />
      );
    }
  }
  return hoistNonReactStatics(MapGetter, WrappedComponent);
}
