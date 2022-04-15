import { FaUserAlt } from "react-icons/fa"
import { IconStyleI } from "../.."

const IconUser = ({ color, className, size }: IconStyleI) => {
  return (
    <>
      <FaUserAlt size={size} color={color || '#141715'} className={className} />
    </>
  )
}

export default IconUser