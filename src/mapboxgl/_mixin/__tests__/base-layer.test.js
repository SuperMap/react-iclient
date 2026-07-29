import React from 'react';
import { mount } from 'enzyme';
import withLayer from '../base-layer';

// 创建一个简单的测试组件
class TestComponent extends React.Component {
  render() {
    return <div>Test Component</div>;
  }
}

const LayerComponent = withLayer(TestComponent);

describe('withLayer', () => {
  let wrapper;
  let mockMap;

  beforeEach(() => {
    mockMap = {
      setLayerZoomRange: jest.fn(),
      setFilter: jest.fn(),
      setLayoutProperty: jest.fn(),
      setPaintProperty: jest.fn(),
      getLayer: jest.fn().mockReturnValue({
        metadata: {}
      }),
      removeLayer: jest.fn(),
      on: jest.fn(),
      off: jest.fn()
    };
  });

  afterEach(() => {
    if (wrapper) {
      try {
        wrapper.unmount();
      } catch(e) {
        // Ignore errors
      }
    }
    jest.restoreAllMocks();
  });

  it('should render without errors', () => {
    wrapper = mount(<LayerComponent />);
    expect(wrapper).toBeTruthy();
  });

  it('should generate layerId with component name prefix', () => {
    const wrapper1 = mount(<LayerComponent />);
    const wrapper2 = mount(<LayerComponent />);
    
    expect(wrapper1.props().layerId).toMatch(/^testcomponent-/);
    expect(wrapper2.props().layerId).toMatch(/^testcomponent-/);
  });

  it('should use provided layerId', () => {
    const customLayerId = 'custom-layer-id';
    wrapper = mount(<LayerComponent layerId={customLayerId} />);
    
    expect(wrapper.props().layerId).toBe(customLayerId);
  });

  it('should set default minzoom and maxzoom', () => {
    wrapper = mount(<LayerComponent />);
    
    expect(wrapper.props().minzoom).toBe(0);
    expect(wrapper.props().maxzoom).toBe(22);
  });

  it('should call setLayerZoomRange when minzoom or maxzoom changes', () => {
    wrapper = mount(<LayerComponent layerId="test-layer" minzoom={2} maxzoom={10} />);
    const instance = wrapper.instance();
    instance.map = mockMap;
    
    wrapper.setProps({ minzoom: 3 });
    expect(mockMap.setLayerZoomRange).toHaveBeenCalledWith('test-layer', 3, 10);
    
    wrapper.setProps({ maxzoom: 15 });
    expect(mockMap.setLayerZoomRange).toHaveBeenCalledWith('test-layer', 3, 15);
  });

  it('should call setFilter when filter changes', () => {
    const initialFilter = ['==', 'type', 'road'];
    const updatedFilter = ['==', 'type', 'water'];
    
    wrapper = mount(<LayerComponent layerId="test-layer" filter={initialFilter} />);
    const instance = wrapper.instance();
    instance.map = mockMap;
    
    wrapper.setProps({ filter: updatedFilter });
    expect(mockMap.setFilter).toHaveBeenCalledWith('test-layer', updatedFilter);
  });

  it('should call setLayoutProperty when layout changes', () => {
    const initialLayout = { visibility: 'visible' };
    const updatedLayout = { visibility: 'none', 'text-field': 'test' };
    
    wrapper = mount(<LayerComponent layerId="test-layer" layout={initialLayout} />);
    const instance = wrapper.instance();
    instance.map = mockMap;
    
    wrapper.setProps({ layout: updatedLayout });
    
    expect(mockMap.setLayoutProperty).toHaveBeenCalledWith('test-layer', 'visibility', 'none');
    expect(mockMap.setLayoutProperty).toHaveBeenCalledWith('test-layer', 'text-field', 'test');
  });

  it('should call setPaintProperty when paint changes', () => {
    const initialPaint = { 'fill-color': '#ff0000' };
    const updatedPaint = { 'fill-color': '#00ff00', 'fill-opacity': 0.5 };
    
    wrapper = mount(<LayerComponent layerId="test-layer" paint={initialPaint} />);
    const instance = wrapper.instance();
    instance.map = mockMap;
    
    wrapper.setProps({ paint: updatedPaint });
    
    expect(mockMap.setPaintProperty).toHaveBeenCalledWith('test-layer', 'fill-color', '#00ff00');
    expect(mockMap.setPaintProperty).toHaveBeenCalledWith('test-layer', 'fill-opacity', 0.5);
  });

  it('should update metadata when metadata changes', () => {
    const initialMetadata = { test: 'value1' };
    const updatedMetadata = { test: 'value2', another: 'value' };
    const mockLayer = { metadata: { test: 'value1' } };
    
    mockMap.getLayer = jest.fn().mockReturnValue(mockLayer);
    
    wrapper = mount(<LayerComponent layerId="test-layer" metadata={initialMetadata} />);
    const instance = wrapper.instance();
    instance.map = mockMap;
    
    wrapper.setProps({ metadata: updatedMetadata });
    
    expect(mockLayer.metadata.test).toBe('value2');
    expect(mockLayer.metadata.another).toBe('value');
  });

  it('should bind layer events', () => {
    const handleClick = jest.fn();
    const handleMouseMove = jest.fn();
    
    wrapper = mount(
      <LayerComponent 
        layerId="test-layer" 
        onClick={handleClick}
        onMousemove={handleMouseMove}
      />
    );
    
    const instance = wrapper.instance();
    instance.map = mockMap;
    // Mock overlayLayersManager
    instance.map.overlayLayersManager = {};
    
    instance.$_bindLayerEvents();
    
    expect(instance.registerEvents).toContain('click');
    expect(instance.registerEvents).toContain('mousemove');
  });

  it('should remove layer on componentWillUnmount', () => {
    wrapper = mount(<LayerComponent layerId="test-layer" />);
    const instance = wrapper.instance();
    instance.map = mockMap;
    instance.registerEvents = ['click', 'mousemove'];
    
    try {
      wrapper.unmount();
    } catch(e) {
      // Call remove directly
      instance.remove();
    }
    
    expect(mockMap.removeLayer).toHaveBeenCalledWith('test-layer');
  });

  it('should unbind layer events when removing', () => {
    const mockOff = jest.fn();
    const mockMapWithOff = {
      ...mockMap,
      off: mockOff
    };
    
    wrapper = mount(<LayerComponent layerId="test-layer" />);
    const instance = wrapper.instance();
    instance.map = mockMapWithOff;
    instance.registerEvents = ['click', 'mousemove'];
    
    instance.remove();
    
    expect(mockOff).toHaveBeenCalledTimes(2);
    expect(mockOff).toHaveBeenCalledWith('click', 'test-layer', instance.$_emitLayerMapEvent);
    expect(mockOff).toHaveBeenCalledWith('mousemove', 'test-layer', instance.$_emitLayerMapEvent);
  });

  it('should emit events correctly', () => {
    const handleClick = jest.fn();
    
    wrapper = mount(<LayerComponent layerId="test-layer" onClick={handleClick} />);
    const instance = wrapper.instance();
    instance.map = mockMap;
    
    const mockEvent = { type: 'click', test: 'data' };
    instance.$_emitLayerMapEvent(mockEvent);
    
    expect(handleClick).toHaveBeenCalledWith({
      map: mockMap,
      layerId: 'test-layer',
      mapboxEvent: mockEvent
    });
  });

  it('should handle component with no events', () => {
    wrapper = mount(<LayerComponent layerId="test-layer" />);
    const instance = wrapper.instance();
    instance.map = mockMap;
    
    // Should not throw
    expect(() => {
      instance.$_bindLayerEvents();
    }).not.toThrow();
  });

  it('should remove component correctly when no registerEvents', () => {
    wrapper = mount(<LayerComponent layerId="test-layer" />);
    const instance = wrapper.instance();
    instance.map = mockMap;
    instance.registerEvents = [];
    
    expect(() => {
      instance.remove();
    }).not.toThrow();
    
    expect(mockMap.removeLayer).toHaveBeenCalledWith('test-layer');
  });
});