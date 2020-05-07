import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import BaseLayer, { BaseLayerProps } from '../../../_mixin/base-layer';
import HeatmapLayerViewModel from './HeatmapLayerViewModel';
import HeatMapStyle from '../../../_types/HeatMapStyle';

interface HeatmapProps extends MapGetterProps, BaseLayerProps {
  data: object;
  layerStyle?: object;
}

@compose(
  mapGetter,
  BaseLayer
)
export default class HeatmapLayer extends React.Component<HeatmapProps> {
  viewModel: HeatmapLayerViewModel;

  static defaultProps = { layerStyle: new HeatMapStyle() };
  static propTypes = {
    data: PropTypes.object.isRequired,
    layerStyle: PropTypes.object
  };

  loaded(map: mapboxglTypes.Map) {
    const { data, layerId, layerStyle } = this.props;
    this.viewModel = new HeatmapLayerViewModel(map, data, {
      layerId,
      layerStyle
    });
  }

  render() {
    return null;
  }
}
