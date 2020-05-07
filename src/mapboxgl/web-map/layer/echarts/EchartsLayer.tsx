import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import BaseLayer, { BaseLayerProps } from '../../../_mixin/base-layer';
import EchatsLayerViewModel from './EchatsLayerViewModel';

interface EchartsProps extends MapGetterProps, BaseLayerProps {
  options: object;
}

@compose(
  mapGetter,
  BaseLayer
)
export default class EchartsLayer extends React.Component<EchartsProps> {
  viewModel: EchatsLayerViewModel;

  static propTypes = {
    options: PropTypes.object.isRequired
  };

  loaded(map: mapboxglTypes.Map) {
    this.viewModel = new EchatsLayerViewModel(map, this.props.options);
  }

  render() {
    return null;
  }
}
