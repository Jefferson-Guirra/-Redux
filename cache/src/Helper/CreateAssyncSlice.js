import { createSlice } from '@reduxjs/toolkit'

/**
 * Cria um slice e uma funcção asímcrona
 * @param {object} config
 * @param {string} config.name
 * @param {object} config.initialState
 * @param {object} config.reducers
 * @param {Function}config.fetchConfig
 *
 */
const createAssyncSlice = config => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      lastUpdate: 0,
      cache:0,
      ...config.initialState
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true
      },
      fetchSucess(state, action) {
        state.loading = false
        state.data = action.payload
        state.error = null
      },
      fetchError(state, action) {
        state.loading = false
        state.data = null
        state.error = action.payload
      },
      Logout(state) {
        state.loading = false
        state.data = null
        state.error = null
      },
      updateTime(state,action){
        state.lastUpdate = action.payload
      },

      ...config.reducers
    }
  })
  const { fetchError, fetchStarted, fetchSucess, Logout, updateTime } = slice.actions
  const asyncAction = user => async (dispatch,getState) => {
    const {lastUpdate,cache} = getState()[slice.name]
    if(lastUpdate > Date.now() - cache) return 
    try {
      dispatch(fetchStarted())
      const { url, options } = config.fetchConfig(user)
      const response = await fetch(url, options)
      const data = await response.json()
      dispatch(updateTime(Date.now()))
      return dispatch(fetchSucess(data))
    } catch (error) {
      return dispatch(fetchError(error.message))
    }
  }

  const OutLogin = () => async dispatch => {
    dispatch(Logout())
  }
  return { ...slice, asyncAction, OutLogin }
}

export default createAssyncSlice
