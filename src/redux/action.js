
const UPDATE_USER = 'UPDATE_USER'

export const updateUserMsg = (userData) => {
  return {
    type: UPDATE_USER,
    userData
  }
}