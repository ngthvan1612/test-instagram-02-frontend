import React from "react"
import { useEffect, useState, useRef } from "react"
import { Button, ButtonGroup, Table, Modal, Form } from "react-bootstrap"
import { AdminUserGroupMessageApi } from '../../../api/admin'
import * as moment from 'moment'
import { toast } from "react-toastify"
import UpdateUserGroupMessageModal from "./UpdateUserGroupMessageModal"
import { handleErrorResponse, handleSuccessResponse } from "../../../api/toast"

const ListUserGroupMessage = (props) => {
  const { refreshEvent, callRefreshEvent } = props;
  const [listUserGroupMessage, setListUserGroupMessage] = useState([]);

  useEffect(() => {
    AdminUserGroupMessageApi.listUserGroupMessages().then(resp => {
      const rawListUserGroupMessages = resp.data.data;
      const fixedListUserGroupMessages = rawListUserGroupMessages.map(userGroupMessage => {
        return userGroupMessage;
      });
      setListUserGroupMessage([...fixedListUserGroupMessages]);
    });
  }, [refreshEvent])

  const handleDeleteUserGroupMessage = (userGroupMessage) => {
    if (window.confirm('Are you sure?')) {
      AdminUserGroupMessageApi.deleteUserGroupMessage(userGroupMessage).then(resp => {
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
            
            <th>Group</th>
            
            <th>Member</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUserGroupMessage.map(userGroupMessage => {
            return (
              <tr>
                
                <td>{userGroupMessage.id}</td> 
                <td>{userGroupMessage.createdAt}</td> 
                <td>{userGroupMessage.lastUpdatedAt}</td> 
                <td>{userGroupMessage.groupId}</td>
                 
                <td>{userGroupMessage.memberId}</td>
                 
                <td>
                  <UpdateUserGroupMessageModal
                    data={userGroupMessage}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <ButtonGroup>
                    <Button variant="danger" size='sm' onClick={handleDeleteUserGroupMessage.bind(null, userGroupMessage)}>Delete</Button>
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

export default ListUserGroupMessage