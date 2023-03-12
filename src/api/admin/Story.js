import { contextInstance } from '../axios'

/**
 * Create new story
 * @param Story **Story 24h**
 * 
 * - `content`: Nội dung 
 * 
 * - `userId`: người dùng 
 */
const createStory = async(story) => {
  return contextInstance.post(`admin/story`, story);
}

/**
 * Get all storys
 * @return
 * 
 * - `content`: Nội dung 
 * 
 * - `userId`: người dùng 
 */
const listStorys = async() => {
  return contextInstance.get(`admin/story`);
}

/**
 * Get story by `id`
 * @param id id Story 24h
 * @return
 * 
 * - `content`: Nội dung 
 * 
 * - `userId`: người dùng 
 */
const getStoryById = async(id) => {
  return contextInstance.get(`admin/story/${id}`);
}

/**
 * Update story by `story.id`
 * @param Story **Story 24h**
 * 
 * - `content`: Nội dung 
 * 
 * - `userId`: người dùng 
 */
const updateStory = async(story) => {
  return contextInstance.put(`admin/story/${story.id}/update`, story);
}

/**
 * Delete story by `story.id`
 * @param Story **Story 24h**
 */
const deleteStory = async(story) => {
  return contextInstance.delete(`admin/story/${story.id}/delete`, story);
}

export {
  createStory,
  updateStory,
  getStoryById,
  listStorys,
  deleteStory,
  
}