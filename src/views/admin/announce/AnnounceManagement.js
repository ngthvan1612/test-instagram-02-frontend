import React from "react"
import { useState } from 'react'

import CreateAnnounceModal from "./CreateAnnounceModal"
import ListAnnounce from "./ListAnnounce"

const AnnounceManagement = () => {
  const [refreshEvent, setRefreshEvent] = useState(0);

  const callRefreshEvent = () => {
    setRefreshEvent(1 - refreshEvent);
  }

  return (
    <>
      <CreateAnnounceModal
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
      <ListAnnounce
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
    </>
  )
}

export default AnnounceManagement