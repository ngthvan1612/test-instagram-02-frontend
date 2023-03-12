import { contextInstance } from '../axios'

/**
 * Create new follower
 * @param Follower **Theo dõi**
 * 
 * 
 * - `userId`: người dùng 
 * - `followId`: người được follow 
 */
const createFollower = async(follower) => {
  return contextInstance.post(`admin/follower`, follower);
}

/**
 * Get all followers
 * @return
 * 
 * 
 * - `userId`: người dùng 
 * - `followId`: người được follow 
 */
const listFollowers = async() => {
  return contextInstance.get(`admin/follower`);
}

/**
 * Get follower by `id`
 * @param id id Theo dõi
 * @return
 * 
 * 
 * - `userId`: người dùng 
 * - `followId`: người được follow 
 */
const getFollowerById = async(id) => {
  return contextInstance.get(`admin/follower/${id}`);
}

/**
 * Update follower by `follower.id`
 * @param Follower **Theo dõi**
 * 
 * 
 * - `userId`: người dùng 
 * - `followId`: người được follow 
 */
const updateFollower = async(follower) => {
  return contextInstance.put(`admin/follower/${follower.id}/update`, follower);
}

/**
 * Delete follower by `follower.id`
 * @param Follower **Theo dõi**
 */
const deleteFollower = async(follower) => {
  return contextInstance.delete(`admin/follower/${follower.id}/delete`, follower);
}

export {
  createFollower,
  updateFollower,
  getFollowerById,
  listFollowers,
  deleteFollower,
  
}