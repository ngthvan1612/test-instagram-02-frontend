import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import { AdminPostApi } from '../../../api/admin'

import { AdminUserApi } from '../../../api/admin'

import { handleErrorResponse, handleSuccessResponse } from '../../../api/toast'

const INITIAL_STATE_FORM_DATA = {
  
  content: '',
  privacy: 'PUBLIC',
  
  authorId: -1,
}

function CreatePostModal(props) {
  const { refreshEvent, callRefreshEvent } = props;
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState(INITIAL_STATE_FORM_DATA)
  
  const [refListUser, setRefListUser] = useState([]);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    
    AdminUserApi.listUsers()
      .then(resp => {
        const data = resp.data.data;
        setRefListUser(data);
      })
      .catch(err => {
        handleErrorResponse(err);
      })
    
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleCreatePost = () => {
    const post = {
      ...formData
    };
    AdminPostApi.createPost(post).then(resp => {
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
      <Button variant="primary" onClick={handleShow}>
        Create post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            
            <Form.Group className="mb-3">
              <Form.Label>Nội dung bài đăng</Form.Label>
              <Form.Control
                type="text"
                size='sm'
                value={formData.content}
                onChange={handleInputChange}
                name='content'
              />
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>Quyền riêng tư</Form.Label>
              <Form.Select
                size='sm'
                value={formData.privacy}
                onChange={handleInputChange}
                name='privacy'
              >
              
                <option value="PUBLIC">Công khai</option>
                <option value="PRIVATE">Riêng tư</option>
                <option value="FOLLOWER">Người theo dõi tôi</option>
              </Form.Select>
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>người đăng</Form.Label>
              <Form.Select
                size='sm'
                value={formData.authorId}
                onChange={handleInputChange}
                name='authorId'
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
          <Button variant="primary" onClick={handleCreatePost}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreatePostModal