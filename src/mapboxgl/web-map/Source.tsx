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
  componentDidUpdate() {
    console.log(`source "${this.props.id}" updated`);
  }

  loaded(map: mapboxglTypes.Map) {
    const { id, mapNotLoadedTip, ...sourceOption } = this.props;
    if (map.getSource(id)) {
        console.log(`There is already a source with the id "${id}"`);
        return;
    }
    map.addSource(id, sourceOption);
  }

  render() {
    return null;
  }
}
