import mapboxgl from '../../../../../public/libs/mapboxgl/mapbox-gl-enhance';
import '../../../../../public/libs/iclient-mapboxgl/iclient9-mapboxgl.min';

export default class LabelThemeLayerViewModel extends mapboxgl.Evented {
  constructor(map, themeProps) {
    super();
    const { layerName, options, layerId, data } = themeProps;
    this.map = map;
    this.layerName = layerName || layerId;
    options.id = options.id || layerId;
    this.options = options;
    this.data = data || [];
    this._init();
  }

  _init() {
    this.themeLayer = new mapboxgl.supermap.LabelThemeLayer(this.layerName, this.options);
    this.map.addLayer(this.themeLayer);
    this.themeLayer.addFeatures(this.data);
  }
}
