import React from "react"
import { useEffect, useState, useRef } from "react"
import { Button, ButtonGroup, Table, Modal, Form } from "react-bootstrap"
import { AdminMessageApi } from '../../../api/admin'
import * as moment from 'moment'
import { toast } from "react-toastify"
import UpdateMessageModal from "./UpdateMessageModal"
import { handleErrorResponse, handleSuccessResponse } from "../../../api/toast"

const ListMessage = (props) => {
  const { refreshEvent, callRefreshEvent } = props;
  const [listMessage, setListMessage] = useState([]);

  useEffect(() => {
    AdminMessageApi.listMessages().then(resp => {
      const rawListMessages = resp.data.data;
      const fixedListMessages = rawListMessages.map(message => {
        return message;
      });
      setListMessage([...fixedListMessages]);
    });
  }, [refreshEvent])

  const handleDeleteMessage = (message) => {
    if (window.confirm('Are you sure?')) {
      AdminMessageApi.deleteMessage(message).then(resp => {
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
            
            <th>Content</th>
            
            <th>Sender</th>
            
            <th>Receiver</th>
            
            <th>Group</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listMessage.map(message => {
            return (
              <tr>
                
                <td>{message.id}</td> 
                <td>{message.createdAt}</td> 
                <td>{message.lastUpdatedAt}</td> 
                <td>{message.content}</td> 
                <td>{message.senderId}</td>
                 
                <td>{message.receiverId}</td>
                 
                <td>{message.groupId}</td>
                 
                <td>
                  <UpdateMessageModal
                    data={message}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <ButtonGroup>
                    <Button variant="danger" size='sm' onClick={handleDeleteMessage.bind(null, message)}>Delete</Button>
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

export default ListMessage