import axiosInstance from './axios-client'
import qs from 'qs'
//API List Post
const getListPost = async (query?: any) => {
  const queryObj = query ? query : {}
  const queryString = qs.stringify(queryObj)
  try {
    const response = await axiosInstance.get(`/posts?${queryString}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export type fetchPostDto = {
  page_index: number,
  item_count: number,
}
const getPostByUser = async (userId: string, query?: any,) => {
  const queryObj = query ? query : {}
  const queryString = qs.stringify(queryObj)
  try {
    const response = await axiosInstance.get(`/posts/user/${userId}?${queryString}`)
    return response.data
  } catch (error) {
    throw error
  }
}
// API Post By Id
const getPostById = async (id: string, params?: fetchPostDto) => {
  try {
    const response = await axiosInstance.get(`/post/details/${id}`, { params: params })
    return response.data
  } catch (error) {
    throw error
  }
}
const getFeedPosts = async (query?: any) => {
  const queryObj = query ? query : {}
  const queryString = qs.stringify(queryObj)
  try {
    const response = await axiosInstance.get(`/posts/feed?${queryString}`)
    return response.data
  } catch (error) {
    throw error
  }
}
const createPost = async (data: any) => {
  try {
    const response = await axiosInstance.post('/posts', data)
    return response.data
  } catch (error) {
    throw error
  }
}

const setUpvotePost = async (postId: any) => {
  try {
    const response = await axiosInstance.get(`/upvote/post/${postId}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const axiosPosts = {
  getFeedPosts,
  getListPost,
  getPostById,
  createPost,
  getPostByUser,
  setUpvotePost,
}
