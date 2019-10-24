import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import layer, { LayerProps } from '../../../_mixin/layer';

interface VectorTileProps extends MapGetterProps, LayerProps {
  styleOptions?: string | object;
};

@compose(mapGetter, layer)
export default class VectorTileLayer extends React.Component<VectorTileProps> {
  static propTypes = {
    styleOptions: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
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
