import React from "react"
import { useEffect, useState, useRef } from "react"
import { Button, ButtonGroup, Table, Modal, Form } from "react-bootstrap"
import { AdminCommentApi } from '../../../api/admin'
import * as moment from 'moment'
import { toast } from "react-toastify"
import UpdateCommentModal from "./UpdateCommentModal"
import { handleErrorResponse, handleSuccessResponse } from "../../../api/toast"

const ListComment = (props) => {
  const { refreshEvent, callRefreshEvent } = props;
  const [listComment, setListComment] = useState([]);

  useEffect(() => {
    AdminCommentApi.listComments().then(resp => {
      const rawListComments = resp.data.data;
      const fixedListComments = rawListComments.map(comment => {
        return comment;
      });
      setListComment([...fixedListComments]);
    });
  }, [refreshEvent])

  const handleDeleteComment = (comment) => {
    if (window.confirm('Are you sure?')) {
      AdminCommentApi.deleteComment(comment).then(resp => {
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
            
            <th>User</th>
            
            <th>Post</th>
            
            <th>Parent</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listComment.map(comment => {
            return (
              <tr>
                
                <td>{comment.id}</td> 
                <td>{comment.createdAt}</td> 
                <td>{comment.lastUpdatedAt}</td> 
                <td>{comment.content}</td> 
                <td>{comment.userId}</td>
                 
                <td>{comment.postId}</td>
                 
                <td>{comment.parentId}</td>
                 
                <td>
                  <UpdateCommentModal
                    data={comment}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <ButtonGroup>
                    <Button variant="danger" size='sm' onClick={handleDeleteComment.bind(null, comment)}>Delete</Button>
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

export default ListComment