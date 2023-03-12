import React from "react"
import { useState } from 'react'

import CreateUserTagFriendPostModal from "./CreateUserTagFriendPostModal"
import ListUserTagFriendPost from "./ListUserTagFriendPost"

const UserTagFriendPostManagement = () => {
  const [refreshEvent, setRefreshEvent] = useState(0);

  const callRefreshEvent = () => {
    setRefreshEvent(1 - refreshEvent);
  }

  return (
    <>
      <CreateUserTagFriendPostModal
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
      <ListUserTagFriendPost
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
    </>
  )
}

export default UserTagFriendPostManagement