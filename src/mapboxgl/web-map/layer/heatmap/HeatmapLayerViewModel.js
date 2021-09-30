import mapboxgl from '../../../../../public/libs/mapboxgl/mapbox-gl-enhance';
/**
 * @class HeatMapLayerViewModel
 * @param {mapboxgl.map} map - mapboxgl map 对象。
 * @param {String} data - 热力图数据。
 * @param {Object} options - 可选参数。
 * @param {Object} [options.layerId] - 图层名。
 * @param {Object} [options.layerStyle] - 图层样式配置。
 */

export default class HeatMapLayerViewModel extends mapboxgl.Evented {
  constructor(map, data, options) {
    super();

    if (!map) {
      throw new Error('map is requierd');
    }
    options = options || {};
    this.map = map;
    this.data = data;
    this.layerId = options.layerId || 'heatmap' + new Date().getTime();
    let layerStyle = options.layerStyle;
    this.paint = layerStyle && layerStyle.paint;
    this.layout = layerStyle && layerStyle.layout;
    this._initializeHeatMapLayer();
  }

  setData(data) {
    if (!data || !this.map.getSource(this.layerId)) {
      return;
    }
    this.data = data;
    if (this.layerId && !this.map.getSource(this.layerId)) {
      this._initializeHeatMapLayer();
    } else {
      this.map.getSource(this.layerId).setData(data);
    }
  }

  setLayerStyle(layerStyle) {
    if (!layerStyle || !this.map.getSource(this.layerId)) {
      return;
    }

    let { paint, layout } = layerStyle;
    for (let prop of Object.keys(paint)) {
      this.map.setPaintProperty(this.layerId, prop, paint[prop]);
    }
    for (let prop of Object.keys(layout)) {
      this.map.setLayoutProperty(this.layerId, prop, layout[prop]);
    }

    this.layerStyle = layerStyle;
  }

  _initializeHeatMapLayer() {
    this.map.addSource(this.layerId, {
      type: 'geojson',
      data: this.data
    });

    this.map.addLayer({
      id: this.layerId,
      type: 'heatmap',
      source: this.layerId,
      paint: this.paint || {
        'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
        'heatmap-color': [
          'interpolate',
          ['linear'],
          ['heatmap-density'],
          0,
          'rgba(33,102,172,0)',
          0.2,
          'rgb(103,169,207)',
          0.4,
          'rgb(209,229,240)',
          0.6,
          'rgb(253,219,199)',
          0.8,
          'rgb(239,138,98)',
          1,
          'rgb(178,24,43)'
        ],
        'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20]
      },
      layout: this.layout || {}
    });
    this.fire('heatmaplayeraddsucceeded', { map: this.map });
  }
}
