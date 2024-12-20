import { fakeDataServiceResult, fakeMapServiceResult, fakeAddressMatch } from './services';
const supermap = {};

supermap.FeatureService = () => {
  return {
    getFeaturesBySQL: (param, callback) =>
      setTimeout(() => {
        callback(fakeDataServiceResult);
      }, 0),
    getFeaturesByBounds: (param, callback) =>
      setTimeout(() => {
        callback(fakeDataServiceResult);
      }, 0),
    getFeaturesByGeometry: (param, callback) =>
      setTimeout(() => {
        callback(fakeDataServiceResult);
      }, 0)
  };
};

supermap.QueryService = (url) => {
  return {
    queryBySQL: (param, callback) =>
      setTimeout(() => {
        const data =
        url.includes('processFailed')
            ? {
                type: 'processFailed'
              }
            : {
                type: 'processCompleted',
                ...fakeMapServiceResult
              };
        callback(data);
      }, 0),
    queryByBounds: (param, callback) =>
      setTimeout(() => {
        callback(fakeMapServiceResult);
      }, 0),
    queryByGeometry: (param, callback) =>
      setTimeout(() => {
        callback(fakeMapServiceResult);
      }, 0)
  };
};

supermap.AddressMatchService = () => {
  return {
    code: (param, callback) =>
      setTimeout(() => {
        callback(fakeAddressMatch);
      }, 0)
  };
};

supermap.Util = {
  hexToRgba: function(hex, opacity) {
    var color = [],
      rgba = [];
    hex = hex.replace(/#/, '');
    for (let i = 0; i < 6; i += 2) {
      color[i] = '0x' + hex.substr(i, 2);
      rgba.push(parseInt(Number(color[i])));
    }
    rgba.push(opacity);
    return 'rgba(' + rgba.join(',') + ')';
  },
  isNumber: function(num) {
    return true;
  },
  newGuid: function(num) {
    return 0;
  },
};

supermap.DataFlowService = serviceUrl => {
  return {
    initBroadcast: () => {
      return this;
    },
    broadcast: () => {
      return this;
    },
    initSubscribe: () => {
      return {
        on: (event, callback) => {
          if (event === 'messageSucceeded') {
            if (serviceUrl.includes('MultiLineString')) {
              callback({
                featureResult: {
                  geometry: {
                    type: 'MultiLineString',
                    coordinates: [
                      [
                        [0, 0],
                        [10, 10]
                      ]
                    ]
                  },
                  properties: { id: 1 }
                }
              });
            } else if (event === 'messageSucceeded' && serviceUrl.includes('LineString')) {
              callback({
                featureResult: {
                  geometry: {
                    type: 'LineString',
                    coordinates: [
                      [0, 0],
                      [10, 10]
                    ]
                  },
                  properties: { id: 1 }
                }
              });
            } else if (event === 'messageSucceeded' && serviceUrl.includes('Line')) {
              callback({
                featureResult: {
                  geometry: {
                    type: 'Line',
                    coordinates: [
                      [0, 0],
                      [10, 10]
                    ]
                  },
                  properties: { id: 1 }
                }
              });
            } else if (event === 'messageSucceeded' && serviceUrl.includes('MultiPolygon')) {
              callback({
                featureResult: {
                  geometry: {
                    type: 'MultiPolygon',
                    coordinates: [
                      [
                        [0, 0],
                        [10, 10],
                        [20, 20],
                        [0, 0]
                      ]
                    ]
                  },
                  properties: { id: 1 }
                }
              });
            } else if (event === 'messageSucceeded' && serviceUrl.includes('Polygon')) {
              callback({
                featureResult: {
                  geometry: {
                    type: 'Polygon',
                    coordinates: [
                      [
                        [0, 0],
                        [10, 10],
                        [20, 20],
                        [0, 0]
                      ]
                    ]
                  },
                  properties: { id: 1 }
                }
              });
            } else {
              callback({ featureResult: { geometry: { type: 'Point', coordinates: [0, 0] }, properties: { id: 1 } } });
            }
          } else {
            callback();
          }
        }
      };
    },
    setExcludeField: () => {},
    on: (event, callback) => {
      callback();
    }
  };
};
supermap.MapvLayer = map => {
  return {
    onAdd: callback => {
      callback(map);
      return this;
    },
    removeFromMap: () => {
      return this;
    },
    render: callback => {
      callback();
    }
  };
};

supermap.RangeThemeLayer = () => {
  return {
    createThematicFeature(feature) {
      return feature;
    },
    getStyleByData() {
      return {};
    },
    addFeatures(feature) {
      return feature;
    }
  };
};

supermap.MapService = () => {
  return {
    getMapInfo(callback) {
      const mapObj = { element: null, object: {}, result: {}, type: 'processCompleted' };
      callback(mapObj);
    }
  };
};

supermap.LabelThemeLayer = () => {
  return {
    addFeatures() {}
  };
};

supermap.RangeThemeLayer = () => {
  return {
    addFeatures() {}
  };
};

supermap.UniqueThemeLayer = () => {
  return {
    addFeatures() {}
  };
};

supermap.RankSymbolThemeLayer = () => {
  return {
    addFeatures() {}
  };
};

supermap.GraphThemeLayer = () => {
  return {
    addFeatures() {}
  };
};

module.exports = supermap;
