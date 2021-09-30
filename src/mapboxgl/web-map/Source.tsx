import React from 'react';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../_mixin/map-getter';

export type SourceProps = {
  id?: string;
  mapNotLoadedTip?: any; // map-getter 上添加的，也没找到在哪里使用了
} & MapGetterProps &
  mapboxglTypes.AnySourceData;

@compose(mapGetter)
export default class Source extends React.PureComponent<SourceProps> {
  _map: mapboxglTypes.Map;

  constructor(props: SourceProps) {
    super(props);
    this._map = null;
  }

  componentWillUnmount() {
    setTimeout(() => {
      this._map.removeSource(this.props.id);
    }, 100);
  }

  loaded(map: mapboxglTypes.Map) {
    this._map = map;
    const { id, mapNotLoadedTip, ...sourceOption } = this.props;
    if (this._map.getSource(id)) {
      return;
    }
    this._map.addSource(id, sourceOption);
  }

  render() {
    return null;
  }
}
