import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import mapGetter, { MapGetterProps } from '../../../_mixin/map-getter';
import layer, { LayerProps } from '../../../_mixin/layer';
import DataFlowLayerViewModel from './DataFlowLayerViewModel';
import { CircleStyle, FillStyle, LineStyle } from '../../../_types';
import { isFunction } from '../../../../common/_utils/util';

interface DataFlowProps extends MapGetterProps, LayerProps {
  serviceUrl: string;
  registerToken?: string;
  geometry?: object;
  excludeField?: object;
  layerStyle?: object;
  onSubscribeFailed?(event?: object): any;
  onSubscribeSucceeded?(event?: object): any;
  onDataUpdated?(event?: object): any;
}

@compose(
  mapGetter,
  layer
)
export default class DataFlowLayer extends React.Component<DataFlowProps> {
  viewModel: DataFlowLayerViewModel;

  static defaultProps = {
    layerStyle: {
      line: new LineStyle(),
      circle: new CircleStyle(),
      fill: new FillStyle()
    }
  };
  static propTypes = {
    serviceUrl: PropTypes.string.isRequired,
    registerToken: PropTypes.string,
    geometry: PropTypes.object,
    excludeField: PropTypes.object,
    layerStyle: PropTypes.object,
    onSubscribeFailed: PropTypes.func,
    onSubscribeSucceeded: PropTypes.func,
    onDataUpdated: PropTypes.func
  };

  loaded(map: mapboxglTypes.Map) {
    let options = JSON.parse(JSON.stringify(this.props));
    delete options.serviceUrl;
    this.viewModel = new DataFlowLayerViewModel(map, this.props.serviceUrl, { ...options });
    this.registerEvents();
  }

  registerEvents() {
    // @ts-ignore
    this.viewModel.on('subscribefailed', e => {
      // this.$message.error(this.$t('dataFlow.dataSubscriptionFailed'));
      /**
       * @event subscribeFailed
       * @desc 数据订阅失败后触发。
       * @property {Object} e  - 事件对象。
       */
      isFunction(this.props.onSubscribeFailed) && this.props.onSubscribeFailed(e);
    });
    // @ts-ignore
    this.viewModel.on('subscribesucceeded', e => {
      /**
       * @event subscribeSucceeded
       * @desc 数据订阅失败后触发。
       * @property {Object} e  - 事件对象。
       */
      isFunction(this.props.onSubscribeSucceeded) && this.props.onSubscribeSucceeded(e);
    });
    // @ts-ignore
    this.viewModel.on('dataupdated', e => {
      /**
       * @event dataUpdated
       * @desc 数据更新成功后触发。
       * @property {GeoJSONObject} data - 更新的数据。
       * @property {mapboxgl.Map} map - MapBoxGL Map 对象。
       */
      isFunction(this.props.onDataUpdated) && this.props.onDataUpdated(e);
    });
  }

  render() {
    return null;
  }
}
