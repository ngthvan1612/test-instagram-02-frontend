import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import { AdminUserGroupMessageApi } from '../../../api/admin'

import { AdminGroupMessageApi } from '../../../api/admin'

import { AdminUserApi } from '../../../api/admin'

import { handleErrorResponse, handleSuccessResponse } from '../../../api/toast'

const INITIAL_STATE_FORM_DATA = {
  
  
  groupId: -1,
  memberId: -1,
}

function UpdateUserGroupMessageModal(props) {
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
    const userGroupMessage = props.data;
    if (userGroupMessage) {
      setFormData(userGroupMessage);
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

  const handleUpdateUserGroupMessage = () => {
    const userGroupMessage = {
      ...formData
    };
    AdminUserGroupMessageApi.updateUserGroupMessage(userGroupMessage).then(resp => {
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
        Update userGroupMessage
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update userGroupMessage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            
            <Form.Group className="mb-3">
              <Form.Label>Nhóm</Form.Label>
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
            
            <Form.Group className="mb-3">
              <Form.Label>thành viên</Form.Label>
              <Form.Select
                size='sm'
                value={formData.memberId}
                onChange={handleInputChange}
                name='memberId'
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
          <Button variant="primary" onClick={handleUpdateUserGroupMessage}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateUserGroupMessageModal