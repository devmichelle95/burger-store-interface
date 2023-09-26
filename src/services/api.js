import axios from 'axios'

const apiBurgerStore = axios.create({
  baseURL: 'https://api-burger-store-production.up.railway.app'
})

apiBurgerStore.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiBurgerStore
