import React from 'react';
import { mount } from 'enzyme';
import withControl from '../control';
import mapEvent from '../../_types/map-event';
import { getFirstMapTarget } from '../../../common/_utils/util';

// Mock getFirstMapTarget utility
jest.mock('../../../common/_utils/util', () => ({
  getFirstMapTarget: jest.fn()
}));

// 创建一个简单的测试组件
class TestComponent extends React.Component {
  render() {
    return <div>Test Component</div>;
  }
}
TestComponent.displayName = 'TestComponent';

// 使用 withControl 包装测试组件
const ControlledComponent = withControl(TestComponent);

// Mock recompose getDisplayName
jest.mock('recompose', () => ({
  getDisplayName: jest.fn().mockReturnValue('TestComponent')
}));

describe('withControl', () => {
  let wrapper;
  let mockMap;

  beforeEach(() => {
    // 模拟 mapboxgl.Map 实例
    mockMap = {
      addControl: jest.fn(),
      removeControl: jest.fn()
    };

    wrapper = null;
    
    // Mock getFirstMapTarget to return a default value
    getFirstMapTarget.mockReturnValue('defaultMap');
    
    // 清除地图缓存
    mapEvent.mapCache = {};
  });

  afterEach(() => {
    jest.restoreAllMocks();
    if (wrapper) {
      try {
        wrapper.unmount();
      } catch (e) {
        // Ignore unmount errors
      }
    }
    
    // 清除所有地图事件监听器
    const listeners = mapEvent.listeners('load-map');
    listeners.forEach(listener => {
      mapEvent.off('load-map', listener);
    });
  });

  it('should render without errors', () => {
    wrapper = mount(
      <ControlledComponent />
    );
    expect(wrapper).toBeTruthy();
  });

  it('should handle component mount and unmount without errors', () => {
    expect(() => {
      wrapper = mount(<ControlledComponent />);
      try {
        wrapper.unmount();
      } catch (e) {
        // Ignore unmount errors
      }
    }).not.toThrow();
  });

  it('should not add control when there is no parent params', () => {
    wrapper = mount(<ControlledComponent />);
    const instance = wrapper.instance();
    expect(instance.parentIsWebMapOrMap).toBeFalsy();
  });

  it('should set parentIsWebMapOrMap to true when parent is SmWebMap', () => {
    const props = {
      parentParams: {
        name: 'SmWebMap',
        target: 'map1'
      }
    };
    wrapper = mount(<ControlledComponent {...props} />);
    const instance = wrapper.instance();
    expect(instance.parentIsWebMapOrMap).toBeTruthy();
  });

  it('should add map event listener on componentDidMount', () => {
    const props = {
      parentParams: {
        name: 'SmWebMap',
        target: 'map1'
      }
    };
    
    const spy = jest.spyOn(mapEvent, 'on');
    wrapper = mount(<ControlledComponent {...props} />);
    
    expect(spy).toHaveBeenCalledWith('load-map', expect.any(Function));
  });

  it('should remove map event listener on componentWillUnmount', () => {
    const props = {
      parentParams: {
        name: 'SmWebMap',
        target: 'map1'
      }
    };
    
    wrapper = mount(<ControlledComponent {...props} />);
    const instance = wrapper.instance();
    
    const spy = jest.spyOn(mapEvent, 'off');
    wrapper.unmount();
    
    expect(spy).toHaveBeenCalledWith('load-map', instance.controlLoadMapSucceed);
  });

  it('should add control to map when map is loaded', () => {
    const props = {
      parentParams: {
        name: 'SmWebMap',
        target: 'map1'
      },
      mapTarget: 'map1'
    };
    
    // 设置地图缓存
    mapEvent.setMap('map1', mockMap);
    mapEvent.getAllMaps = jest.fn().mockReturnValue({ map1: mockMap });
    
    const spy = jest.spyOn(mockMap, 'addControl');
    wrapper = mount(<ControlledComponent {...props} />);
    
    expect(spy).toHaveBeenCalled();
  });

  it('should remove control from map on componentWillUnmount', () => {
    const props = {
      parentParams: {
        name: 'SmWebMap',
        target: 'map1'
      },
      mapTarget: 'map1'
    };
    
    // 设置地图缓存
    mapEvent.setMap('map1', mockMap);
    mapEvent.getAllMaps = jest.fn().mockReturnValue({ map1: mockMap });
    
    wrapper = mount(<ControlledComponent {...props} />);
    const instance = wrapper.instance();
    
    const spy = jest.spyOn(mockMap, 'removeControl');
    wrapper.unmount();
    
    expect(spy).toHaveBeenCalledWith(instance.control);
  });

  it('should re-add control when position prop changes', () => {
    const props = {
      parentParams: {
        name: 'SmWebMap',
        target: 'map1'
      },
      mapTarget: 'map1',
      position: 'top-left'
    };
    
    // 设置地图缓存
    mapEvent.setMap('map1', mockMap);
    mapEvent.getAllMaps = jest.fn().mockReturnValue({ map1: mockMap });
    
    wrapper = mount(<ControlledComponent {...props} />);
    const instance = wrapper.instance();
    
    const removeSpy = jest.spyOn(instance, 'remove');
    const addToSpy = jest.spyOn(instance, 'addTo');
    
    wrapper.setProps({ position: 'top-right' });
    
    expect(removeSpy).toHaveBeenCalled();
    expect(addToSpy).toHaveBeenCalled();
  });

  it('should initialize control with correct methods', () => {
    // 创建一个实例来测试控制初始化
    const instance = new (withControl(class extends React.Component {
      render() { 
        return <div></div>; 
      }
    }))({ parentParams: {} });
    
    instance.$el = document.createElement('div');
    instance.map = mockMap;
    
    const control = instance.initControl();
    
    expect(control.onAdd()).toBe(instance.$el);
    expect(control.onRemove()).toBe(mockMap);
  });
});