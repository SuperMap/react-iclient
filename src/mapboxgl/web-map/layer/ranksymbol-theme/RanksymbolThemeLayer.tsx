import { Component } from 'react';
import MapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import Layer, { LayerProps } from '../../../_mixin/layer';
import { compose } from 'recompose';
import RanksymbolThemeLayerViewModel from './RanksymbolThemeLayerViewModel.js';

interface RanksymbolThemeLayerProps extends LayerProps, MapGetterProps {
  symbolType: string;
  layerName?:string,
  options?: object;
  data: Array<any>;
  onLoad?: (themeLayer?: any, map?: mapboxglTypes.Map) => void;
}

@compose(
  MapGetter,
  Layer
)
export default class RanksymbolThemeLayer extends Component<RanksymbolThemeLayerProps> {
  viewModel: RanksymbolThemeLayerViewModel;

  loaded(map: mapboxglTypes.Map) {
    this.viewModel = new RanksymbolThemeLayerViewModel(map, this.props);
    this.props.onLoad(this.viewModel.themeLayer, map);
  }

  render() {
    return null;
  }
}
