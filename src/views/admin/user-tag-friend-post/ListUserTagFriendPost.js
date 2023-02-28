import { useEffect, useState, useRef } from "react"
import { Button, ButtonGroup, Table, Modal, Form } from "react-bootstrap"
import { AdminUserTagFriendPostApi } from '../../../api/admin'
import * as moment from 'moment'
import { toast } from "react-toastify"
import UpdateUserTagFriendPostModal from "./UpdateUserTagFriendPostModal"
import { handleErrorResponse, handleSuccessResponse } from "../../../api/toast"

const ListUserTagFriendPost = (props) => {
  const { refreshEvent, callRefreshEvent } = props;
  const [listUserTagFriendPost, setListUserTagFriendPost] = useState([]);

  useEffect(() => {
    AdminUserTagFriendPostApi.listUserTagFriendPosts().then(resp => {
      const rawListUserTagFriendPosts = resp.data.data;
      const fixedListUserTagFriendPosts = rawListUserTagFriendPosts.map(userTagFriendPost => {
        return userTagFriendPost;
      });
      setListUserTagFriendPost([...fixedListUserTagFriendPosts]);
    });
  }, [refreshEvent])

  const handleDeleteUserTagFriendPost = (userTagFriendPost) => {
    if (window.confirm('Are you sure?')) {
      AdminUserTagFriendPostApi.deleteUserTagFriendPost(userTagFriendPost).then(resp => {
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
            
            <th>Post</th>
            
            <th>Friend</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUserTagFriendPost.map(userTagFriendPost => {
            return (
              <tr>
                
                <td>{userTagFriendPost.id}</td> 
                <td>{userTagFriendPost.createdAt}</td> 
                <td>{userTagFriendPost.lastUpdatedAt}</td> 
                <td>{userTagFriendPost.postId}</td>
                 
                <td>{userTagFriendPost.friendId}</td>
                 
                <td>
                  <UpdateUserTagFriendPostModal
                    data={userTagFriendPost}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <ButtonGroup>
                    <Button variant="danger" size='sm' onClick={handleDeleteUserTagFriendPost.bind(null, userTagFriendPost)}>Delete</Button>
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

export default ListUserTagFriendPost