import { useEffect, useState, useRef } from "react"
import { Button, ButtonGroup, Table, Modal, Form } from "react-bootstrap"
import { AdminAnnounceApi } from '../../../api/admin'
import * as moment from 'moment'
import { toast } from "react-toastify"
import UpdateAnnounceModal from "./UpdateAnnounceModal"
import { handleErrorResponse, handleSuccessResponse } from "../../../api/toast"

const ListAnnounce = (props) => {
  const { refreshEvent, callRefreshEvent } = props;
  const [listAnnounce, setListAnnounce] = useState([]);

  useEffect(() => {
    AdminAnnounceApi.listAnnounces().then(resp => {
      const rawListAnnounces = resp.data.data;
      const fixedListAnnounces = rawListAnnounces.map(announce => {
        return announce;
      });
      setListAnnounce([...fixedListAnnounces]);
    });
  }, [refreshEvent])

  const handleDeleteAnnounce = (announce) => {
    if (window.confirm('Are you sure?')) {
      AdminAnnounceApi.deleteAnnounce(announce).then(resp => {
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
            
            <th>Seen</th>
            
            <th>User</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listAnnounce.map(announce => {
            return (
              <tr>
                
                <td>{announce.id}</td> 
                <td>{announce.createdAt}</td> 
                <td>{announce.lastUpdatedAt}</td> 
                <td>{announce.content}</td> 
                <td><input type="checkbox" checked={announce.seen}/></td>
                 
                <td>{announce.userId}</td>
                 
                <td>
                  <UpdateAnnounceModal
                    data={announce}
                    refreshEvent={refreshEvent}
                    callRefreshEvent={callRefreshEvent}
                  />
                  
                  <ButtonGroup>
                    <Button variant="danger" size='sm' onClick={handleDeleteAnnounce.bind(null, announce)}>Delete</Button>
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

export default ListAnnounce