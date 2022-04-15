import { FaArrowLeft } from "react-icons/fa"
import { IconStyleI } from "../.."

const IconArrowLeft = ({ color, className, size }: IconStyleI) => {
  return (
    <>
      <FaArrowLeft size={size} color={color} className={className} />
    </>
  )
}

export default IconArrowLeft