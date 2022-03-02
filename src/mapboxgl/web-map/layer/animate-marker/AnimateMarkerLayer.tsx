
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
@mapGetter
export default class AnimateMarkerLayer extends Component<AnimateMarkerLayerProps> {

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

  componentDidMount() {
    this._markersElement = [];
  }

  componentDidUpdate(prevProps: AnimateMarkerLayerProps) {

    if (this.viewModel && !isEqual(prevProps.features, this.props.features)) {
      this._markersElement = [];
      this._getMarkerElement();
      this.props.features && this.viewModel.setFeatures(this.props.features, this._markersElement);
    }
    if (this.viewModel && !isEqual(prevProps.type, this.props.type)) {
      this._markersElement = [];
      this._getMarkerElement();
      this.viewModel.setType(this._markersElement);
    }
    if (this.viewModel && this.props.width && prevProps.width !== this.props.width) {
      this.marker && this.marker.setMarkersWidth(this.props.width);
    }
    if (this.viewModel && this.props.height && prevProps.height !== this.props.height) {
      this.marker && this.marker.setMarkersHeight && this.marker.setMarkersHeight(this.props.height);
    }
    if (this.viewModel && this.props.textColor && prevProps.textColor !== this.props.textColor) {
      this.marker && this.marker.setMarkersTextColor(this.props.textColor);
    }
    if (this.viewModel && this.props.textFontSize && prevProps.textFontSize !== this.props.textFontSize) {
      this.marker && this.marker.setMarkersTextFontSize(this.props.textFontSize);
    }
    if (this.viewModel && this.props.colors && this.props.colors.length && this.props.colors.length > 0 && !isEqual(prevProps.colors, this.props.colors)) {
      this.marker && this.marker.setMarkersColors(this.props.colors);
    }
    if (this.viewModel && this.props.textField && prevProps.textField !== this.props.textField) {
      this.marker && this.marker.setMarkersTextField(this.props.textField);
    }
  }

  componentWillUnmount() {
    this.viewModel && this.viewModel.clearMarkerLayer();
  }
  loaded(map: mapboxglTypes.Map) {
    this.props.features && this._getMarkerElement();
    this.viewModel = new AnimateMarkerLayerViewModel(map, this.props.features, this._markersElement, this.props.fitBounds);

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
        this.marker = new RotatingApertureMarker(features, { width, colors, textField, textColor, textFontSize });
        break;
      case 'haloRing':
          this.marker = new HaloRingMarker(features, { width, colors, textField, textColor, textFontSize });
        break;
      case 'breathingAperture':
        this.marker = new BreathingApertureMarker(features, { width, colors, textField, textColor, textFontSize });
        break;
      case 'diffusedAperture':
        this.marker = new DiffusedApertureMarker(features, { width, colors, textField, textColor, textFontSize });
        break;
      case 'rotatingTextBorder':
        this.marker = new RotatingTextBorderMarker(features, {
          width,
          height,
          colors,
          textField,
          textColor,
          textFontSize
        });
        break;
      case 'fluorescence':
        this.marker = new FluorescenceMarker(features, {
          width,
          colors,
          textField,
          textColor,
          textFontSize
        });
        break;
    }
    this.marker && (this._markersElement = this.marker.getMarkersElement());
  }
  render() {
    return null;
  }
}
