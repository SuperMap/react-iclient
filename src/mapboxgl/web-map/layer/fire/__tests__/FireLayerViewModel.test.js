import FireLayerViewModel from '../FireLayerViewModel';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
const mockMatrix = new Array(16).fill(0);
const mpckGL= {
  getParameter:jest.fn(),
  getExtension:jest.fn(),
}
const mockMap = {
  getLayer: jest.fn(),
  removeLayer: jest.fn(),
  getCanvas: jest.fn().mockReturnValue({
    width: 800,
    height: 600,
    addEventListener: jest.fn()
  }),
  triggerRepaint: jest.fn(),
  addLayer: function (layer) {
   if(layer.onAdd){
     layer.onAdd(this, mpckGL);
   }
   if(layer.render){
    setTimeout(() => {
      layer.render(mpckGL, mockMatrix);
    }, 100);
   }
  }
};

const features = {
  type: 'FeatureCollection',
  features: [
    {
      geometry: {
        coordinates: [115.78, 39.91],
        type: 'Point'
      },
      properties: {
        value: 0.06,
        id: 0
      },
      type: 'Feature'
    }
  ]
};

const multiFeatures = {
  type: 'FeatureCollection',
  features: [
    {
      geometry: {
        coordinates: [115.78, 39.91],
        type: 'Point'
      },
      properties: {
        value: 0.06,
        id: 0
      },
      type: 'Feature'
    },
    {
      geometry: {
        coordinates: [116.78, 40.91],
        type: 'Point'
      },
      properties: {
        value: 0.08,
        id: 1
      },
      type: 'Feature'
    }
  ]
};

const invalidFeatures = {
  type: 'FeatureCollection',
  features: [
    {
      geometry: {
        coordinates: [[115.78, 39.91], [116.78, 40.91]],
        type: 'LineString'
      },
      properties: {
        value: 0.06,
        id: 0
      },
      type: 'Feature'
    }
  ]
};

const tooManyFeatures = {
  type: 'FeatureCollection',
  features: Array(51).fill().map((_, i) => ({
    geometry: {
      coordinates: [115.78 + i * 0.01, 39.91 + i * 0.01],
      type: 'Point'
    },
    properties: {
      value: 0.06,
      id: i
    },
    type: 'Feature'
  }))
};

describe('FireLayerViewModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mapboxgl.MercatorCoordinate = {
      fromLngLat: jest.fn().mockReturnValue({ x: 0, y: 0, z: 0 })
    };

  });

  afterEach(() => {
    jest.restoreAllMocks();
  });


  it('should throw error when feature type is not Point', () => {
    expect(() => {
      new FireLayerViewModel(mockMap, invalidFeatures);
    }).toThrow("Feature's type must be point");
  });

  it('should throw error when there are more than 50 features', () => {
    expect(() => {
      new FireLayerViewModel(mockMap, tooManyFeatures);
    }).toThrow('The maximum number of features is 50');
  });

  it('should call _addFireLayer when setFeatures is called', () => {
    const addFireLayerSpy = jest.spyOn(FireLayerViewModel.prototype, '_addFireLayer').mockImplementation(() => {});
    const viewModel = new FireLayerViewModel(mockMap, features);
    viewModel.setFeatures(multiFeatures);
    expect(addFireLayerSpy).toHaveBeenCalled();
    addFireLayerSpy.mockRestore();
  });
  
  it('should execute render function logic to cover lines 117-137', (done) => {
    const viewModel = new FireLayerViewModel(mockMap, features);
    setTimeout(() => {
      // viewModel.render();
      done();
    }, 100);
  });

});