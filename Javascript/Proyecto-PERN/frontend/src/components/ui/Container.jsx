/* eslint-disable react/prop-types */

export function Container({children, className}) {
  return (
    <div className={"max-w-7xl px-3 mx-auto" + className }>{children}</div>
  )
}

export default Container