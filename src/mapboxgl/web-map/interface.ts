export const MAP_EVENT_NAMES: string[] = [
  'onResize',
  'onWebglcontextlost',
  'onWebglcontextrestored',
  'onRemove',
  'onMovestart',
  'onContextmenu',
  'onDblclick',
  'onClick',
  'onTouchcancel',
  'onTouchmove',
  'onTouchend',
  'onTouchstart',
  'onDataloading',
  'onMousemove',
  'onMouseup',
  'onMousedown',
  'onSourcedataloading',
  'onError',
  'onData',
  'onStyledata',
  'onSourcedata',
  'onMouseout',
  'onStyledataloading',
  'onMoveend',
  'onMove',
  'onRender',
  'onZoom',
  'onZoomstart',
  'onZoomend',
  'onBoxzoomstart',
  'onBoxzoomcancel',
  'onBoxzoomend',
  'onRotate',
  'onRotatestart',
  'onRotateend',
  'onDragend',
  'onDrag',
  'onDragstart',
  'onPitch',
  'onIdle'
];

export interface MapEvents {
  onResize?(params: object): void
  onWebglcontextlost?(params: object): void
  onWebglcontextrestored?(params: object): void
  onRemove?(params: object): void
  onMovestart?(params: object): void
  onContextmenu?(params: object): void
  onDblclick?(params: object): void
  onClick?(params: object): void
  onTouchcancel?(params: object): void
  onTouchmove?(params: object): void
  onTouchend?(params: object): void
  onTouchstart?(params: object): void
  onDataloading?(params: object): void
  onMousemove?(params: object): void
  onMouseup?(params: object): void
  onMousedown?(params: object): void
  onSourcedataloading?(params: object): void
  onError?(params: object): void
  onData?(params: object): void
  onStyledata?(params: object): void
  onSourcedata?(params: object): void
  onMouseout?(params: object): void
  onStyledataloading?(params: object): void
  onMoveend?(params: object): void
  onMove?(params: object): void
  onRender?(params: object): void
  onZoom?(params: object): void
  onZoomstart?(params: object): void
  onZoomend?(params: object): void
  onBoxzoomstart?(params: object): void
  onBoxzoomcancel?(params: object): void
  onBoxzoomend?(params: object): void
  onRotate?(params: object): void
  onRotatestart?(params: object): void
  onRotateend?(params: object): void
  onDragend?(params: object): void
  onDrag?(params: object): void
  onDragstart?(params: object): void
  onPitch?(params: object): void
  onIdle?(params: object): void
}

export interface MapOptions {
  center?: [number, number] | mapboxglTypes.LngLatLike | { lon: number; lat: number };
  zoom?: number;
  maxBounds?: [[number, number], [number, number]] | mapboxglTypes.LngLatBoundsLike;
  minZoom?: number;
  maxZoom?: number;
  renderWorldCopies?: boolean;
  bearing?: number;
  pitch?: number;
  style?: any;
  container?: string;
  crs?: string;
}

export interface WebMapProps extends MapEvents {
  mapId?: string;
  serverUrl?: string;
  mapOptions?: MapOptions;
  withCredentials?: boolean;
  target?: string;
  accessToken?: string;
  accessKey?: string;
  tiandituKey?: string;
  excludePortalProxyUrl?: boolean;
  autoresize: boolean;
  onLoad?(params: object): void;
  onGetMapFailed?(params: object): void;
  onGetLayerDatasourceFailed?(params: object): void;
}

export interface WebMapState {
  spinning?: boolean;
  viewModelProps: string[];
};

