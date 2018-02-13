import React from 'react'

import { Tabs, Tab } from 'material-ui/Tabs'

const CustomTabs = ({tabs}) => (
  <Tabs>
    {
      tabs.map(tab => (
        <Tab key={tab.id} label={tab.name}>
          {tab.render()}
        </Tab>
      ))
    }
  </Tabs>
)

export default CustomTabs
