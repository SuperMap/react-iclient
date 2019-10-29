import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import isEqual from 'lodash.isequal';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import layer, { LayerProps } from '../../../_mixin/layer';
import { isFunction } from '../../../../common/_utils/util';
import RangeThemeLayerViewModel from './RangeThemeLayerViewModel';

interface RangeThemeProps extends MapGetterProps, LayerProps {
  layerName?: string;
  options?: object;
  data: any[];
  onLoad?: (themeLayer?:any, map?: mapboxglTypes.Map) => any;
}

@compose(
  mapGetter,
  layer
)
export default class RangeThemeLayer extends React.Component<RangeThemeProps> {
  viewModel: RangeThemeLayerViewModel;

  static defaultProps = { options: {} };
  static propTypes = {
    layerName: PropTypes.string,
    options: PropTypes.object,
    data: PropTypes.array.isRequired
  };

  componentDidUpdate(prevProps: RangeThemeProps) {
    const { data } = this.props;
    if (!isEqual(prevProps.data, data) && this.viewModel) {
      this.viewModel.setData(data);
    }
  }

  loaded(map: mapboxglTypes.Map) {
    const { onLoad } = this.props;
    this.viewModel = new RangeThemeLayerViewModel(map, this.props);
    isFunction(onLoad) && onLoad(this.viewModel.themeLayer, map);
  }

  render() {
    return null;
  }
}
