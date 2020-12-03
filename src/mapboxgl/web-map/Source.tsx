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

  componentDidUpdate() {
    console.log(`source "${this.props.id}" updated`);
  }

  componentWillUnmount() {
    setTimeout(() => {
      this._map.removeSource(this.props.id);
      console.log('source "'.concat(this.props.id, '" removed'));
    }, 100);
  }

  loaded(map: mapboxglTypes.Map) {
    this._map = map;
    const { id, mapNotLoadedTip, ...sourceOption } = this.props;
    if (this._map.getSource(id)) {
        console.log(`There is already a source with the id "${id}"`);
        return;
    }
    this._map.addSource(id, sourceOption);
  }

  render() {
    return null;
  }
}
