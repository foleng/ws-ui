/*
 * @Author: 冯振威 1181399414@qq.com
 * @Date: 2022-07-09 10:10:09
 * @LastEditors: 冯振威 1181399414@qq.com
 * @LastEditTime: 2022-07-09 11:54:42
 * @FilePath: /ws-ui/packages/ws-ui/components/button/button-group.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import classNames from 'classnames'
import React from 'react'
import {ConfigContext} from '../config-provider'
import type {SizeType} from '../config-provider/SizeContext'
import warning from '../_util/warning'

export interface ButtonGroupProps {
  size?: SizeType;
  stype?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  children?: React.ReactNode;
}

export const GroupSizeContext = React.createContext<SizeType | undefined>(undefined)

const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const {getPrefixCls, direction} = React.useContext(ConfigContext)
  const {prefixCls: customizePrefixCls, size, className, ...others} = props
  const prefixCls = getPrefixCls('btn-group', customizePrefixCls)

  let sizeCls = ''
  switch (size) {
    case 'large':
      sizeCls = 'lg'
      break
    case 'small':
      sizeCls = 'sm'
      break
    case 'middle':
    case undefined:
      break
    default:
      warning(!size, 'Button.Group', 'Invalid prop `size`.')
  }

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    className
  )

  return <>
    <GroupSizeContext.Provider value={size}>
      <div {...others} className={classes}/>
    </GroupSizeContext.Provider>
  </>
}

export default ButtonGroup
