import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import layer, { LayerProps } from '../../../_mixin/layer';
import MapvLayerViewModel from './MapvLayerViewModel';

interface MapvProps extends MapGetterProps, LayerProps {
  options?: object;
  data?: object;
}

@compose(
  mapGetter,
  layer
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
