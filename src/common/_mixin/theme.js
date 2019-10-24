import React from 'react';
import isEqual from 'lodash.isequal';
import { getDisplayName } from 'recompose';
import globalEvent from '../_utils/global-event';

export default function theme(WrappedComponent) {
  return class extends React.Component {
    static displayName = `theme(${getDisplayName(WrappedComponent)})`;

    constructor(props) {
      super(props);

      const theme = globalEvent.theme || {};
      this.state = {
        backgroundData: props.background || theme.background,
        textColorsData: props.textColor || theme.textColor,
        colorGroupsData: props.colorGroup || theme.colorGroup,
        themeStyleChanged: false
      };

      this.changeTheme = this.changeTheme.bind(this);
    }

    componentDidMount() {
      globalEvent.on('change-theme', this.changeTheme);
    }

    componentDidUpdate(prevProps) {
      const { background, textColor, colorGroup } = this.props;
      const { background: prevBackground, textColor: prevTextColor, colorGroup: prevColorGroup } = prevProps;
      if (background !== prevBackground || textColor !== prevTextColor || !isEqual(colorGroup, prevColorGroup)) {
        this.setState({
          backgroundData: background,
          textColorsData: textColor,
          colorGroupsData: colorGroup
        });
      }
    }

    componentWillUnmount() {
      globalEvent.off('change-theme', this.changeTheme);
    }

    changeTheme(themeStyle) {
      this.setState({
        backgroundData: themeStyle.background,
        textColorsData: themeStyle.textColor,
        colorGroupsData: themeStyle.colorGroup,
        themeStyleChanged: true
      });
      // todo
      // this.$emit('theme-style-changed');
    }

    getColorStyle(index) {
      const { colorGroupsData } = this.state;
      return {
        color: colorGroupsData[index]
      };
    }

    getColor(index) {
      const { colorGroupsData } = this.state;
      return colorGroupsData[index];
    }

    render() {
      const { backgroundData, textColorsData } = this.state;
      const getBackgroundStyle = {
        background: this.backgroundData
      };
      const getTextColorStyle = {
        color: this.textColorsData
      };
      const newProps = Object.assign({}, this.props, {
        getBackground: backgroundData,
        getTextColor: textColorsData,
        getBackgroundStyle,
        getTextColorStyle
      });
      return <WrappedComponent {...newProps} {...this.state} ref={this.getComponentInstance} />;
    }
  };
}
