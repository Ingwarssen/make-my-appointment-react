export const actionTypes = {
  FACEBOOK_LOGIN: 'FACEBOOK_LOGIN',
  SET_LOGIN_ERROR: 'SET_LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
  SET_USER_PROFILE: 'SET_USER_PROFILE',
  SET_FB_ACCESS_TOKEN: 'SET_FB_ACCESS_TOKEN',
  SET_JWT_TOKEN: 'SET_JWT_TOKEN',
}

export function fbLogin(response) {
  const { accessToken } = response
  return {
    type: actionTypes.FACEBOOK_LOGIN,
    accessToken,
  }
}

export function logout() {
  return {
    type: actionTypes.LOGOUT,
  }
}

export function setUserProfile(profile) {
  return {
    type: actionTypes.SET_USER_PROFILE,
    profile,
  }
}

export function setJwtToken(jwtToken) {
  return {
    type: actionTypes.SET_JWT_TOKEN,
    jwtToken,
  }
}

export function loginError(error) {
  return {
    type: actionTypes.SET_LOGIN_ERROR,
    error,
  }
}
