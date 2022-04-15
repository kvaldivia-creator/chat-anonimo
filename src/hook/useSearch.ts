import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { userI } from "../services/user";

export const useSearch = (users: []) => {
  const [searchValue, setSearchValue] = useState('')
  const handleChangeSearchUser: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  let serchedUser = [];

	if (!(users.length >= 1)) {
		serchedUser = users
	} else {
		serchedUser = users.filter((user: userI) => {
			const todoUser = user.userName.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoUser.includes(searchText);
		})
	}

  return {
    serchedUser,
    handleChangeSearchUser,
    searchValue
  }
}
