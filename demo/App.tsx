import React from 'react';
import { SmMap, SmWebMap, SmRasterTileLayer, SmVectorTileLayer, SmSource, SmLayer } from '../src/mapboxgl';
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
  source?: {
    [id: string]: any;
  };
  [stateName: string]: any;
}

class App extends React.Component<null, AppState> {
  constructor(props) {
    super(props);
    this.state = Object.assign(mapProps, {
      uniqueFeatures: null,
      ranksymbolFeatures: [],
      rangeFeatures: [],
      mapOptions: {
        center: [104.05, 30.66] as [number, number],
        zoom: 3
      },
      sources: {},
      layers: [],
      sprites: {},
      glyphs: {}
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

  addRasterLayer = () => {
    const newLayers = [...this.state.layers];
    const newSources = { ...this.state.sources };
    const rasterSource = {
      // id: 'OpenStreetMap',
      type: 'raster',
      tiles: ['http://t2.supermapcloud.com/FileService/image?map=quanguo&type=web&x={x}&y={y}&z={z}'],
      tileSize: 256
    };
    const rasterLayer = {
      id: 'osm-layer',
      type: 'raster',
      source: 'OpenStreetMap'
    };
    // newSources.push(rasterSource);
    newSources['OpenStreetMap'] = rasterSource;
    newLayers.push(rasterLayer);
    this.setState({
      sources: newSources,
      layers: newLayers
    });
  };

  addVectorTileLayer = () => {
    const newLayers = [...this.state.layers];
    const newSources = { ...this.state.sources };
    const newSprites = { ...this.state.sprites };
    const newGlyphs = { ...this.state.glyphs };
    const vectorSource = {
      // id: 'ChinaDark',
      type: 'vector',
      tiles: [
        'http://172.16.15.124:8090/iserver/services/map-china400/restjsr/v1/vectortile/maps/ChinaDark/tiles/{z}/{x}/{y}.mvt'
      ],
      bounds: [-180, -85.0511287798065, 180, 85.05112877980648]
    };
    const vectorLayers: mapboxglTypes.Layer[] = [
      {
        id: 'China_Province_pl@China',
        type: 'fill',
        source: 'ChinaDark',
        'source-layer': 'China_Province_pg@China',
        metadata: {
          'layer:caption': 'China_Province_pg@China_L1-L13'
        },
        minzoom: 0,
        maxzoom: 21,
        filter: ['all', ['==', '$type', 'Polygon']],
        layout: {
          visibility: 'visible'
        },
        paint: {
          'fill-color': 'rgba(189,16,224,1)',
          'fill-antialias': true
        }
      },
      {
        id: 'China_Province_ln@China#2',
        type: 'line',
        source: 'ChinaDark',
        'source-layer': 'China_Province_ln@China',
        metadata: {
          'layer:caption': 'China_Province_ln@China_L6-L13'
        },
        minzoom: 2,
        maxzoom: 21,
        filter: ['all', ['==', '$type', 'LineString']],
        layout: {
          visibility: 'visible'
        },
        paint: {
          'line-width': 0.38,
          'line-color': 'rgba(126,211,33,1)'
        }
      },
      {
        id: 'China_Capital_pt@China#2',
        type: 'symbol',
        source: 'ChinaDark',
        'source-layer': 'China_Capital_pt@China',
        metadata: {
          'layer:caption': 'China_Capital_pt@China_L6-L12'
        },
        minzoom: 3,
        maxzoom: 11,
        filter: ['all', ['==', '$type', 'Point'], ['has', 'NAME'], ['!=', 'NAME', '']],
        layout: {
          'icon-rotation-alignment': 'viewport',
          'text-field': '{NAME}',
          'text-size': 14.24,
          'text-anchor': 'bottom',
          'text-allow-overlap': false,
          'icon-size': 1,
          'symbol-placement': 'point',
          'icon-image': 'marker_909076_3_474747',
          'text-font': ['Microsoft YaHei Regular'],
          'text-rotate': 360,
          'text-letter-spacing': 0,
          'text-justify': 'left',
          'text-rotation-alignment': 'viewport',
          'text-ignore-placement': false,
          visibility: 'visible'
        },
        paint: {
          'text-color': 'rgba(248,231,28,1)',
          'text-translate': [0, -4]
        }
      }
    ];
    // newSources.push(vectorSource);
    newSources['ChinaDark'] = vectorSource;
    newSprites['ChinaDark'] =
      'http://172.16.15.124:8090/iserver/services/map-china400/restjsr/v1/vectortile/maps/ChinaDark/sprites/sprite';
    newGlyphs['ChinaDark'] =
      'http://172.16.15.124:8090/iserver/services/map-china400/restjsr/v1/vectortile/maps/ChinaDark/fonts/{fontstack}/{range}';
    newLayers.push(...vectorLayers);

    this.setState({
      sources: newSources,
      layers: newLayers,
      sprites: newSprites,
      glyphs: newGlyphs
    });
  };

  removeRasterLayer = () => {
    const newLayers = [...this.state.layers];
    const index = newLayers.findIndex(layer => layer.source === 'OpenStreetMap');
    if (index < 0) {
      return;
    }
    newLayers.splice(index, 1);
    this.setState({
      layers: newLayers
    });
  };

  removeVectorTileLayer = () => {
    const newLayers = [...this.state.layers];
    const index = newLayers.findIndex(layer => layer.source === 'ChinaDark');
    if (index < 0) {
      return;
    }
    newLayers.splice(index, 3);
    this.setState({
      layers: newLayers
    });
  };

  handleChangeStyleBgColor = e => {
    const { layers } = this.state;
    const layer = layers.find(l => l.id === 'China_Province_pl@China');
    if (!layer) {
      return;
    }
    const paint = { ...layer.paint };
    paint['fill-color'] = e.target.value;
    layer.paint = paint;
    this.setState({
      layers: layers
    });
  };

  renderSources() {
    const { sources } = this.state;
    const UIs = [];
    for (const id in sources) {
      UIs.push(<SmSource key={id} id={id} {...sources[id]} />);
    }
    // Object.entries(sources).forEach(([id, source]) => {
    //   UIs.push(<SmSource key={id} type={source.type} {...source} />);
    // });
    return UIs;
  }

  renderLayers() {
    const { layers } = this.state;
    const UIs = [];
    layers.forEach(layer => {
      UIs.push(<SmLayer key={layer.id} layerId={layer.id} {...layer} />);
    });
    return UIs;
  }

  handleChangeZoom = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = +e.target.value;
    value = isNaN(value) ? 3 : value;
    const mapOptions = {...this.state.mapOptions};
    mapOptions.zoom = value;
    this.setState({ mapOptions });
  };

  handleChangeCenter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { attr } = e.target.dataset;
    const value = +e.target.value;
    if (isNaN(value)) {
      return;
    }
    const mapOptions = {...this.state.mapOptions};
    const newCenter = (mapOptions.center as any).slice();
    if (attr === 'lat') {
      newCenter[0] = value;
    } else {
      newCenter[1] = value;
    }
    mapOptions.center = newCenter;
    this.setState({ mapOptions });
  };

  render() {
    const { mapId, mapOptions, serverUrl, layers, sprites, glyphs } = this.state;
    return (
      <div className="App">
        <div className="ctr-btns">
          <div>
            <label>
              经度：
              <input type="text" data-attr="lat" onChange={this.handleChangeCenter} defaultValue={mapOptions.center[0]} />
            </label>
            <label>
              纬度：
              <input type="text" data-attr="lon" onChange={this.handleChangeCenter} defaultValue={mapOptions.center[1]} />
            </label>
            <label>
              缩放：
              <input type="text" onChange={this.handleChangeZoom} defaultValue={'' + mapOptions.zoom} />
            </label>
            <label>
              ChinaDark 颜色：
              <select onChange={this.handleChangeStyleBgColor} defaultValue="blue">
                <option value="rgba(255, 0, 0, .5)">red</option>
                <option value="blue">blue</option>
                <option value="#000">black</option>
              </select>
            </label>
          </div>
          <div>
            <button onClick={this.addRasterLayer}>add raster</button>
            <button onClick={this.addVectorTileLayer}>add vectorTile</button>
          </div>
          <div>
            <button onClick={this.removeRasterLayer}>remove raster</button>
            <button onClick={this.removeVectorTileLayer}>remove vectorTile</button>
          </div>
        </div>
        <header className="App-header">
          <SmMap onClick={e => console.log(e)} mapOptions={mapOptions} sprites={sprites} glyphs={glyphs}>
            {this.renderSources()}
            {this.renderLayers()}
          </SmMap>
          {/* <SmWebMap
            mapId={mapId}
            mapOptions={mapOptions}
            serverUrl={serverUrl}
            onLoad={this.mapLoaded}
          >
            <SmRasterTileLayer {...rasteLayerOptions} />
            <SmVectorTileLayer styleOptions="http://iclient.supermap.io/iserver/services/map-Population/rest/maps/PopulationDistribution/tileFeature/vectorstyles.json?type=MapBox_GL&styleonly=true" />
          </SmWebMap> */}
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
