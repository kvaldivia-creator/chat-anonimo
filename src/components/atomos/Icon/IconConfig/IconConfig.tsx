import { FaCog } from "react-icons/fa"
import { IconStyleI } from "../.."

const IconConfig = ({ color, className, size }: IconStyleI) => {
  return (
    <>
      <FaCog size={size} color={color} className={className} />
    </>
  )
}

export default IconConfig