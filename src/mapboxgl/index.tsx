import '../common/_assets/iconfont/icon-sm-components.css';
import './style.scss';

import * as components from './components';
import * as commontypes from './_types';

export *  from './components';

const exportData = {
  ...components,
  commontypes
};

export default exportData;
