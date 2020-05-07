import { Component } from 'react';
import { compose } from 'recompose';
import MapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import BaseLayer, { BaseLayerProps } from '../../../_mixin/base-layer';
import { isFunction } from '../../../../common/_utils/util';
import RanksymbolThemeLayerViewModel from './RanksymbolThemeLayerViewModel.js';

interface RanksymbolThemeLayerProps extends BaseLayerProps, MapGetterProps {
  symbolType: string;
  layerName?:string,
  options?: object;
  data: Array<any>;
  onLoad?: (themeLayer?: any, map?: mapboxglTypes.Map) => void;
}

@compose(
  MapGetter,
  BaseLayer
)
export default class RanksymbolThemeLayer extends Component<RanksymbolThemeLayerProps> {
  viewModel: RanksymbolThemeLayerViewModel;

  loaded(map: mapboxglTypes.Map) {
    const { onLoad } = this.props;
    this.viewModel = new RanksymbolThemeLayerViewModel(map, this.props);
    isFunction(onLoad) && onLoad(this.viewModel.themeLayer, map);
  }

  render() {
    return null;
  }
}
