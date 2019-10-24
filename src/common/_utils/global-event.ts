import { EventEmitter } from 'events';
import theme from './style/theme/theme.json';

class GlobalEvent extends EventEmitter {
  _theme: object;

  constructor(themValue: object = theme[1]) {
    super();
    this._theme = themValue;
  }

  get theme() {
    return this._theme;
  }

  set theme(themValue: object) {
    this._theme = themValue;
  }
}

export default new GlobalEvent();
