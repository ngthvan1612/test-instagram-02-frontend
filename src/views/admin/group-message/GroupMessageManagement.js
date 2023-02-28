import { useState } from 'react'

import CreateGroupMessageModal from "./CreateGroupMessageModal"
import ListGroupMessage from "./ListGroupMessage"

const GroupMessageManagement = () => {
  const [refreshEvent, setRefreshEvent] = useState(0);

  const callRefreshEvent = () => {
    setRefreshEvent(1 - refreshEvent);
  }

  return (
    <>
      <CreateGroupMessageModal
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
      <ListGroupMessage
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
    </>
  )
}

export default GroupMessageManagement