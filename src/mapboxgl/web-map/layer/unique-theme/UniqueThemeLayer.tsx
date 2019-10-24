import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import isEqual from 'lodash.isequal';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import layer, { LayerProps } from '../../../_mixin/layer';
import UniqueThemeLayerViewModel from './UniqueThemeLayerViewModel';

interface UniqueThemeProps extends MapGetterProps, LayerProps {
  layerName?: string;
  options?: object;
  data: any[];
  onLoad?(themeLayer?: object, map?: mapboxglTypes.Map): any;
};

@compose(mapGetter, layer)
export default class UniqueThemeLayer extends React.Component<UniqueThemeProps> {
  viewModel: UniqueThemeLayerViewModel;

  static defaultProps = { options: {} };
  static propTypes = {
    layerName: PropTypes.string,
    options: PropTypes.object,
    data: PropTypes.array.isRequired,
  };

  componentDidUpdate(prevProps: UniqueThemeProps) {
    const { data } = this.props;
    if(!isEqual(prevProps.data, data) && this.viewModel) {
      this.viewModel.setData(data);
    }
  }

  
  loaded(map: mapboxglTypes.Map) {
    this.viewModel = new UniqueThemeLayerViewModel(map, this.props);
  }

  render() {
    return null;
  }

}
