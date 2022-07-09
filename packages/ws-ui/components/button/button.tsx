/*
 * @Author: 冯振威 1181399414@qq.com
 * @Date: 2022-07-09 09:26:24
 * @LastEditors: 冯振威 1181399414@qq.com
 * @LastEditTime: 2022-07-09 11:54:36
 * @FilePath: /ws-ui/packages/ws-ui/components/button/button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'

import type {SizeType} from '../config-provider/SizeContext'
import SizeContext from '../config-provider/SizeContext'
import {tuple} from '../_util/type'
import Group from './button-group'

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text')
export type ButtonType = typeof ButtonTypes[number]
const ButtonShapes = tuple('default', 'circle', 'round')
export type ButtonShape = typeof ButtonShapes[number]
const ButtonHTMLTypes = tuple('submit', 'button', 'reset')
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  loading?: boolean | {delay?: number};
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>

export type NativeButtonProps = {
  htmlTYpe?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

interface CompoundedComponent extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {
  Group: typeof Group
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  return <>button</>
}

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as CompoundedComponent

export default Button
