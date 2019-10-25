import './style.scss';

import * as components from './components';
import * as commontypes from './_types';

export *  from './components';
// export const WebMap = components.WebMap;
export default {
  ...components,
  commontypes
};
