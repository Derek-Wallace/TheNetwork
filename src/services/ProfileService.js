
const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class ProfileService {
  async getProfile(id) {
    AppState.activeProfile = null
    const res = await api.get(`https://bcw-sandbox.herokuapp.com/api/profiles/${id}`)
    AppState.activeProfile = res.data
  }

  async findProfile(url) {
    AppState.search = true
    const res = await api.get(url)
    AppState.searchResults = res.data
  }
}

export const profileService = new ProfileService()
