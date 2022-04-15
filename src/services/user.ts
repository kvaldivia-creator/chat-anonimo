export interface userI {
  id: string
  userName: string
}

const addUser = (user: userI) => {
  window.sessionStorage.setItem('user', JSON.stringify(user))
  saveUsers(user)
}

const editUser = (userName: string) => {
  let user: userI = getUser()
  user.userName = userName
  let users = getUsers().filter((searchUser: any) => searchUser.id !== user.id)
  updateUsers(users)
  addUser(user)
}

const getUser = () => {
  const getSessionStorageUser = sessionStorage.getItem('user')
  
  if (typeof getSessionStorageUser === 'string') {
    const user = JSON.parse(getSessionStorageUser)
    return user
  }
  
}

const getUsers = () => {
  const getLocalStorageUsers = localStorage.getItem('users')
  if (typeof getLocalStorageUsers === 'string') {
    const users = JSON.parse(getLocalStorageUsers)
    return users
  }
  return
}

const saveUsers = (user: userI) => {
  let users = getUsers() ? getUsers() : []
  users.push(user)
  updateUsers(users)
  return true
}

const findUsers = (uuid: string | number) => {
  const users = getUsers() ? getUsers() : []
  
  const resultado = users.find((user: userI) => user.id === uuid)

  return resultado
}
	
const updateUsers = (users: object[]) => {
  window.localStorage.setItem('users', JSON.stringify(users))
  return true
}


export {
  addUser,
  getUser,
  getUsers,
  saveUsers,
  findUsers,
  updateUsers,
  editUser
}
