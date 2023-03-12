import React from "react"
import { useState } from 'react'

import CreateUserModal from "./CreateUserModal"
import ListUser from "./ListUser"

const UserManagement = () => {
  const [refreshEvent, setRefreshEvent] = useState(0);

  const callRefreshEvent = () => {
    setRefreshEvent(1 - refreshEvent);
  }

  return (
    <>
      <CreateUserModal
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
      <ListUser
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
    </>
  )
}

export default UserManagement