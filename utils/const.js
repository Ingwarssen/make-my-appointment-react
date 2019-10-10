export const LANGUAGE = [
  {
    code: 'ua',
    id: 1,
    text: 'ukrainian',
  },
  {
    code: 'en',
    id: 2,
    text: 'english',
  },
]

export const PASSWORD = {
  min: 4,
  max: 30,
}

export const LOGGER = {
  consoleLog: true,
  snackBar: true,
}

export const TIMINGS = {
  SNACKBAR_SYMBOL_READ_TIME: 200,
  SEARCH_DEBOUNCE: 400,
}

export const REST_METHOD = {
  post: 'post',
  put: 'put',
  get: 'get',
  remove: 'delete',
}

export const FILE = {
  maxSize: 1024 * 1024, // 1Mb
}
