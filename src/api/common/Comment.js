import { contextInstance } from '../axios'

/**
 * Create new comment
 * @param Comment **Bình luận**
 * 
 * - `content`: Nội dung 
 */
const createComment = async(comment) => {
  return contextInstance.post(`admin/comment`, comment);
}

/**
 * Get all comments
 * @return
 * 
 * - `content`: Nội dung 
 */
const listComments = async() => {
  return contextInstance.get(`admin/comment`);
}

/**
 * Get comment by `id`
 * @param id id Bình luận
 * @return
 * 
 * - `content`: Nội dung 
 */
const getCommentById = async(id) => {
  return contextInstance.get(`admin/comment/${id}`);
}

/**
 * Update comment by `comment.id`
 * @param Comment **Bình luận**
 * 
 * - `content`: Nội dung 
 */
const updateComment = async(comment) => {
  return contextInstance.put(`admin/comment/${comment.id}`);
}

/**
 * Delete comment by `comment.id`
 * @param Comment **Bình luận**
 */
const deleteComment = async(comment) => {
  return contextInstance.delete(`admin/comment/${comment.id}`);
}

export {
  createComment,
  updateComment,
  getCommentById,
  listComments,
  deleteComment
}
