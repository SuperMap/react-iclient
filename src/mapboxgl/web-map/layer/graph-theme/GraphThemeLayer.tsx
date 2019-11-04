import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import isEqual from 'lodash.isequal';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import layer, { LayerProps } from '../../../_mixin/layer';
import { isFunction } from '../../../../common/_utils/util';
import GraphThemeLayerViewModel from './GraphThemeLayerViewModel';

interface GraphThemeProps extends MapGetterProps, LayerProps {
  chartsType?: string;
  layerName?: string;
  options?: object;
  data: object;
  onLoad?: (themeLayer?:any, map?: mapboxglTypes.Map) => void;
}

@compose(
  mapGetter,
  layer
)
export default class GraphThemeLayer extends React.Component<GraphThemeProps> {
  viewModel: GraphThemeLayerViewModel;

  static defaultProps = { options: {}, chartsType: 'Bar' };
  static propTypes = {
    chartsType: PropTypes.string,
    layerName: PropTypes.string,
    options: PropTypes.object,
    data: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps: GraphThemeProps) {
    const { data } = this.props;
    if (!isEqual(prevProps.data, data) && this.viewModel) {
      this.viewModel.setData(data);
    }
  }

  loaded(map: mapboxglTypes.Map) {
    const { onLoad } = this.props;
    this.viewModel = new GraphThemeLayerViewModel(map, this.props);
    isFunction(onLoad) && onLoad(this.viewModel.themeLayer, map);
  }

  render() {
    return null;
  }
}
