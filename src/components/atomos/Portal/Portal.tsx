import { createPortal } from "react-dom"

interface PortalI {
  children?: React.ReactNode
}

const Portal = ({ children }: PortalI) => {
  if (typeof window === 'object') {
    const el = document.querySelector('#portal') as HTMLElement
    return createPortal(children, el)
  }
  return null
}

export default Portal