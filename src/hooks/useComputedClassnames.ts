import classnames from 'classnames'
import { useMemo } from "react";

interface configParams {
  baseClassName: string,
  className?: [{
    className?: string,
    classValue?: boolean
  }]
}

// 计算 classname
function useComputedClassNames<T>(config: configParams[]) {
  const { baseClassName } = config
  const classes = useMemo(() => classnames(baseClassName, {
      // TODO
      [`btn-${btnType}`]: btnType,
      [`btn-${size}`]: size,
      'disabled': (btnType === ButtonType.Link) && disabled
    }), [])

  return {
    classname: classes
  }
}

export default useComputedClassNames