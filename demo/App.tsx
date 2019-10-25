import React from 'react';
import {
  SmWebMap,
  SmRasterTileLayer,
  SmVectorTileLayer
} from '../src/mapboxgl';
import { mapProps, mapOptionsW, mapOptionsC, rasteLayerOptions } from './datas/data';
import './style.scss';

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
  crs?: string;
}

interface AppState {
  mapId?: string;
  mapOptions?: mapOptions;
  serverUrl?: string;
  [stateName: string]: any;
}

class App extends React.Component<null, AppState> {
  constructor(props) {
    super(props);
    this.state = Object.assign(mapProps, {
      uniqueFeatures: null,
      ranksymbolFeatures: [],
      rangeFeatures: []
    });
  }

  changeMapId = (id: string) => {
    this.setState({
      mapId: id,
      mapOptions: {} as mapOptions,
      serverUrl: 'http://support.supermap.com.cn:8092/'
    });
  };

  changeCRS = crs => {
    this.setState({
      mapId: '',
      serverUrl: '',
      mapOptions: (crs ? mapOptionsW : mapOptionsC) as mapOptions
    });
  };

  setUniqueFeatures(features) {
    this.setState({
      uniqueFeatures: features
    });
  }

  mapLoaded(e) {
    console.log('map load: ', e);
  }

  render() {
    const { mapId, mapOptions, serverUrl } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <SmWebMap
            mapId={mapId}
            mapOptions={mapOptions}
            serverUrl={serverUrl}
            onLoad={this.mapLoaded}
          >
            <SmRasterTileLayer {...rasteLayerOptions} />
            <SmVectorTileLayer styleOptions="http://iclient.supermap.io/iserver/services/map-Population/rest/maps/PopulationDistribution/tileFeature/vectorstyles.json?type=MapBox_GL&styleonly=true" />
          </SmWebMap>
        </header>
        <div className="ctr-btns">
          <button
            onClick={() => {
              this.changeMapId('1649097980');
            }}
          >
            change
          </button>
          <button
            onClick={() => {
              this.changeCRS(true);
            }}
          >
            change crs w
          </button>
          <button
            onClick={() => {
              this.changeCRS(false);
            }}
          >
            change crs c
          </button>
        </div>
      </div>
    );
  }
}

export default App;
