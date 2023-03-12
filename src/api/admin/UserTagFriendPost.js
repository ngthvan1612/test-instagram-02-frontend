import { contextInstance } from '../axios'

/**
 * Create new userTagFriendPost
 * @param UserTagFriendPost **Tag bạn bè của bài đăng**
 * 
 * 
 * - `postId`: bài đăng 
 * - `friendId`: bạn bè được tag cùng 
 */
const createUserTagFriendPost = async(userTagFriendPost) => {
  return contextInstance.post(`admin/user-tag-friend-post`, userTagFriendPost);
}

/**
 * Get all userTagFriendPosts
 * @return
 * 
 * 
 * - `postId`: bài đăng 
 * - `friendId`: bạn bè được tag cùng 
 */
const listUserTagFriendPosts = async() => {
  return contextInstance.get(`admin/user-tag-friend-post`);
}

/**
 * Get userTagFriendPost by `id`
 * @param id id Tag bạn bè của bài đăng
 * @return
 * 
 * 
 * - `postId`: bài đăng 
 * - `friendId`: bạn bè được tag cùng 
 */
const getUserTagFriendPostById = async(id) => {
  return contextInstance.get(`admin/user-tag-friend-post/${id}`);
}

/**
 * Update userTagFriendPost by `userTagFriendPost.id`
 * @param UserTagFriendPost **Tag bạn bè của bài đăng**
 * 
 * 
 * - `postId`: bài đăng 
 * - `friendId`: bạn bè được tag cùng 
 */
const updateUserTagFriendPost = async(userTagFriendPost) => {
  return contextInstance.put(`admin/user-tag-friend-post/${userTagFriendPost.id}/update`, userTagFriendPost);
}

/**
 * Delete userTagFriendPost by `userTagFriendPost.id`
 * @param UserTagFriendPost **Tag bạn bè của bài đăng**
 */
const deleteUserTagFriendPost = async(userTagFriendPost) => {
  return contextInstance.delete(`admin/user-tag-friend-post/${userTagFriendPost.id}/delete`, userTagFriendPost);
}

export {
  createUserTagFriendPost,
  updateUserTagFriendPost,
  getUserTagFriendPostById,
  listUserTagFriendPosts,
  deleteUserTagFriendPost,
  
}