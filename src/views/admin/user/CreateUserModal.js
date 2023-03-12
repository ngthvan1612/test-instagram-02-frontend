import React from "react"
import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import { AdminUserApi } from '../../../api/admin'

import { handleErrorResponse, handleSuccessResponse } from '../../../api/toast'

const INITIAL_STATE_FORM_DATA = {
  
  username: '',
  password: '',
  displayName: '',
  birthday: '2002-12-16',
  avatar: null,
  profile: '',
  gender: 'MALE',
  role: 'ADMIN',
  
}

function CreateUserModal(props) {
  const { refreshEvent, callRefreshEvent } = props;
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState(INITIAL_STATE_FORM_DATA)
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleCreateUser = () => {
    const user = {
      ...formData
    };
    AdminUserApi.createUser(user).then(resp => {
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
        Create user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            
            <Form.Group className="mb-3">
              <Form.Label>tên người dùng</Form.Label>
              <Form.Control
                type="text"
                size='sm'
                value={formData.username}
                onChange={handleInputChange}
                name='username'
              />
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>mật khẩu</Form.Label>
              <Form.Control
                type="text"
                size='sm'
                value={formData.password}
                onChange={handleInputChange}
                name='password'
              />
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>tên hiển thị</Form.Label>
              <Form.Control
                type="text"
                size='sm'
                value={formData.displayName}
                onChange={handleInputChange}
                name='displayName'
              />
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>ngày sinh</Form.Label>
              <Form.Control
                type="text"
                size='sm'
                value={formData.birthday}
                onChange={handleInputChange}
                name='birthday'
              />
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>ảnh đại diện</Form.Label>
              <Form.Control
                type="text"
                size='sm'
                value={formData.avatar}
                onChange={handleInputChange}
                name='avatar'
              />
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>Thông tin cá nhân</Form.Label>
              <Form.Control
                type="text"
                size='sm'
                value={formData.profile}
                onChange={handleInputChange}
                name='profile'
              />
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>Giới tính</Form.Label>
              <Form.Select
                size='sm'
                value={formData.gender}
                onChange={handleInputChange}
                name='gender'
              >
              
                <option value="MALE">Nam</option>
                <option value="FEMALE">Nữ</option>
                <option value="NONE">Không xác định</option>
              </Form.Select>
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>Vai trò</Form.Label>
              <Form.Select
                size='sm'
                value={formData.role}
                onChange={handleInputChange}
                name='role'
              >
              
                <option value="ADMIN">Quản trị viên</option>
                <option value="REGULAR">Người dùng</option>
              </Form.Select>
            </Form.Group>
            
            
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateUser}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateUserModal