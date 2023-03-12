import React from "react"
import { useEffect, useState, useRef } from "react"
import { Button, ButtonGroup, Table, Modal, Form } from "react-bootstrap"
import { AdminGroupMessageApi } from '../../../api/admin'
import * as moment from 'moment'
import { toast } from "react-toastify"
import UpdateGroupMessageModal from "./UpdateGroupMessageModal"
import { handleErrorResponse, handleSuccessResponse } from "../../../api/toast"

const ListGroupMessage = (props) => {
  const { refreshEvent, callRefreshEvent } = props;
  const [listGroupMessage, setListGroupMessage] = useState([]);

  useEffect(() => {
    AdminGroupMessageApi.listGroupMessages().then(resp => {
      const rawListGroupMessages = resp.data.data;
      const fixedListGroupMessages = rawListGroupMessages.map(groupMessage => {
        return groupMessage;
      });
      setListGroupMessage([...fixedListGroupMessages]);
    });
  }, [refreshEvent])

  const handleDeleteGroupMessage = (groupMessage) => {
    if (window.confirm('Are you sure?')) {
      AdminGroupMessageApi.deleteGroupMessage(groupMessage).then(resp => {
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
            
            <th>DisplayName</th>
            
            <th>Admin</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listGroupMessage.map(groupMessage => {
            return (
              <tr>
                
                <td>{groupMessage.id}</td> 
                <td>{groupMessage.createdAt}</td> 
                <td>{groupMessage.lastUpdatedAt}</td> 
                <td>{groupMessage.displayName}</td> 
                <td>{groupMessage.adminId}</td>
                 
                <td>
                  <UpdateGroupMessageModal
                    data={groupMessage}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <ButtonGroup>
                    <Button variant="danger" size='sm' onClick={handleDeleteGroupMessage.bind(null, groupMessage)}>Delete</Button>
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

export default ListGroupMessage