/*
 * @Author: 冯振威 1181399414@qq.com
 * @Date: 2022-07-09 10:37:29
 * @LastEditors: 冯振威 1181399414@qq.com
 * @LastEditTime: 2022-07-09 11:33:17
 * @FilePath: /ws-ui/packages/ws-ui/components/config-provider/defaultRenderEmpty.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {ConfigConsumer} from '.'
import type {ConfigConsumerProps} from '.'

// todo 后续补充各种情况下的空展示
const defaultRenderEmpty = (componentName?: string): React.ReactNode => (
  <ConfigConsumer>
    {({getPrefixCls}: ConfigConsumerProps) => {
      const prefix = getPrefixCls('empty')
      switch(componentName){
        case 'Table':
        case 'List':
          return <span>暂无数据</span>
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          return <span>暂无数据</span>
        default:
          return <span>暂无数据</span>
      }
    }}
  </ConfigConsumer>
)

export type RenderEmptyHandler = typeof defaultRenderEmpty
