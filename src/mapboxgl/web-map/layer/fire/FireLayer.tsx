import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import { FeatureCollection } from 'geojson';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import BaseLayer, { BaseLayerProps } from '../../../_mixin/base-layer';
import FireLayerViewModel from './FireLayerViewModel';

interface FireProps extends MapGetterProps, BaseLayerProps {
  features?: FeatureCollection;
  modelScale?: number;
}

@compose(
  mapGetter,
  BaseLayer
)
export default class FireLayer extends React.Component<FireProps> {
  viewModel: FireLayerViewModel;

  static defaultProps = { modelScale: 5.41843220338983e-6 };
  static propTypes = {
    features: PropTypes.object,
    modelScale: PropTypes.number
  };

  componentDidUpdate(prevProps: FireProps) {
    const { features, modelScale } = this.props;
    if (this.viewModel) {
      if (!isEqual(prevProps.features, features)) {
        this.viewModel.setFeatures(features);
      }
      if (prevProps.modelScale !== modelScale) {
        this.viewModel.setModelScale(modelScale);
      }
    }
  }

  loaded(map: mapboxglTypes.Map) {
    this.viewModel = new FireLayerViewModel(map, this.props.features, this.props.modelScale, this.props.layerId);
  }

  render() {
    return null;
  }
}
