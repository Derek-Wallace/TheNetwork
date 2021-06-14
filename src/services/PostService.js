import { api } from './AxiosService'
import Notification from '../utils/Notification'
import { logger } from '../utils/Logger'

const { default: axios } = require('axios')
const { AppState } = require('../AppState')

class PostService {
  async getPosts(url = 'https://bcw-sandbox.herokuapp.com/api/posts') {
    const res = await axios.get(url)
    AppState.posts = res.data.posts
    AppState.previousPage = res.data.newer
    AppState.nextPage = res.data.older
  }

  async createPost(postData) {
    await api.post('/api/posts', postData)
    this.getPosts()
    Notification.toast('Post created', 'success')
  }

  async like(postId) {
    await api.post(`https://bcw-sandbox.herokuapp.com/api/posts/${postId}/like`)
    this.getPosts()
  }

  async deletePost(postId) {
    await api.delete(`https://bcw-sandbox.herokuapp.com/api/posts/${postId}`)
    this.getPosts()
    Notification.toast('Post deleted', 'success')
  }

  editPost(postId, newData) {
    logger.log('post to edit at service', postId, newData)
  }
}

export const postService = new PostService()
