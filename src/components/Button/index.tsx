import {FC, memo} from 'react'
import classnames from 'classnames'

import {BaseButtonProps, ButtonType} from './types'

const Button: FC<BaseButtonProps> = (props) => {
  const { btnType, disabled, size, children, href } = props

  const classes = classnames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })

  return <>
    {
      btnType === ButtonType.Link?
        <a className={classes} href={href}>
          {children}
        </a>:
        <button className={classes} disabled={disabled}>
          {children}
        </button>
    }
  </>;
}

Button.defaultProps = {
  btnType: ButtonType.Default,
  disabled: false
}

export default memo(Button)

export { ButtonType, ButtonSize } from './types'

