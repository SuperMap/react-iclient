import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import layer, { LayerProps } from '../../../_mixin/layer';
import EchatsLayerViewModel from './EchatsLayerViewModel';

interface EchartsProps extends MapGetterProps, LayerProps {
  options: object;
}

@compose(
  mapGetter,
  layer
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
