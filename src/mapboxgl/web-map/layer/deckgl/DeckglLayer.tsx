import { Component } from 'react';
import MapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import BaseLayer, { BaseLayerProps } from '../../../_mixin/base-layer';
import { compose } from 'recompose';
import DeckglLayerViewModel from './DeckglLayerViewModel';

interface DeckglLayerProps extends MapGetterProps, BaseLayerProps {
  layerType:string,
  options:object
}

const LAYER_TYPE_ID_LIST = [
  'scatter-plot',
  'path-layer',
  'polygon-layer',
  'arc-layer',
  'hexagon-layer',
  'screen-grid-layer'
];

@compose(MapGetter,BaseLayer)
export default class DeckglLayer extends Component<DeckglLayerProps> {
  viewModel: DeckglLayerViewModel
  loaded(map: mapboxglTypes.Map) {
    const matchIndex = LAYER_TYPE_ID_LIST.findIndex(
      item => item === this.props.layerType
    );
    if (matchIndex > -1) {
      this.viewModel = new DeckglLayerViewModel(map, this.props);
    }
  }
  render() {
    return null;
  }
}
