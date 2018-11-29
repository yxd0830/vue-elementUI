/**
 * New node file
 */
import ajax from './ajax'
let test = (params) => {
  return ajax.get('/user')
}

export default {
  test
}
