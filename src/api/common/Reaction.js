import { contextInstance } from '../axios'

/**
 * Create new reaction
 * @param Reaction **Thả cảm xúc**
 * 
 * - `reaction`: Cảm xúc 
 */
const createReaction = async(reaction) => {
  return contextInstance.post(`admin/reaction`, reaction);
}

/**
 * Get all reactions
 * @return
 * 
 * - `reaction`: Cảm xúc 
 */
const listReactions = async() => {
  return contextInstance.get(`admin/reaction`);
}

/**
 * Get reaction by `id`
 * @param id id Thả cảm xúc
 * @return
 * 
 * - `reaction`: Cảm xúc 
 */
const getReactionById = async(id) => {
  return contextInstance.get(`admin/reaction/${id}`);
}

/**
 * Update reaction by `reaction.id`
 * @param Reaction **Thả cảm xúc**
 * 
 * - `reaction`: Cảm xúc 
 */
const updateReaction = async(reaction) => {
  return contextInstance.put(`admin/reaction/${reaction.id}`);
}

/**
 * Delete reaction by `reaction.id`
 * @param Reaction **Thả cảm xúc**
 */
const deleteReaction = async(reaction) => {
  return contextInstance.delete(`admin/reaction/${reaction.id}`);
}

export {
  createReaction,
  updateReaction,
  getReactionById,
  listReactions,
  deleteReaction
}
