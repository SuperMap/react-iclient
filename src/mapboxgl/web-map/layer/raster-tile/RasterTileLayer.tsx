import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import BaseLayer, { BaseLayerProps } from '../../../_mixin/base-layer';
import RasterTileLayerViewModel from './RasterTileLayerViewModel';

type SchemeType = 'xyz' | 'tms';

interface RasterTileProps extends MapGetterProps, BaseLayerProps {
  tileSize?: number;
  mapUrl?: string;
  tiles?: string[];
  bounds?: number[];
  attribution?: string;
  scheme?: SchemeType;
  visible?: boolean;
  opacity?: number;
}

@compose(
  mapGetter,
  BaseLayer
)
export default class RasterTileLayer extends React.Component<RasterTileProps> {
  viewModel: RasterTileLayerViewModel;

  static defaultProps = { scheme: 'xyz' as SchemeType, visible: true, opacity: 1 };
  static propTypes = {
    tileSize: PropTypes.number,
    mapUrl: PropTypes.string,
    tiles: PropTypes.array,
    bounds: PropTypes.array,
    attribution: PropTypes.string,
    visible: PropTypes.bool,
    opacity: PropTypes.number
  };

  loaded(map: mapboxglTypes.Map) {
    this.viewModel = new RasterTileLayerViewModel(map, this.props);
  }

  removed() {
    this.viewModel = null;
  }

  render() {
    return null;
  }
}
