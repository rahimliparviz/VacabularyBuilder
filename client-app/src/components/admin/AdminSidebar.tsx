import * as React from 'react';
// import { useBooleanKnob } from '@stardust-ui/docs-components'
import {Header, Sidebar, Segment, Menu, Icon,Image} from 'semantic-ui-react';
import { useState } from 'react';

export interface sidebarProps {
    
}
 
const AdminSidebar: React.SFC<sidebarProps> = () => {
    const [visible, setVisible] = useState(true)

    return (
      <Sidebar.Pushable as={Segment} >
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width='thin'
          
        >
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>  
        <Sidebar.Pusher>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <Image src='/images/wireframe/paragraph.png' />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
}
 
export default AdminSidebar;