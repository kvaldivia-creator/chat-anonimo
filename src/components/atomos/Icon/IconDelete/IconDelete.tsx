import { FaTrash } from "react-icons/fa"
import { IconStyleI } from "../.."

const IconDelete = ({ color, className, size }: IconStyleI) => {
  return (
    <FaTrash size={size} color={color} className={className} />
  )
}

export default IconDelete