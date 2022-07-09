/*
 * @Author: 冯振威 1181399414@qq.com
 * @Date: 2022-07-09 10:23:27
 * @LastEditors: 冯振威 1181399414@qq.com
 * @LastEditTime: 2022-07-09 11:27:22
 * @FilePath: /ws-ui/packages/ws-ui/components/config-provider/context.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import type {SizeType} from './SizeContext'
import type {RenderEmptyHandler} from './defaultRenderEmpty'

export interface CSPConfig {
  nonce?: string
}

export type DirectionType = 'ltr' | 'rtl' | undefined

// todo locale & form.requiredMark
export interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement
  rootPrefixCls?: string
  iconPrefixCls?: string
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string
  renderEmpty?: RenderEmptyHandler
  csp?: CSPConfig
  autoInsertSpaceInButton?: boolean
  input?: {
    autoComplete?: string
  }
  pagination?: {
    showSizeChanger?: boolean
  }
  locale?: any
  pageHeader?: {
    ghost: boolean
  }
  direction?: DirectionType
  space?: {
    size?: SizeType | number
  }
  virtual?: boolean
  dropdownMatchSelectWidth?: boolean
  form?: {
    requiredMark?: any
    colon?: boolean
  }
}

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if(customizePrefixCls) return customizePrefixCls
  return suffixCls ? `ws-${suffixCls}` : 'ws'
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
})

export const ConfigConsumer = ConfigContext.Consumer
