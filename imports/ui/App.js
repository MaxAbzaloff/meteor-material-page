import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ContentContainer from './ContentContainer'
import SideMenuContainer from './SideMenuContainer'
import ChatContainer from './ChatContainer'

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <SideMenuContainer />
          <ContentContainer headerText='Project' />
          <ChatContainer />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default App
