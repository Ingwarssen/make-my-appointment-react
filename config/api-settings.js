export const api = {
  url: () => 'http://localhost:3001/api/v1/mobile/',
  points: {
    auth: {
      settings: () => 'auth/settings',
      facebook: () => 'auth/facebook',
    },
    models: {
      get: () => 'models',
    },
    customers: {
      get: () => 'customers',
    },
  },
}

export const apiStringify = moduleName => {
  if (!api.points[moduleName]) return

  return Object.keys(api.points[moduleName]).reduce((acc, prop) => {
    acc[prop] = prop

    return acc
  }, {})
}
