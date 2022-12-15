import React from 'react'

const MeetupContext = React.createContext({
  registered: '',
  userDetails: {},
  ChangeRegisteredStatus: () => {},
})

export default MeetupContext
