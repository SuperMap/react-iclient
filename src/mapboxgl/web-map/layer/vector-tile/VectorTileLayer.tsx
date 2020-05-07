import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import BaseLayer, { BaseLayerProps } from '../../../_mixin/base-layer';

interface VectorTileProps extends MapGetterProps, BaseLayerProps {
  styleOptions?: string | object;
}

@compose(
  mapGetter,
  BaseLayer
)
export default class VectorTileLayer extends React.Component<VectorTileProps> {
  static propTypes = {
    styleOptions: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  };

  loaded(map: mapboxglTypes.Map) {
    if (map && map['addStyle']) {
      map['addStyle'](this.props.styleOptions, this.props.before);
    }
  }

  render() {
    return null;
  }
}
