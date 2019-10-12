import * as React from "react";
import WebMapViewModel from './WebMapViewModel';

interface mapOptions {
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
  crs: string;
}

interface WebMapProps {
  mapId?: string,
  serverUrl?: string,
  mapOptions?: mapOptions,
  withCredentials?: boolean,
  target?:string,
  accessToken?:string,
  accessKey?:string,
  tiandituKey?:string,
  excludePortalProxyUrl?:boolean,
}

interface WebMapState {
  viewModel?: WebMapViewModel,
  map?: mapboxglTypes.Map,
  spinning?: boolean,
  mapId?: string|null,
  viewModelProps: string[]
}

class WebMap extends React.Component<WebMapProps, WebMapState> {
  // state: WebMapState
  constructor(props: WebMapProps) {
    super(props);
    this.state = {
      viewModelProps: [
        'mapId',
        'serverUrl',
        'mapOptions.center',
        'mapOptions.zoom',
        'mapOptions.style',
        'mapOptions.crs',
        'mapOptions.minZoom',
        'mapOptions.maxZoom',
        'mapOptions.maxBounds',
        'mapOptions.renderWorldCopies',
        'mapOptions.bearing',
        'mapOptions.pitch',
        'withCredentials'
      ]
    };
  }

  static defaultProps = {
    target: 'map'
  }

  componentDidUpdate(prevProps: WebMapProps) {
    if(this.state.viewModel) {
      this.state.viewModelProps.forEach((prop) => {
        const propArr = prop.split('.');
        const funcName = `set${propArr[propArr.length - 1].charAt(0).toUpperCase()}${propArr[propArr.length - 1].slice(1)}`;
        if(propArr.length > 1) {
          if(this.props[propArr[0]] && this.props[propArr[0]][propArr[1]] && (!prevProps.mapOptions || this.props[propArr[0]][propArr[1]] !== prevProps[propArr[0]][propArr[1]])) {
            this.state.viewModel[funcName](this.props[propArr[0]][propArr[1]]);
          }
        }else {
          if(this.props[propArr[0]] && this.props[propArr[0]] !== prevProps[propArr[0]]) {
            this.state.viewModel[funcName](this.props.mapId);
          }
        }
      })
    }
  }

  componentDidMount() {
    
    this.initializeWebMap();
    this.registerEvents();
  }
  initializeWebMap = () => {
    let {
      target,
      serverUrl,
      accessToken,
      accessKey,
      tiandituKey,
      withCredentials,
      excludePortalProxyUrl,
      mapOptions
    } = this.props;
    this.setState({
      viewModel: new WebMapViewModel(
        this.props.mapId,
        {
          target,
          serverUrl,
          accessToken,
          accessKey,
          tiandituKey,
          withCredentials,
          excludePortalProxyUrl
        },
        mapOptions
      )
    })
  }

  registerEvents = () => {
    this.state.viewModel && this.state.viewModel.on('addlayerssucceeded', e => {
      this.setState({
        spinning: false
      })
      e.map.resize();
    });
  }
  render() {
    const { target } = this.props;
    return (
      <div id={target} className="sm-component-web-map"></div>
    );
  }
}

export default WebMap;
