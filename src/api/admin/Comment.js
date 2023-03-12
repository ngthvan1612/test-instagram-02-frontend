import { contextInstance } from '../axios'

/**
 * Create new comment
 * @param Comment **Bình luận**
 * 
 * - `content`: Nội dung 
 * 
 * - `userId`: người bình luận 
 * - `postId`: bài đăng 
 * - `parentId`: bình luận cha 
 */
const createComment = async(comment) => {
  return contextInstance.post(`admin/comment`, comment);
}

/**
 * Get all comments
 * @return
 * 
 * - `content`: Nội dung 
 * 
 * - `userId`: người bình luận 
 * - `postId`: bài đăng 
 * - `parentId`: bình luận cha 
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
 * 
 * - `userId`: người bình luận 
 * - `postId`: bài đăng 
 * - `parentId`: bình luận cha 
 */
const getCommentById = async(id) => {
  return contextInstance.get(`admin/comment/${id}`);
}

/**
 * Update comment by `comment.id`
 * @param Comment **Bình luận**
 * 
 * - `content`: Nội dung 
 * 
 * - `userId`: người bình luận 
 * - `postId`: bài đăng 
 * - `parentId`: bình luận cha 
 */
const updateComment = async(comment) => {
  return contextInstance.put(`admin/comment/${comment.id}/update`, comment);
}

/**
 * Delete comment by `comment.id`
 * @param Comment **Bình luận**
 */
const deleteComment = async(comment) => {
  return contextInstance.delete(`admin/comment/${comment.id}/delete`, comment);
}

export {
  createComment,
  updateComment,
  getCommentById,
  listComments,
  deleteComment,
  
}