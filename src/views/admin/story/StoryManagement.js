import React from "react"
import { useState } from 'react'

import CreateStoryModal from "./CreateStoryModal"
import ListStory from "./ListStory"

const StoryManagement = () => {
  const [refreshEvent, setRefreshEvent] = useState(0);

  const callRefreshEvent = () => {
    setRefreshEvent(1 - refreshEvent);
  }

  return (
    <>
      <CreateStoryModal
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
      <ListStory
        refreshEvent={refreshEvent}
        callRefreshEvent={callRefreshEvent}
      />
    </>
  )
}

export default StoryManagement