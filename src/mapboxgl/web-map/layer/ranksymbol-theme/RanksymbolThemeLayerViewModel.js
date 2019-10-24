import mapboxgl from '../../../../../public/libs/mapboxgl/mapbox-gl-enhance';
import '../../../../../public/libs/iclient-mapboxgl/iclient9-mapboxgl.min';

export default class RanksymbolThemeLayerViewModel extends mapboxgl.Evented {
  constructor(map, themeProps) {
    super();
    this.map = map;
    const { layerName, options, symbolType, layerId, data } = themeProps;
    this.layerName = layerName || layerId;
    this.symbolType = symbolType || 'Circle';
    options.id = options.id || layerId;
    this.options = options;
    this.layerId = layerId;
    this.data = data || [];
    this._init();
  }

  _init() {
    this.themeLayer = new mapboxgl.supermap.RankSymbolThemeLayer(this.layerName, this.symbolType, this.options);
    this.map.addLayer(this.themeLayer);
    this.themeLayer.addFeatures(this.data);
  }
}
