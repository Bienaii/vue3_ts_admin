/**
 * 格式转化工具函数
 */

// 数值增加分结号，如10000 -> 10,000
export function addComma(number: string | number) {
    if (number === undefined || number === null) {
      return '-'
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  