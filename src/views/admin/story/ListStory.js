import React from "react"
import { useEffect, useState, useRef } from "react"
import { Button, ButtonGroup, Table, Modal, Form } from "react-bootstrap"
import { AdminStoryApi } from '../../../api/admin'
import * as moment from 'moment'
import { toast } from "react-toastify"
import UpdateStoryModal from "./UpdateStoryModal"
import { handleErrorResponse, handleSuccessResponse } from "../../../api/toast"

const ListStory = (props) => {
  const { refreshEvent, callRefreshEvent } = props;
  const [listStory, setListStory] = useState([]);

  useEffect(() => {
    AdminStoryApi.listStorys().then(resp => {
      const rawListStorys = resp.data.data;
      const fixedListStorys = rawListStorys.map(story => {
        return story;
      });
      setListStory([...fixedListStorys]);
    });
  }, [refreshEvent])

  const handleDeleteStory = (story) => {
    if (window.confirm('Are you sure?')) {
      AdminStoryApi.deleteStory(story).then(resp => {
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
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listStory.map(story => {
            return (
              <tr>
                
                <td>{story.id}</td> 
                <td>{story.createdAt}</td> 
                <td>{story.lastUpdatedAt}</td> 
                <td>{story.content}</td> 
                <td>{story.userId}</td>
                 
                <td>
                  <UpdateStoryModal
                    data={story}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <ButtonGroup>
                    <Button variant="danger" size='sm' onClick={handleDeleteStory.bind(null, story)}>Delete</Button>
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

export default ListStory