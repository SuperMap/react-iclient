import { Component } from 'react';
import ClusterLayerViewModel from './ClusterLayerViewModel';
import CircleStyle from '../../../_types/CircleStyle';
import isEqual from 'lodash.isequal';
import MapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import Layer, { LayerProps } from '../../../_mixin/layer';
import { compose } from 'recompose';

interface ClusterLayerProps extends LayerProps, MapGetterProps {
  data: object;
  radius?: number;
  maxZoom?: number;
  clusteredPointStyle?: object;
  unclusteredPointStyle?: object;
  clusteredPointTextLayout?: object;
}

@compose(MapGetter, Layer)
class ClusterLayer extends Component<ClusterLayerProps> {
  viewModel: ClusterLayerViewModel;
  static defaultProps = {
    radius: 50,
    maxZoom: 14,
    clusteredPointStyle: new CircleStyle({
      'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
      'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
    }),
    unclusteredPointStyle: new CircleStyle({
      'circle-color': '#11b4da',
      'circle-radius': 4,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff'
    })
  };
  componentDidUpdate(prevProps: ClusterLayerProps) {
    const { data, clusteredPointStyle, unclusteredPointStyle, clusteredPointTextLayout } = this.props;
    if (!isEqual(data, prevProps.data)) {
      this.viewModel && this.viewModel.setData(data);
    }
    if (prevProps.clusteredPointStyle !== clusteredPointStyle) {
      this.viewModel && this.viewModel.setClusteredPointStyle(clusteredPointStyle);
    }
    if (prevProps.unclusteredPointStyle !== unclusteredPointStyle) {
      this.viewModel && this.viewModel.setUnclusteredPointStyle(unclusteredPointStyle);
    }
    if (prevProps.clusteredPointTextLayout !== clusteredPointTextLayout) {
      this.viewModel && this.viewModel.setClusteredPointTextLayout(clusteredPointTextLayout);
    }
  }
  loaded(map: mapboxglTypes.Map) {
    const options = JSON.parse(JSON.stringify(this.props));
    delete options.data;
    this.viewModel = new ClusterLayerViewModel(map, this.props.data, { ...options });
  }
  render() {
    return null;
  }
}

export default ClusterLayer;
