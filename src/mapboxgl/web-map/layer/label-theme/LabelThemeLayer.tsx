import { Component } from 'react';
import { compose } from 'recompose';
import MapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import BaseLayer, { BaseLayerProps } from '../../../_mixin/base-layer';
import { isFunction } from '../../../../common/_utils/util';
import LabelThemeLayerViewModel from './LabelThemeLayerViewModel.js';

interface LabelThemeLayerProps extends MapGetterProps, BaseLayerProps {
  layerName:string,
  options?:object,
  data:Array<any>,
  onLoad?: (themeLayer?:any, map?: mapboxglTypes.Map) => void
}  
@compose(MapGetter,BaseLayer)
export default class LabelThemeLayer extends Component<LabelThemeLayerProps> {
  viewModel:LabelThemeLayerViewModel;
  static defaultProps = {
    options: {}
  };
  loaded(map: mapboxglTypes.Map) {
    const { onLoad } = this.props;
    this.viewModel = new LabelThemeLayerViewModel(map, this.props);
    isFunction(onLoad) && onLoad(this.viewModel.themeLayer, map);
  }
  render() {
    return null;
  }
}
