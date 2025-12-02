import React from 'react';
import { mount } from 'enzyme';
import mapGetter from '../map-getter';
import mapEvent from '../../_types/map-event';
import globalEvent from '../../../common/_utils/global-event';

// 创建一个简单的测试组件
class TestComponent extends React.Component {
  render() {
    return <div>Test Component</div>;
  }
}

const MapGetterComponent = mapGetter(TestComponent);

// Mock antd message
jest.mock('antd/lib/message', () => ({
  warning: jest.fn(),
  destroy: jest.fn()
}));

describe('mapGetter', () => {
  let wrapper;
  let mockMap;
  let mockWebMap;

  beforeEach(() => {
    mockMap = {
      on: jest.fn(),
      off: jest.fn()
    };
    
    mockWebMap = {};
    
    // 初始化地图事件
    mapEvent.mapCache = {};
    mapEvent.webMapCache = {};
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
    wrapper = mount(<MapGetterComponent />);
    expect(wrapper).toBeTruthy();
  });

  it('should add event listeners on componentDidMount', () => {
    const mapEventSpy = jest.spyOn(mapEvent, 'on');
    const globalEventSpy = jest.spyOn(globalEvent, 'on');
    
    wrapper = mount(<MapGetterComponent />);
    
    expect(mapEventSpy).toHaveBeenCalledWith('load-map', expect.any(Function));
    expect(globalEventSpy).toHaveBeenCalledWith('delete-map', expect.any(Function));
  });

  it('should remove event listeners on componentWillUnmount', () => {
    const mapEventSpy = jest.spyOn(mapEvent, 'off');
    const globalEventSpy = jest.spyOn(globalEvent, 'off');
    
    wrapper = mount(<MapGetterComponent />);
    const instance = wrapper.instance();
    
    wrapper.unmount();
    
    expect(mapEventSpy).toHaveBeenCalledWith('load-map', instance.loadMapSucceed);
    expect(globalEventSpy).toHaveBeenCalledWith('delete-map', instance.deleteMapSucceed);
  });

  it('should load map when map exists', () => {
    const targetName = 'test-map';
    mapEvent.setMap(targetName, mockMap);
    mapEvent.setWebMap(targetName, mockWebMap);
    
    const loadedSpy = jest.fn();
    TestComponent.prototype.loaded = loadedSpy;
    
    wrapper = mount(<MapGetterComponent mapTarget={targetName} />);
    const instance = wrapper.instance();
    
    // Simulate componentDidMount
    instance.componentDidMount();
    
    expect(loadedSpy).toHaveBeenCalledWith(mockMap);
    expect(instance.map).toBe(mockMap);
    expect(instance.webmap).toBe(mockWebMap);
  });

  it('should get target name from props', () => {
    const targetName = 'test-map';
    wrapper = mount(<MapGetterComponent mapTarget={targetName} />);
    const instance = wrapper.instance();
    
    expect(instance.getTargetName()).toBe(targetName);
  });

  it('should handle map target change', () => {
    const initialTarget = 'map1';
    const newTarget = 'map2';
    
    mapEvent.setMap(initialTarget, mockMap);
    mapEvent.setMap(newTarget, mockMap);
    
    wrapper = mount(<MapGetterComponent mapTarget={initialTarget} />);
    const instance = wrapper.instance();
    
    // Mock resetData
    const resetDataSpy = jest.spyOn(instance, 'resetData');
    
    // Simulate componentDidUpdate with changed mapTarget
    wrapper.setProps({ mapTarget: newTarget });
    
    expect(resetDataSpy).toHaveBeenCalled();
  });

  it('should handle map target change to non-existent map', () => {
    const initialTarget = 'map1';
    const newTarget = 'non-existent-map';
    
    mapEvent.setMap(initialTarget, mockMap);
    
    wrapper = mount(<MapGetterComponent mapTarget={initialTarget} />);
    const instance = wrapper.instance();
    
    // Mock resetData
    const resetDataSpy = jest.spyOn(instance, 'resetData');
    
    // Simulate componentDidUpdate with changed mapTarget
    wrapper.setProps({ mapTarget: newTarget });
    
    expect(resetDataSpy).toHaveBeenCalled();
  });

  it('should reset data correctly', () => {
    wrapper = mount(<MapGetterComponent />);
    const instance = wrapper.instance();
    instance.map = mockMap;
    instance.webmap = mockWebMap;
    
    const removedSpy = jest.fn();
    TestComponent.prototype.removed = removedSpy;
    
    instance.resetData();
    
    expect(instance.map).toBeNull();
    expect(instance.webmap).toBeNull();
    expect(removedSpy).toHaveBeenCalledWith(null);
  });

  it('should show warning when map is not loaded', () => {
    wrapper = mount(<MapGetterComponent />);
    const instance = wrapper.instance();
    instance.map = null;
    
    // Mock message.warning
    const message = require('antd/lib/message');
    const messageSpy = jest.spyOn(message, 'warning');
    jest.spyOn(message, 'destroy');
    
    const result = instance.mapNotLoadedTip();
    
    expect(result).toBe(true);
    expect(messageSpy).toHaveBeenCalledWith('您需要配置关联地图！');
  });

  it('should not show warning when map is loaded', () => {
    wrapper = mount(<MapGetterComponent />);
    const instance = wrapper.instance();
    instance.map = mockMap;
    
    // Mock message.destroy
    const message = require('antd/lib/message');
    jest.spyOn(message, 'destroy');
    
    const result = instance.mapNotLoadedTip();
    
    expect(result).toBe(false);
  });

  it('should handle loadMapSucceed correctly', () => {
    const targetName = 'test-map';
    mapEvent.setMap(targetName, mockMap);
    mapEvent.setWebMap(targetName, mockWebMap);
    
    wrapper = mount(<MapGetterComponent mapTarget={targetName} />);
    const instance = wrapper.instance();
    
    const loadMapSpy = jest.spyOn(instance, 'loadMap');
    
    instance.loadMapSucceed(mockMap, targetName);
    
    expect(loadMapSpy).toHaveBeenCalledWith(targetName);
  });

  it('should not load map when target does not match', () => {
    const targetName = 'test-map';
    const otherTarget = 'other-map';
    mapEvent.setMap(targetName, mockMap);
    
    wrapper = mount(<MapGetterComponent mapTarget={targetName} />);
    const instance = wrapper.instance();
    
    const loadMapSpy = jest.spyOn(instance, 'loadMap');
    
    instance.loadMapSucceed(mockMap, otherTarget);
    
    expect(loadMapSpy).not.toHaveBeenCalled();
  });

  it('should handle deleteMapSucceed correctly', () => {
    const targetName = 'test-map';
    
    wrapper = mount(<MapGetterComponent mapTarget={targetName} />);
    const instance = wrapper.instance();
    
    const resetDataSpy = jest.spyOn(instance, 'resetData');
    
    instance.deleteMapSucceed(targetName);
    
    expect(resetDataSpy).toHaveBeenCalled();
  });

  it('should not reset data when target does not match', () => {
    const targetName = 'test-map';
    const otherTarget = 'other-map';
    
    wrapper = mount(<MapGetterComponent mapTarget={targetName} />);
    const instance = wrapper.instance();
    
    const resetDataSpy = jest.spyOn(instance, 'resetData');
    
    instance.deleteMapSucceed(otherTarget);
    
    expect(resetDataSpy).not.toHaveBeenCalled();
  });
});