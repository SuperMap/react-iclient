import mapboxgl from '../../../public/libs/mapboxgl/mapbox-gl-enhance';

export interface MapMpdalOptions {
  target?: string;
  tiandituKey?: string;
  onLoad?: Function;
}

class MapViewModal extends mapboxgl.Evented {
  
  map: mapboxglTypes.Map & { style: any };
  mapOptions: any;
  tiandituKey: string;
  target: string;
  center: any;
  zoom: any;

  constructor(options: MapMpdalOptions, mapOptions: any = { style: { version: 8, sources: {}, layers: [] } }) {
    super();
    this.mapOptions = Object.assign({ style: { version: 8, sources: {}, layers: [] } }, mapOptions);
    this.tiandituKey = options.tiandituKey || '';
    this.target = options.target || 'map';
    this.center = mapOptions.center || [];
    this.zoom = mapOptions.zoom;
    this._createMap();
  }

  _createMap() {
    if (this.map) {
      this.map.remove();
      this.center = [];
      this.zoom = null;
    }
    this.mapOptions.container = this.target;
    setTimeout(() => {
      this.map = new mapboxgl.Map(this.mapOptions);
      this.map.on('load', () => {
        this.fire('addlayerssucceeded', {
          map: this.map
        });
      });
    }, 0);

    return;
  }

  /**
   * @function WebMapViewModel.prototype.resize
   * @description Map 更新大小。
   */
  resize(): void {
    this.map && this.map.resize();
  }

  /**
   * @function WebMapViewModel.prototype.setCRS
   * @description 设置地图的投影。
   * @param {Number} crs - 地图投影。
   */
  setCrs(crs): void {
    if (this.map) {
      this.mapOptions.crs = crs;
      //@ts-ignore
      crs && this.map.setCRS(mapboxgl.CRS.get(crs));
    }
  }
  /**
   * @function WebMapViewModel.prototype.setZoom
   * @description 设置地图的缩放级别。
   * @param {Number} zoom - 地图缩放级别。
   */
  setZoom(zoom): void {
    if (this.map) {
      this.mapOptions.zoom = zoom;
      (zoom || zoom === 0) && this.map.setZoom(zoom);
    }
  }
  /**
   * @function WebMapViewModel.prototype.setCenter
   * @description 设置地图的中心点。
   * @param {Array} center - 地图中心点。
   */
  setCenter(center): void {
    if (this.map) {
      this.mapOptions.center = center;
      center && (center as [number, number]).length > 0 && this.map.setCenter(center);
    }
  }
  /**
   * @function WebMapViewModel.prototype.setMaxBounds
   * @description 设置地图的最大范围。
   * @param {Array} maxBounds - 地图最大范围。
   */
  setMaxBounds(maxBounds): void {
    if (this.map) {
      this.mapOptions.maxBounds = maxBounds;
      maxBounds && (maxBounds as [[number, number], [number, number]]).length > 0 && this.map.setMaxBounds(maxBounds);
    }
  }
  /**
   * @function WebMapViewModel.prototype.setMinZoom
   * @description 设置地图的最小级别。
   * @param {Number} minZoom - 地图最小级别。
   */
  setMinZoom(minZoom): void {
    if (this.map) {
      this.mapOptions.minZoom = minZoom;
      (minZoom || minZoom === 0) && this.map.setMinZoom(minZoom);
    }
  }
  /**
   * @function WebMapViewModel.prototype.setMaxZoom
   * @description 设置地图的最大级别。
   * @param {Number} maxZoom - 地图最大级别。
   */
  setMaxZoom(maxZoom): void {
    if (this.map) {
      this.mapOptions.maxZoom = maxZoom;
      (maxZoom || maxZoom === 0) && this.map.setMinZoom(maxZoom);
    }
  }
  /**
   * @function WebMapViewModel.prototype.setRenderWorldCopies
   * @description 设置地图的平铺。
   * @param {Boolean} renderWorldCopies - 地图是否平铺。
   */
  setRenderWorldCopies(renderWorldCopies): void {
    if (this.map) {
      this.mapOptions.renderWorldCopies = renderWorldCopies;
      renderWorldCopies && this.map.setRenderWorldCopies(renderWorldCopies);
    }
  }
  /**
   * @function WebMapViewModel.prototype.setBearing
   * @description 设置地图的方位。
   * @param {Number} bearing - 地图的初始方位。
   */
  setBearing(bearing): void {
    if (this.map) {
      this.mapOptions.bearing = bearing;
      (bearing || bearing === 0) && this.map.setBearing(bearing);
    }
  }
  /**
   * @function WebMapViewModel.prototype.setPitch
   * @description 设置地图的俯仰。
   * @param {Number} pitch - 地图的初始俯仰。
   */
  setPitch(pitch): void {
    if (this.map) {
      this.mapOptions.pitch = pitch;
      (pitch || pitch === 0) && this.map.setPitch(pitch);
    }
  }

  addSprites(sourceId, sprite) {
    if (this.map?.style) {
      this.map.style.addSprite(sourceId, sprite);
    }
  }

  addGlyphs(sourceId, glyph) {
    if (this.map?.style) {
      this.map.style.addGlyphs(sourceId, glyph);
    }
  }
}

export default MapViewModal;
