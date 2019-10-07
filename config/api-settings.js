export const api = {
  url: () => 'http://dev.strapi-api.human-3d.com:1337/',
  points: {
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
