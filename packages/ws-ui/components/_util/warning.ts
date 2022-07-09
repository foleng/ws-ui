/*
 * @Author: 冯振威 1181399414@qq.com
 * @Date: 2022-07-09 11:44:29
 * @LastEditors: 冯振威 1181399414@qq.com
 * @LastEditTime: 2022-07-09 11:50:43
 * @FilePath: /ws-ui/packages/ws-ui/components/_util/warning.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import rcWarning, {resetWarned} from 'rc-util/lib/warning'

export {resetWarned}
export function noop() {}

type Warning = (valid: boolean, component: string, message: string) => void

let warning: Warning = noop
if(process.env.NODE_ENV !== 'production') {
  warning = (valid, component, message) => {
    rcWarning(valid, `[ws: ${component}] ${message}`)
    if(process.env.NODE_ENV === 'test'){
      resetWarned()
    }
  }
}

export default warning
