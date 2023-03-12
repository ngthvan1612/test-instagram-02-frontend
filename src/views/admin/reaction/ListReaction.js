import React from "react"
import { useEffect, useState, useRef } from "react"
import { Button, ButtonGroup, Table, Modal, Form } from "react-bootstrap"
import { AdminReactionApi } from '../../../api/admin'
import * as moment from 'moment'
import { toast } from "react-toastify"
import UpdateReactionModal from "./UpdateReactionModal"
import { handleErrorResponse, handleSuccessResponse } from "../../../api/toast"

const ListReaction = (props) => {
  const { refreshEvent, callRefreshEvent } = props;
  const [listReaction, setListReaction] = useState([]);

  useEffect(() => {
    AdminReactionApi.listReactions().then(resp => {
      const rawListReactions = resp.data.data;
      const fixedListReactions = rawListReactions.map(reaction => {
        return reaction;
      });
      setListReaction([...fixedListReactions]);
    });
  }, [refreshEvent])

  const handleDeleteReaction = (reaction) => {
    if (window.confirm('Are you sure?')) {
      AdminReactionApi.deleteReaction(reaction).then(resp => {
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
            
            <th>Reaction</th>
            
            <th>User</th>
            
            <th>Post</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listReaction.map(reaction => {
            return (
              <tr>
                
                <td>{reaction.id}</td> 
                <td>{reaction.createdAt}</td> 
                <td>{reaction.lastUpdatedAt}</td> 
                <td>{reaction.reaction}</td> 
                <td>{reaction.userId}</td>
                 
                <td>{reaction.postId}</td>
                 
                <td>
                  <UpdateReactionModal
                    data={reaction}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <ButtonGroup>
                    <Button variant="danger" size='sm' onClick={handleDeleteReaction.bind(null, reaction)}>Delete</Button>
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

export default ListReaction