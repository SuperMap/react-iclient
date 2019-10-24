import chinaConsumptionLevel from './chinaConsumptionLevel';
import mapboxgl from '../../public/libs/mapboxgl/mapbox-gl-enhance';

var popup;

export const ranksmbolThemeOptions =  {
  //map: map,//该可选参数将在下个版本遗弃
  attributions: ' ',
  themeField: 'CON2009',
  // 配置图表参数
  symbolSetting: {
    //必设参数
    codomain: [0, 40000], // 允许图形展示的值域范围，此范围外的数据将不制作图图形
    //圆最大半径 默认100
    maxR: 100,
    //圆最小半径 默认0
    minR: 0,
    // 圆形样式
    circleStyle: { fillOpacity: 0.8 },
    // 符号专题图填充颜色
    fillColor: '#FFA500',
    // 专题图hover 样式
    circleHoverStyle: { fillOpacity: 1 }
  }
}

export const layerLoaded = (themeLayer, map) => {
  themeLayer.on(
    'mousemove',
    function(e) {
      return showInfoWin(themeLayer, e, map);
    }.bind(this)
  );
};

export const showInfoWin = (themeLayer, e, map) => {
  // e.target 是图形对象，即数据的可视化对象。
  // 图形对象的 refDataID 属性是数据（feature）的 id 属性，它指明图形对象是由那个数据制作而来;
  // 图形对象的 dataInfo 属性是图形对象表示的具体数据，他有两个属性，field、R 和 value;
  // var map = this.map;
  if (e.target && e.target.refDataID && e.target.dataInfo) {
    this.closeInfoWin(map);
    // 获取图形对应的数据 (feature)
    var fea = themeLayer.getFeatureById(e.target.refDataID);
    var info = e.target.dataInfo;
    // 弹窗内容
    var contentHTML = "<div style='color: #000; background-color: #fff'>";
    contentHTML += '<br><strong>' + fea.attributes.NAME + '</strong>';
    contentHTML += "<hr style='margin: 3px'>";
    switch (info.field) {
      case 'CON2009':
        contentHTML += '09' + ' <br/><strong>' + info.value + '</strong>（）';
        break;
      default:
        contentHTML += 'No Data';
    }
    contentHTML += '</div>';
    var tempPoint = map.unproject(new window.mapboxgl.Point(e.event.x, e.event.y));
    popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([tempPoint.lng, tempPoint.lat])
      .setHTML(contentHTML)
      .addTo(map);
    return;
  }
  closeInfoWin(map);
};
export const closeInfoWin = map => {
  if (popup) {
    popup.remove(map);
  }
};

export const getRanksymbolFeatures = () => {
  const features = [];
  for (var i = 0, len = chinaConsumptionLevel.length; i < len; i++) {
    // 省居民消费水平（单位：元）信息
    var provinceInfo = chinaConsumptionLevel[i];
    var geo = new mapboxgl.LngLat(provinceInfo[1], provinceInfo[2]);
    var attrs = {};
    attrs.NAME = provinceInfo[0];
    attrs.CON2009 = provinceInfo[3];
    var fea = new mapboxgl.supermap.ThemeFeature(geo, attrs);
    features.push(fea);
  }
};
