import { contextInstance } from '../axios'

/**
 * Create new message
 * @param Message **Tin nhắn**
 * 
 * - `content`: Nội dung tin nhắn 
 */
const createMessage = async(message) => {
  return contextInstance.post(`admin/message`, message);
}

/**
 * Get all messages
 * @return
 * 
 * - `content`: Nội dung tin nhắn 
 */
const listMessages = async() => {
  return contextInstance.get(`admin/message`);
}

/**
 * Get message by `id`
 * @param id id Tin nhắn
 * @return
 * 
 * - `content`: Nội dung tin nhắn 
 */
const getMessageById = async(id) => {
  return contextInstance.get(`admin/message/${id}`);
}

/**
 * Update message by `message.id`
 * @param Message **Tin nhắn**
 * 
 * - `content`: Nội dung tin nhắn 
 */
const updateMessage = async(message) => {
  return contextInstance.put(`admin/message/${message.id}`);
}

/**
 * Delete message by `message.id`
 * @param Message **Tin nhắn**
 */
const deleteMessage = async(message) => {
  return contextInstance.delete(`admin/message/${message.id}`);
}

export {
  createMessage,
  updateMessage,
  getMessageById,
  listMessages,
  deleteMessage
}
