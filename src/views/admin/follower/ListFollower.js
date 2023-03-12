import React from "react"
import { useEffect, useState, useRef } from "react"
import { Button, ButtonGroup, Table, Modal, Form } from "react-bootstrap"
import { AdminFollowerApi } from '../../../api/admin'
import * as moment from 'moment'
import { toast } from "react-toastify"
import UpdateFollowerModal from "./UpdateFollowerModal"
import { handleErrorResponse, handleSuccessResponse } from "../../../api/toast"

const ListFollower = (props) => {
  const { refreshEvent, callRefreshEvent } = props;
  const [listFollower, setListFollower] = useState([]);

  useEffect(() => {
    AdminFollowerApi.listFollowers().then(resp => {
      const rawListFollowers = resp.data.data;
      const fixedListFollowers = rawListFollowers.map(follower => {
        return follower;
      });
      setListFollower([...fixedListFollowers]);
    });
  }, [refreshEvent])

  const handleDeleteFollower = (follower) => {
    if (window.confirm('Are you sure?')) {
      AdminFollowerApi.deleteFollower(follower).then(resp => {
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
            
            <th>User</th>
            
            <th>Follow</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listFollower.map(follower => {
            return (
              <tr>
                
                <td>{follower.id}</td> 
                <td>{follower.createdAt}</td> 
                <td>{follower.lastUpdatedAt}</td> 
                <td>{follower.userId}</td>
                 
                <td>{follower.followId}</td>
                 
                <td>
                  <UpdateFollowerModal
                    data={follower}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <ButtonGroup>
                    <Button variant="danger" size='sm' onClick={handleDeleteFollower.bind(null, follower)}>Delete</Button>
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

export default ListFollower