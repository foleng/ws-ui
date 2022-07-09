/*
 * @Author: 冯振威 1181399414@qq.com
 * @Date: 2022-07-09 09:19:49
 * @LastEditors: 冯振威 1181399414@qq.com
 * @LastEditTime: 2022-07-09 11:55:05
 * @FilePath: /ws-ui/packages/ws-ui/components/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* @remove-on-es-build-begin */
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn && // eslint-disable-line no-console
  typeof window !== 'undefined'
) {
  // eslint-disable-next-line no-console
  console.warn(
    'You are using a whole package of ws, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */
export {default as Button} from './button'
export type {ButtonProps} from './button'
