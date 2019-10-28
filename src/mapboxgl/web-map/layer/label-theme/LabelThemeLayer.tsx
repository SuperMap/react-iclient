import { Component } from 'react';
import MapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import Layer, { LayerProps } from '../../../_mixin/layer';
import { compose } from 'recompose';
import LabelThemeLayerViewModel from './LabelThemeLayerViewModel.js';

interface LabelThemeLayerProps extends MapGetterProps, LayerProps {
  layerName:string,
  options?:object,
  data:Array<any>,
  onLoad:(themeLayer:any, map: mapboxglTypes.Map) => void
}  
@compose(MapGetter,Layer)
export default class LabelThemeLayer extends Component<LabelThemeLayerProps> {
  viewModel:LabelThemeLayerViewModel
  static defaultProps = {
    options: {}
  }
  loaded(map: mapboxglTypes.Map) {
    this.viewModel = new LabelThemeLayerViewModel(map, this.props);
    this.props.onLoad && this.props.onLoad(this.viewModel.themeLayer, map);
  }
  render() {
    return null;
  }
}
