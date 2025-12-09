import React from 'react';
import { mount, shallow } from 'enzyme';
import theme from '../theme';
import globalEvent from '../../_utils/global-event';

// 创建一个简单的测试组件
const TestComponent = () => <div>Test Component</div>;
TestComponent.displayName = 'TestComponent';

// 使用 theme HOC 包装测试组件
const ThemedComponent = theme(TestComponent);

describe('theme mixin', () => {
  beforeEach(() => {
    // 重置 globalEvent 的主题
    globalEvent.theme = {};
  });

  it('should render correctly', () => {
    const wrapper = shallow(<ThemedComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set initial state from props', () => {
    const props = {
      background: '#fff',
      textColor: '#000',
      colorGroup: ['#ff0000', '#00ff00', '#0000ff']
    };
    
    const wrapper = shallow(<ThemedComponent {...props} />);
    const instance = wrapper.instance();
    
    expect(instance.state.backgroundData).toBe('#fff');
    expect(instance.state.textColorsData).toBe('#000');
    expect(instance.state.colorGroupsData).toEqual(['#ff0000', '#00ff00', '#0000ff']);
  });

  it('should set initial state from global theme when props are not provided', () => {
    globalEvent.theme = {
      background: 'rgba(0,0,0,0.6)',
      textColor: '#fff',
      colorGroup: ['#dd6b66', '#759aa0', '#e69d87']
    };

    const wrapper = shallow(<ThemedComponent />);
    const instance = wrapper.instance();

    expect(instance.state.backgroundData).toBe('rgba(0,0,0,0.6)');
    expect(instance.state.textColorsData).toBe('#fff');
    expect(instance.state.colorGroupsData).toEqual(['#dd6b66', '#759aa0', '#e69d87']);
  });

  it('should prefer props over global theme', () => {
    globalEvent.theme = {
      background: 'rgba(0,0,0,0.6)',
      textColor: '#fff',
      colorGroup: ['#dd6b66', '#759aa0', '#e69d87']
    };

    const props = {
      background: '#fff',
      textColor: '#000'
    };

    const wrapper = shallow(<ThemedComponent {...props} />);
    const instance = wrapper.instance();

    expect(instance.state.backgroundData).toBe('#fff');
    expect(instance.state.textColorsData).toBe('#000');
    expect(instance.state.colorGroupsData).toEqual(['#dd6b66', '#759aa0', '#e69d87']);
  });

  it('should handle case when globalEvent.theme is null or undefined', () => {
    globalEvent.theme = null;
    
    const wrapper = shallow(<ThemedComponent />);
    const instance = wrapper.instance();
    
    expect(instance.state.backgroundData).toBeUndefined();
    expect(instance.state.textColorsData).toBeUndefined();
    expect(instance.state.colorGroupsData).toBeUndefined();
  });

  it('should attach event listener on mount', () => {
    const spy = jest.spyOn(globalEvent, 'on');
    const wrapper = mount(<ThemedComponent />);
    
    expect(spy).toHaveBeenCalledWith('change-theme', expect.any(Function));
    
    spy.mockRestore();
    wrapper.unmount();
  });

  it('should detach event listener on unmount', () => {
    const spy = jest.spyOn(globalEvent, 'off');
    const wrapper = mount(<ThemedComponent />);
    const instance = wrapper.instance();
    
    wrapper.unmount();
    
    expect(spy).toHaveBeenCalledWith('change-theme', instance.changeTheme);
    spy.mockRestore();
  });

  it('should update state when changeTheme is called', () => {
    const wrapper = mount(<ThemedComponent />);
    const instance = wrapper.instance();
    
    const newTheme = {
      background: '#ffffff',
      textColor: '#333333',
      colorGroup: ['#1f717f', '#3097ab', '#9aeaf4']
    };
    
    instance.changeTheme(newTheme);
    
    expect(instance.state.backgroundData).toBe('#ffffff');
    expect(instance.state.textColorsData).toBe('#333333');
    expect(instance.state.colorGroupsData).toEqual(['#1f717f', '#3097ab', '#9aeaf4']);
    expect(instance.state.themeStyleChanged).toBe(true);
  });

  it('should update state when props change', () => {
    const wrapper = mount(<ThemedComponent 
      background="#fff" 
      textColor="#000" 
      colorGroup={['#ff0000']} 
    />);
    const instance = wrapper.instance();
    
    expect(instance.state.backgroundData).toBe('#fff');
    expect(instance.state.textColorsData).toBe('#000');
    expect(instance.state.colorGroupsData).toEqual(['#ff0000']);
    
    wrapper.setProps({
      background: '#000',
      textColor: '#fff',
      colorGroup: ['#00ff00']
    });
    
    expect(instance.state.backgroundData).toBe('#000');
    expect(instance.state.textColorsData).toBe('#fff');
    expect(instance.state.colorGroupsData).toEqual(['#00ff00']);
  });

  it('should provide getColor method', () => {
    const colorGroup = ['#dd6b66', '#759aa0', '#e69d87'];
    const wrapper = mount(<ThemedComponent colorGroup={colorGroup} />);
    const instance = wrapper.instance();
    
    expect(instance.getColor(0)).toBe('#dd6b66');
    expect(instance.getColor(1)).toBe('#759aa0');
    expect(instance.getColor(2)).toBe('#e69d87');
  });

  it('should provide getColorStyle method', () => {
    const colorGroup = ['#dd6b66', '#759aa0', '#e69d87'];
    const wrapper = mount(<ThemedComponent colorGroup={colorGroup} />);
    const instance = wrapper.instance();
    
    expect(instance.getColorStyle(0)).toEqual({ color: '#dd6b66' });
    expect(instance.getColorStyle(1)).toEqual({ color: '#759aa0' });
    expect(instance.getColorStyle(2)).toEqual({ color: '#e69d87' });
  });

  it('should pass additional props to wrapped component', () => {
    const wrapper = shallow(<ThemedComponent testProp="test-value" />);
    expect(wrapper.prop('testProp')).toBe('test-value');
  });

  it('should set displayName correctly', () => {
    expect(ThemedComponent.displayName).toBe('theme(TestComponent)');
  });
});