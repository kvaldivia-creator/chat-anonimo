import { FaUsers } from "react-icons/fa"
import { IconStyleI } from "../.."

const IconAddGroup = ({ color, className, size }: IconStyleI) => {
  return (
    <FaUsers size={size} color={color} className={className} />
  )
}

export default IconAddGroup