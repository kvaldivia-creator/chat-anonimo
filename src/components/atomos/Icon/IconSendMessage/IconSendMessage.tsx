import { FaPaperPlane } from "react-icons/fa"
import { IconStyleI } from "../.."

const IconSendMessage = ({ color, className, size }: IconStyleI) => {
  return (
    <FaPaperPlane size={size} color={color || '#141715'} className={className} />
  )
}

export default IconSendMessage