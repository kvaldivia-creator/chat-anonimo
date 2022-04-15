import { IconI } from "..";
import IconConfig from "./IconConfig";
import IconSearch from "./IconSearch";
import IconArrowLeft from "./IconArrowLeft";
import IconSendMessage from "./IconSendMessage";
import IconUser from "./IconUser";
import IconAddGroup from "./IconAddGroup";
import IconDelete from "./IconDelete/IconDelete";

const Icon = ({ type, className, style = {} }: IconI) => {
  switch (type) {
    case 'search':
      return <IconSearch size={style.size} color={style.color} className={className} />
    case 'config':
      return <IconConfig size={style.size} color={style.color} className={className} />
    case 'arrow-left':
      return <IconArrowLeft size={style.size} color={style.color} className={className} />
    case 'send-message':
      return <IconSendMessage size={style.size} color={style.color} className={className} />
    case 'user':
      return <IconUser size={style.size} color={style.color} className={className} />
    case 'users-group':
      return <IconAddGroup size={style.size} color={style.color} className={className} />
    case 'delete':
      return <IconDelete size={style.size} color={style.color} className={className} />
    default:
      return <div></div>
  }
}

export default Icon