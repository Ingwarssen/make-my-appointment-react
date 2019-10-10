import axios from 'axios'
import { apiStringify, api } from '../config/api-settings'

class ApiService {
  constructor(serviceName) {
    this.serviceName = serviceName
    this.apiActions = apiStringify(serviceName)
  }
  set apiActions(val) {
    return (this.apiPoints = val)
  }
  get apiActions() {
    return this.apiPoints
  }

  async call({
    uuid = '',
    data = null,
    headers = {},
    params = null,
    method = 'get',
    action = 'get',
    responseType = '',
  }) {
    try {
      const result = await axios({
        data,
        method,
        params,
        headers,
        responseType,
        url: api.url() + api.points[this.serviceName][action](uuid),
      })

      if (result.status === 200) {
        return result.data
      } else {
        throw result
      }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.reasons) {
        throw error.response.data.reasons
      } else {
        throw error
      }
    }
  }
}

export default ApiService
