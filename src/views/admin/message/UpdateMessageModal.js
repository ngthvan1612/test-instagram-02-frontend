import React from "react"
import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import { AdminMessageApi } from '../../../api/admin'

import { AdminGroupMessageApi } from '../../../api/admin'

import { AdminUserApi } from '../../../api/admin'

import { handleErrorResponse, handleSuccessResponse } from '../../../api/toast'

const INITIAL_STATE_FORM_DATA = {
  
  content: '',
  
  senderId: -1,
  receiverId: -1,
  groupId: -1,
}

function UpdateMessageModal(props) {
  const { refreshEvent, callRefreshEvent } = props
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState(INITIAL_STATE_FORM_DATA)
  
  const [refListGroupMessage, setRefListGroupMessage] = useState([]);
  
  const [refListUser, setRefListUser] = useState([]);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    
    AdminGroupMessageApi.listGroupMessages()
      .then(resp => {
        const data = resp.data.data;
        setRefListGroupMessage(data);
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
    const message = props.data;
    if (message) {
      setFormData(message);
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

  const handleUpdateMessage = () => {
    const message = {
      ...formData
    };
    AdminMessageApi.updateMessage(message).then(resp => {
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
        Update message
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            
            <Form.Group className="mb-3">
              <Form.Label>Nội dung tin nhắn</Form.Label>
              <Form.Control
                type="text"
                size='sm'
                value={formData.content}
                onChange={handleInputChange}
                name='content'
              />
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>người gửi</Form.Label>
              <Form.Select
                size='sm'
                value={formData.senderId}
                onChange={handleInputChange}
                name='senderId'
              >
                <option value="-1">------- Chọn đi bạn -------</option>
                {refListUser.map(user => {
                  return (
                    <option value={user.id}>{user.id} - {user.username}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>người nhận</Form.Label>
              <Form.Select
                size='sm'
                value={formData.receiverId}
                onChange={handleInputChange}
                name='receiverId'
              >
                <option value="-1">------- Chọn đi bạn -------</option>
                {refListUser.map(user => {
                  return (
                    <option value={user.id}>{user.id} - {user.username}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>nhóm</Form.Label>
              <Form.Select
                size='sm'
                value={formData.groupId}
                onChange={handleInputChange}
                name='groupId'
              >
                <option value="-1">------- Chọn đi bạn -------</option>
                {refListGroupMessage.map(groupMessage => {
                  return (
                    <option value={groupMessage.id}>{groupMessage.id} - {groupMessage.id}</option>
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
          <Button variant="primary" onClick={handleUpdateMessage}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateMessageModal