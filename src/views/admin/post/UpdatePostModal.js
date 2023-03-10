import React from "react"
import { useState, useEffect } from 'react'
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

function UpdatePostModal(props) {
  const { refreshEvent, callRefreshEvent } = props
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

  useEffect(() => {
    const post = props.data;
    if (post) {
      setFormData(post);
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

  const handleUpdatePost = () => {
    const post = {
      ...formData
    };
    AdminPostApi.updatePost(post).then(resp => {
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
        Update post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            
            <Form.Group className="mb-3">
              <Form.Label>N???i dung b??i ????ng</Form.Label>
              <Form.Control
                type="text"
                size='sm'
                value={formData.content}
                onChange={handleInputChange}
                name='content'
              />
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>Quy???n ri??ng t??</Form.Label>
              <Form.Select
                size='sm'
                value={formData.privacy}
                onChange={handleInputChange}
                name='privacy'
              >
              
                <option value="PUBLIC">C??ng khai</option>
                <option value="PRIVATE">Ri??ng t??</option>
              </Form.Select>
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>ng?????i ????ng</Form.Label>
              <Form.Select
                size='sm'
                value={formData.authorId}
                onChange={handleInputChange}
                name='authorId'
              >
                <option value="-1">------- Ch???n ??i b???n -------</option>
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
          <Button variant="primary" onClick={handleUpdatePost}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdatePostModal