import { FaSearch } from "react-icons/fa"
import { IconStyleI } from "../.."

const IconSearch = ({ color, className, size }: IconStyleI) => {
  return (
    <>
      <FaSearch size={size} color={color || '#141715'} className={className} />
    </>
  )
}

export default IconSearch