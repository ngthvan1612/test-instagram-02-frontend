import { contextInstance } from '../axios'

/**
 * Create new story
 * @param Story **Story 24h**
 * 
 * - `content`: Nội dung 
 */
const createStory = async(story) => {
  return contextInstance.post(`admin/story`, story);
}

/**
 * Get all storys
 * @return
 * 
 * - `content`: Nội dung 
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
 */
const getStoryById = async(id) => {
  return contextInstance.get(`admin/story/${id}`);
}

/**
 * Update story by `story.id`
 * @param Story **Story 24h**
 * 
 * - `content`: Nội dung 
 */
const updateStory = async(story) => {
  return contextInstance.put(`admin/story/${story.id}`);
}

/**
 * Delete story by `story.id`
 * @param Story **Story 24h**
 */
const deleteStory = async(story) => {
  return contextInstance.delete(`admin/story/${story.id}`);
}

export {
  createStory,
  updateStory,
  getStoryById,
  listStorys,
  deleteStory
}
