// 获取当前时间返回置顶格式
import colorcolor from 'colorcolor';

// export function getDateTime(timeType) {
//   return geti18n().d(new Date(), timeType.replace(/\+/g, '_'), getLanguage());
// }
// hex -> rgba
export function hexToRgba(hex, opacity) {
  return (
    'rgba(' +
    parseInt('0x' + hex.slice(1, 3)) +
    ',' +
    parseInt('0x' + hex.slice(3, 5)) +
    ',' +
    parseInt('0x' + hex.slice(5, 7)) +
    ',' +
    opacity +
    ')'
  );
}
// export function isTransparent(color) {
//   const rgba = colorcolor(color, 'rgba');
//   return +rgba.match(/(\d(\.\d+)?)+/g)[3] === 0;
// }
// 保留指定位数的小数
export function reservedDecimal(val, precise) {
  return Number(val).toFixed(precise);
}
// 清除数字（字符串型的）的逗号
export function clearNumberComma(num) {
  if (num.replace) {
    num = num.replace(/,/g, '');
  }
  return num;
}
/**
 * 判断是否地理X坐标
 * @param data
 */
export function isXField(data) {
  var lowerdata = data.toLowerCase();
  return (
    lowerdata === 'x' ||
    lowerdata === 'smx' ||
    lowerdata === 'jd' ||
    lowerdata === '经度' ||
    lowerdata === '东经' ||
    lowerdata === 'longitude' ||
    lowerdata === 'lot' ||
    lowerdata === 'lon' ||
    lowerdata === 'lng' ||
    lowerdata === 'x坐标'
  );
}

/**
 * 判断是否地理Y坐标
 * @param data
 */
export function isYField(data) {
  var lowerdata = data.toLowerCase();
  return (
    lowerdata === 'y' ||
    lowerdata === 'smy' ||
    lowerdata === 'wd' ||
    lowerdata === '纬度' ||
    lowerdata === '北纬' ||
    lowerdata === 'latitude' ||
    lowerdata === 'lat' ||
    lowerdata === 'y坐标'
  );
}

export function getColorWithOpacity(color, opacity) {
  if (color.indexOf('rgba') > -1) {
    return color.substring(0, color.lastIndexOf(',') + 1) + opacity + ')';
  }
  let newColor = colorcolor(color, 'rgb');
  return 'rgba' + newColor.substring(3, newColor.length - 1) + `,${opacity})`;
}

const HOOKS = ['loaded', 'removed'];

export function callHook(instanceRef, hook, map) {
  HOOKS.includes(hook) && instanceRef[hook] && typeof instanceRef[hook] === 'function' && instanceRef[hook](map);
}

export function getComponentInstance(ref) {
  this.instanceRef = ref;
}

export function isFunction(event) {
  return Object.prototype.toString.call(event) === '[object Function]';
}

export function getFirstMapTarget(maps) {
  let firstTarget;
  for(let key in maps) {
    if(!!key) {
      firstTarget = key;
      break;
    }
  }
  return firstTarget;
}
