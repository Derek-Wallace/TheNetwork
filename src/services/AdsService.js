const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class AdsService {
  async getAds() {
    const res = await api.get('api/ads')
    AppState.ads = res.data
  }
}

export const adsService = new AdsService()
