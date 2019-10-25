
import { Component } from 'react';
import { FeatureCollection } from 'geojson';
import isEqual from 'lodash.isequal';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import AnimateMarkerLayerViewModel from './AnimateMarkerLayerViewModel';
import BreathingApertureMarker from './marker/BreathingApertureMarker';
import DiffusedApertureMarker from './marker/DiffusedApertureMarker';
import HaloRingMarker from './marker/HaloRingMarker';
import RotatingApertureMarker from './marker/RotatingApertureMarker';
import RotatingTextBorderMarker from './marker/RotatingTextBorderMarker';
import FluorescenceMarker from './marker/FluorescenceMarker';

interface AnimateMarkerLayerProps extends MapGetterProps {
  features?: FeatureCollection,
  width?: number,
  height?: number,
  colors?: [string, string],
  textColor?: string,
  textField?: string,
  fitBounds?: Boolean,
  type?: any,
  textFontSize?: number
}
const initialState = { marker: null, _markersElement: [] };
type State = Readonly<typeof initialState>

@mapGetter
export default class AnimateMarkerLayer extends Component<AnimateMarkerLayerProps, State> {

  viewModel: AnimateMarkerLayerViewModel;
  map: mapboxglTypes.Map;
  marker: any;
  // 进行类型断言时报错 先注释掉 待优化
  // | RotatingTextBorderMarker
  // | BreathingApertureMarker
  // | DiffusedApertureMarker
  // | HaloRingMarker
  // | RotatingApertureMarker;
  _markersElement: HTMLElement[];

  static defaultProps = { type: 'breathingAperture', textFontSize: 14 };
  state: State = initialState

  componentDidMount() {
    this.setState({ _markersElement: [] });
  }

  componentDidUpdate(prevProps: AnimateMarkerLayerProps) {

    if (this.viewModel && !isEqual(prevProps.features, this.props.features)) {
      this.setState({ _markersElement: [] });
      this._getMarkerElement();
      this.props.features && this.viewModel.setFeatures(this.props.features, this.state._markersElement);
    }
    if (this.viewModel && !isEqual(prevProps.type, this.props.type)) {
      this.setState({ _markersElement: [] });
      this._getMarkerElement();
      this.viewModel.setType(this.state._markersElement);
    }
    if (this.viewModel && this.props.width && prevProps.width !== this.props.width) {
      this.state.marker && this.state.marker.setMarkersWidth(this.props.width);
    }
    if (this.viewModel && this.props.height && prevProps.height !== this.props.height) {
      this.state.marker && this.state.marker.setMarkersHeight && this.state.marker.setMarkersHeight(this.props.height);
    }
    if (this.viewModel && this.props.textColor && prevProps.textColor !== this.props.textColor) {
      this.state.marker && this.state.marker.setMarkersTextColor(this.props.textColor);
    }
    if (this.viewModel && this.props.textFontSize && prevProps.textFontSize !== this.props.textFontSize) {
      this.state.marker && this.state.marker.setMarkersTextFontSize(this.props.textFontSize);
    }
    if (this.viewModel && this.props.colors && this.props.colors.length && this.props.colors.length > 0 && !isEqual(prevProps.colors, this.props.colors)) {
      this.state.marker && this.state.marker.setMarkersTextFontSize(this.props.textFontSize);
    }
    if (this.viewModel && this.props.textField && prevProps.textField !== this.props.textField) {
      this.state.marker && this.state.marker.setMarkersTextField(this.props.textField);
    }
  }

  componentWillUnmount() {
    this.viewModel && this.viewModel.clearMarkerLayer();
  }
  loaded(map: mapboxglTypes.Map) {
    this.props.features && this._getMarkerElement();
    this.viewModel = new AnimateMarkerLayerViewModel(map, this.props.features, this.state._markersElement, this.props.fitBounds);

  }
  _getMarkerElement(): void {
    this.setState({ marker: null });
    let { features, width, height, colors, textFontSize, textColor, textField, type } = this.props;
    if (!features || JSON.stringify(features) === '{}' || !features.features) {
      this.viewModel && this.viewModel.clearMarkerLayer();
      return;
    }
    switch (type) {
      case 'rotatingAperture':
        this.setState({ marker: new RotatingApertureMarker(features, { width, colors, textField, textColor, textFontSize }) });
        break;
      case 'haloRing':
        this.setState({ marker: new HaloRingMarker(features, { width, colors, textField, textColor, textFontSize }) });
        break;
      case 'breathingAperture':
        this.setState({ marker: new BreathingApertureMarker(features, { width, colors, textField, textColor, textFontSize }) });
        break;
      case 'diffusedAperture':
        this.setState({ marker: new DiffusedApertureMarker(features, { width, colors, textField, textColor, textFontSize }) });
        break;
      case 'rotatingTextBorder':
        this.setState({
          marker: new RotatingTextBorderMarker(features, {
            width,
            height,
            colors,
            textField,
            textColor,
            textFontSize
          })
        });
        break;
      case 'fluorescence':
        this.setState({
          marker: new FluorescenceMarker(features, {
            width,
            colors,
            textField,
            textColor,
            textFontSize
          })
        });
        break;
    }
    if (this.state.marker) {
      this.setState({ _markersElement: this.state.marker.getMarkersElement() });
    }
  }
  render() {
    return null;
  }
}
