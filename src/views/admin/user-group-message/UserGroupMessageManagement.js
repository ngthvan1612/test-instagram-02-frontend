import React from "react"
import { useState } from 'react'

import CreateUserGroupMessageModal from "./CreateUserGroupMessageModal"
import ListUserGroupMessage from "./ListUserGroupMessage"

const UserGroupMessageManagement = () => {
  const [refreshEvent, setRefreshEvent] = useState(0);

  const callRefreshEvent = () => {
    setRefreshEvent(1 - refreshEvent);
  }

  return (
    <>
      <CreateUserGroupMessageModal
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
      <ListUserGroupMessage
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
    </>
  )
}

export default UserGroupMessageManagement