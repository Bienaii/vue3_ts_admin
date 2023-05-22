/**
 * 校验、正则
 */

/**
 * 判断path是否为外链
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
	return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 判断是否为数组类型，且数组长度大于0
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isCorrectArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]' && arg.length > 0
  }
  return Array.isArray(arg) && arg.length > 0
}
