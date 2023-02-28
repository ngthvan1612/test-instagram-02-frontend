import { useEffect, useState, useRef } from "react"
import { Button, ButtonGroup, Table, Modal, Form } from "react-bootstrap"
import { AdminUserApi } from '../../../api/admin'
import * as moment from 'moment'
import { toast } from "react-toastify"
import UpdateUserModal from "./UpdateUserModal"
import { handleErrorResponse, handleSuccessResponse } from "../../../api/toast"

const UpdateUserAvatarModal = (props) => {
  const [isShow, setShow] = useState(false);
  const { refreshEvent, callRefreshEvent } = props;

  const fileInputRef = useRef();
  const userId = props.userId;

  const handleUpdate = () => {
    const files = fileInputRef.current.files;
    if (files.length == 0) {
      alert('Chọn file đi bạn!');
      return;
    }
    const file = files[0];
    AdminUserApi.updateUserAvatar(userId, file)
      .then(resp => {
        handleSuccessResponse(resp);
        setShow(false);
        callRefreshEvent();
      })
      .catch(err => {
        handleErrorResponse(err);
      })
  }

  return (
    <>
    <Button
      size='sm'
      onClick={() => setShow(!isShow)}
    >
      Update avatar
    </Button>
    <Modal
      show={isShow}
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Update avatar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleUpdate}>
          <Form.Group className='mb-3'>
            <Form.Label>Chọn file</Form.Label>
            <Form.Control type='file' ref={fileInputRef}></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

const ListUser = (props) => {
  const { refreshEvent, callRefreshEvent } = props;
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    AdminUserApi.listUsers().then(resp => {
      const rawListUsers = resp.data.data;
      const fixedListUsers = rawListUsers.map(user => {
        return user;
      });
      setListUser([...fixedListUsers]);
    });
  }, [refreshEvent])

  const handleDeleteUser = (user) => {
    if (window.confirm('Are you sure?')) {
      AdminUserApi.deleteUser(user).then(resp => {
        handleSuccessResponse(resp);
      }).catch(err => {
        handleErrorResponse(err);
      });
    }
  }

  return (
    <>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            
            <th>Id</th>
            
            <th>CreatedAt</th>
            
            <th>LastUpdatedAt</th>
            
            <th>Username</th>
            
            <th>Password</th>
            
            <th>DisplayName</th>
            
            <th>Birthday</th>
            
            <th>Avatar</th>
            
            <th>Profile</th>
            
            <th>Gender</th>
            
            <th>Role</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map(user => {
            return (
              <tr>
                
                <td>{user.id}</td> 
                <td>{user.createdAt}</td> 
                <td>{user.lastUpdatedAt}</td> 
                <td>{user.username}</td> 
                <td>{user.password}</td> 
                <td>{user.displayName}</td> 
                <td>{user.birthday}</td> 
                <td><img src={user.avatar} width='120px'/></td>
                 
                <td>{user.profile}</td> 
                <td>{user.gender}</td> 
                <td>{user.role}</td> 
                <td>
                  <UpdateUserModal
                    data={user}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <UpdateUserAvatarModal
                    userId={user.id}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <ButtonGroup>
                    <Button variant="danger" size='sm' onClick={handleDeleteUser.bind(null, user)}>Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default ListUser