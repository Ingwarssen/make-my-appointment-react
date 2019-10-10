import Cookies from 'js-cookie'

export default {
  getItem(cookieStore, name) {
    const cookieObj = cookieStore
      ? cookieStore.split(';').find(c => c.trim().startsWith(`${name}=`))
      : false
    if (!cookieObj) {
      return
    }
    return cookieObj.split('=')[1]
  },
  setItem(name, value) {
    Cookies.set(name, value)
  },
  removeItem(name) {
    Cookies.remove(name)
  },
}
