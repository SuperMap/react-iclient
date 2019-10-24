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
  onResize?(params: object): any
  onWebglcontextlost?(params: object): any
  onWebglcontextrestored?(params: object): any
  onRemove?(params: object): any
  onMovestart?(params: object): any
  onContextmenu?(params: object): any
  onDblclick?(params: object): any
  onClick?(params: object): any
  onTouchcancel?(params: object): any
  onTouchmove?(params: object): any
  onTouchend?(params: object): any
  onTouchstart?(params: object): any
  onDataloading?(params: object): any
  onMousemove?(params: object): any
  onMouseup?(params: object): any
  onMousedown?(params: object): any
  onSourcedataloading?(params: object): any
  onError?(params: object): any
  onData?(params: object): any
  onStyledata?(params: object): any
  onSourcedata?(params: object): any
  onMouseout?(params: object): any
  onStyledataloading?(params: object): any
  onMoveend?(params: object): any
  onMove?(params: object): any
  onRender?(params: object): any
  onZoom?(params: object): any
  onZoomstart?(params: object): any
  onZoomend?(params: object): any
  onBoxzoomstart?(params: object): any
  onBoxzoomcancel?(params: object): any
  onBoxzoomend?(params: object): any
  onRotate?(params: object): any
  onRotatestart?(params: object): any
  onRotateend?(params: object): any
  onDragend?(params: object): any
  onDrag?(params: object): any
  onDragstart?(params: object): any
  onPitch?(params: object): any
  onIdle?(params: object): any
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
  onLoad?(params: object): any;
}

export interface WebMapState {
  spinning?: boolean;
  mapId?: string | null;
  viewModelProps: string[];
};

