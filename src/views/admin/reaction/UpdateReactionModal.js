import React from "react"
import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import { AdminReactionApi } from '../../../api/admin'

import { AdminPostApi } from '../../../api/admin'

import { AdminUserApi } from '../../../api/admin'

import { handleErrorResponse, handleSuccessResponse } from '../../../api/toast'

const INITIAL_STATE_FORM_DATA = {
  
  reaction: 'LIKE',
  
  userId: -1,
  postId: -1,
}

function UpdateReactionModal(props) {
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
    const reaction = props.data;
    if (reaction) {
      setFormData(reaction);
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

  const handleUpdateReaction = () => {
    const reaction = {
      ...formData
    };
    AdminReactionApi.updateReaction(reaction).then(resp => {
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
        Update reaction
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update reaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            
            <Form.Group className="mb-3">
              <Form.Label>C???m x??c</Form.Label>
              <Form.Select
                size='sm'
                value={formData.reaction}
                onChange={handleInputChange}
                name='reaction'
              >
              
                <option value="LIKE">Th??ch</option>
                <option value="LOVE">Y??u th??ch</option>
                <option value="CARE">Th????ng th????ng</option>
                <option value="HAHA">Ahihi</option>
                <option value="WOW">Wow</option>
                <option value="SAD">Bu???n</option>
                <option value="ANGRY">D???i</option>
              </Form.Select>
            </Form.Group>
            
            
            
            <Form.Group className="mb-3">
              <Form.Label>ng?????i th??? c???m x??c</Form.Label>
              <Form.Select
                size='sm'
                value={formData.userId}
                onChange={handleInputChange}
                name='userId'
              >
                <option value="-1">------- Ch???n ??i b???n -------</option>
                {refListUser.map(user => {
                  return (
                    <option value={user.id}>{user.id} - {user.username}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>b??i ????ng</Form.Label>
              <Form.Select
                size='sm'
                value={formData.postId}
                onChange={handleInputChange}
                name='postId'
              >
                <option value="-1">------- Ch???n ??i b???n -------</option>
                {refListPost.map(post => {
                  return (
                    <option value={post.id}>{post.id} - {post.id}</option>
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
          <Button variant="primary" onClick={handleUpdateReaction}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateReactionModal