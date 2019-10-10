export const actionTypes = {
  FACEBOOK_LOGIN: 'FACEBOOK_LOGIN',
  SET_LOGIN_ERROR: 'SET_LOGIN_ERROR',
  SET_USER_PROFILE: 'SET_USER_PROFILE',
  SET_FB_ACCESS_TOKEN: 'SET_FB_ACCESS_TOKEN',
}

export function setFbToken(token) {
  console.log('action run', actionTypes.SET_FB_ACCESS_TOKEN)
  return {
    type: actionTypes.SET_FB_ACCESS_TOKEN,
    token,
  }
}

export function setUserProfile(profile) {
  console.log('action run set user pf')
  return {
    type: actionTypes.SET_USER_PROFILE,
    profile,
  }
}

export function loginError(error) {
  return {
    type: actionTypes.SET_LOGIN_ERROR,
    error,
  }
}
