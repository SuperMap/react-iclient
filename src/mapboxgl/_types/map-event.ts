import { EventEmitter } from 'events';
import WebMapViewModel from '../web-map/WebMapViewModel';
import SourceListModel from '../web-map/SourceListModel';
import globalEvent from '../../common/_utils/global-event';

class MapEvent extends EventEmitter {
  mapCache: object = {};

  webMapCache: object = {};

  getMap(mapTarget: string): mapboxglTypes.Map {
    return this.mapCache[mapTarget];
  }

  getWebMap(webmapTarget: string): WebMapViewModel {
    return this.webMapCache[webmapTarget];
  }

  getAllMaps(): object {
    return this.mapCache;
  }

  getAllWebMap(): object {
    return this.webMapCache;
  }

  setMap(mapTarget: string, map: mapboxglTypes.Map) {
    this.mapCache[mapTarget] = map;
  }

  setWebMap(webmapTarget: string, webmap: WebMapViewModel) {
    this.webMapCache[webmapTarget] = webmap;
  }

  deleteMap(mapTarget: string) {
    globalEvent.emit('delete-map', mapTarget);
    // drawEvent.$options.deletDrawOfMap(mapTarget);
    delete this.mapCache[mapTarget];
  }

  deleteWebMap(webmapTarget: string) {
    delete this.webMapCache[webmapTarget];
  }

  getMapSource(mapTarget: string): object[] {
    let sources = [];
    const map = this.getMap(mapTarget);
    if (map) {
      const sourceListModel = new SourceListModel({
        map
      });
      const sourceList = sourceListModel.getSourceList();
      for (let key in sourceList) {
        if (key) {
          let layers = sourceList[key].layers || [];
          layers.forEach(item => {
            if (item.source && item.type !== 'raster') {
              sources.push(item.source);
            }
          });
        }
      }
    }
    return sources;
  }
}

export default new MapEvent();
