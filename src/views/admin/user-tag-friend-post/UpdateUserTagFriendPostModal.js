import React from "react"
import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import { AdminUserTagFriendPostApi } from '../../../api/admin'

import { AdminPostApi } from '../../../api/admin'

import { AdminUserApi } from '../../../api/admin'

import { handleErrorResponse, handleSuccessResponse } from '../../../api/toast'

const INITIAL_STATE_FORM_DATA = {
  
  
  postId: -1,
  friendId: -1,
}

function UpdateUserTagFriendPostModal(props) {
  const { refreshEvent, callRefreshEvent } = props
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState(INITIAL_STATE_FORM_DATA)
  
  const [refListPost, setRefListPost] = useState([]);
  
  const [refListUser, setRefListUser] = useState([]);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    
    AdminPostApi.listPosts()
      .then(resp => {
        const data = resp.data.data;
        setRefListPost(data);
      })
      .catch(err => {
        handleErrorResponse(err);
      })
    
    AdminUserApi.listUsers()
      .then(resp => {
        const data = resp.data.data;
        setRefListUser(data);
      })
      .catch(err => {
        handleErrorResponse(err);
      })
    
  }, [])

  useEffect(() => {
    const userTagFriendPost = props.data;
    if (userTagFriendPost) {
      setFormData(userTagFriendPost);
    }
  }, [props.data])

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: checked
    })
  }

  const handleUpdateUserTagFriendPost = () => {
    const userTagFriendPost = {
      ...formData
    };
    AdminUserTagFriendPostApi.updateUserTagFriendPost(userTagFriendPost).then(resp => {
      handleSuccessResponse(resp);
      setFormData(INITIAL_STATE_FORM_DATA);
      setShow(false);
      callRefreshEvent();
    }).catch(err => {
      handleErrorResponse(err);
    })
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} size='sm'>
        Update userTagFriendPost
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update userTagFriendPost</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            
            <Form.Group className="mb-3">
              <Form.Label>bài đăng</Form.Label>
              <Form.Select
                size='sm'
                value={formData.postId}
                onChange={handleInputChange}
                name='postId'
              >
                <option value="-1">------- Chọn đi bạn -------</option>
                {refListPost.map(post => {
                  return (
                    <option value={post.id}>{post.id} - {post.id}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>bạn bè được tag cùng</Form.Label>
              <Form.Select
                size='sm'
                value={formData.friendId}
                onChange={handleInputChange}
                name='friendId'
              >
                <option value="-1">------- Chọn đi bạn -------</option>
                {refListUser.map(user => {
                  return (
                    <option value={user.id}>{user.id} - {user.username}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateUserTagFriendPost}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateUserTagFriendPostModal