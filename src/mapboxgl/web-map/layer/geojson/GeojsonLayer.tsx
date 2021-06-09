import { Component } from 'react';
import GeojsonLayerViewModel from './GeojsonLayerViewModel';
import { compose } from 'recompose';
import isEqual from 'lodash.isequal';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import BaseLayer, { BaseLayerProps } from '../../../_mixin/base-layer';

interface GeojsonLayerProps extends MapGetterProps, BaseLayerProps {
  layerStyle: object;
  data: object | string;
}

@compose(
  mapGetter,
  BaseLayer
)
export default class GeojsonLayer extends Component<GeojsonLayerProps> {
  viewModel: GeojsonLayerViewModel;

  componentDidUpdate(prevProps: GeojsonLayerProps) {
    if (!isEqual(this.props.layerStyle, prevProps.layerStyle) && this.viewModel) {
      this.viewModel.setLayerStyle(this.props.layerStyle);
    }
    if (!isEqual(this.props.data, prevProps.data) && this.viewModel) {
      this.viewModel.setData(this.props.data);
    }
  }

  loaded(map: mapboxglTypes.Map) {
    this.viewModel = new GeojsonLayerViewModel(map, this.props);
  }

  render() {
    return null;
  }
}
