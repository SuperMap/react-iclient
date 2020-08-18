import mapboxgl from '../../../../../public/libs/mapboxgl/mapbox-gl-enhance';
import '../../../../../public/libs/iclient-mapboxgl/iclient-mapboxgl.min';

export default class GraphThemeLayerViewModel extends mapboxgl.Evented {
  constructor(map, themeProps) {
    super();
    this.map = map;
    const { layerName, options, chartsType, layerId, data } = themeProps;
    this.layerName = layerName || layerId;
    this.chartsType = chartsType || 'Bar';
    options.id = options.id || layerId;
    this.options = options;
    this.data = data || {};
    this._init();
  }

  _init() {
    this.themeLayer = new mapboxgl.supermap.GraphThemeLayer(this.layerName, this.chartsType, this.options);
    this.map.addLayer(this.themeLayer);
    if (JSON.stringify(this.data) !== '{}') {
      this.setData(this.data);
    }
  }

  setData(data) {
    this.themeLayer.addFeatures(data);
  }
}
