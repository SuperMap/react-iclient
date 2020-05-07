import React from 'react';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../../_mixin/map-getter';
import BaseLayer, { BaseLayerProps } from '../../_mixin/base-layer';

interface LayerProps extends MapGetterProps, BaseLayerProps {
  type: mapboxglTypes.Layer['type'];
  source: mapboxglTypes.Layer['source'];
  'source-layer'?: string;
  metadata?: any;
}

@compose(mapGetter, BaseLayer)
export default class Layer extends React.Component<LayerProps> {

  loaded(map: mapboxglTypes.Map) {
    const { type, source, layerId, minzoom, maxzoom, filter, layout, paint, metadata, before } = this.props;

    if (map.getLayer(layerId)) {
      console.error(`There is already a layer with the id "${layerId}"`);
      return;
    }

    if (typeof source === 'string' && !map.getSource(source)) {
      console.error(`Source "${source}" is not loaded`);
      return;
    }

    const layerOption: mapboxglTypes.Layer = {
      id: layerId,
      type,
      source
    };
    minzoom !== undefined && (layerOption.minzoom = minzoom);
    maxzoom !== undefined && (layerOption.maxzoom = maxzoom);
    filter && (layerOption.filter = filter);
    layout && (layerOption.layout = layout);
    paint && (layerOption.paint = paint);
    metadata && (layerOption.metadata = metadata);
    this.props['source-layer'] && (layerOption['source-layer'] = this.props['source-layer']);

    map.addLayer(layerOption, before);
  }

  removed() {}

  render() {
    return null;
  }
}
