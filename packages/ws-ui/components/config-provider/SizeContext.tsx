/*
 * @Author: 冯振威 1181399414@qq.com
 * @Date: 2022-07-09 09:51:24
 * @LastEditors: 冯振威 1181399414@qq.com
 * @LastEditTime: 2022-07-09 09:57:49
 * @FilePath: /ws-ui/packages/ws-ui/components/config-provider/SizeContext.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'

export type SizeType = 'small' | 'middle' | 'large' | undefined

const SizeContext = React.createContext<SizeType>(undefined)

export interface SizeContextProps {
  size?: SizeType;
  children?: React.ReactNode
}

export const SizeContextProvider: React.FC<SizeContextProps> = ({children, size}) => (
  <SizeContext.Consumer>
    {originSize => (
      <SizeContext.Provider value={size || originSize}>{children}</SizeContext.Provider>
    )}
  </SizeContext.Consumer>
)

export default SizeContext
