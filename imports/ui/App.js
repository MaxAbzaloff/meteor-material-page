import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ContentContainer from './ContentContainer'

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <ContentContainer />
      </MuiThemeProvider>
    )
  }
}

export default App
