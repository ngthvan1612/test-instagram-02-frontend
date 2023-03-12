import React from "react"
import { useEffect, useState, useRef } from "react"
import { Button, ButtonGroup, Table, Modal, Form } from "react-bootstrap"
import { AdminPostApi } from '../../../api/admin'
import * as moment from 'moment'
import { toast } from "react-toastify"
import UpdatePostModal from "./UpdatePostModal"
import { handleErrorResponse, handleSuccessResponse } from "../../../api/toast"

const ListPost = (props) => {
  const { refreshEvent, callRefreshEvent } = props;
  const [listPost, setListPost] = useState([]);

  useEffect(() => {
    AdminPostApi.listPosts().then(resp => {
      const rawListPosts = resp.data.data;
      const fixedListPosts = rawListPosts.map(post => {
        return post;
      });
      setListPost([...fixedListPosts]);
    });
  }, [refreshEvent])

  const handleDeletePost = (post) => {
    if (window.confirm('Are you sure?')) {
      AdminPostApi.deletePost(post).then(resp => {
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
            
            <th>Privacy</th>
            
            <th>Author</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listPost.map(post => {
            return (
              <tr>
                
                <td>{post.id}</td> 
                <td>{post.createdAt}</td> 
                <td>{post.lastUpdatedAt}</td> 
                <td>{post.content}</td> 
                <td>{post.privacy}</td> 
                <td>{post.authorId}</td>
                 
                <td>
                  <UpdatePostModal
                    data={post}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <ButtonGroup>
                    <Button variant="danger" size='sm' onClick={handleDeletePost.bind(null, post)}>Delete</Button>
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

export default ListPost