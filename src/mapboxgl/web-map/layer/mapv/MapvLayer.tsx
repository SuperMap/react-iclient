import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import BaseLayer, { BaseLayerProps } from '../../../_mixin/base-layer';
import MapvLayerViewModel from './MapvLayerViewModel';

interface MapvProps extends MapGetterProps, BaseLayerProps {
  options?: object;
  data?: object;
}

@compose(
  mapGetter,
  BaseLayer
)
export default class MapvLayer extends React.Component<MapvProps> {
  viewModel: MapvLayerViewModel;

  static defaultProps = { options: {}, data: {} };
  static propTypes = {
    options: PropTypes.object,
    data: PropTypes.object
  };

  loaded(map: mapboxglTypes.Map) {
    this.viewModel = new MapvLayerViewModel(map, this.props);
  }

  render() {
    return null;
  }
}
