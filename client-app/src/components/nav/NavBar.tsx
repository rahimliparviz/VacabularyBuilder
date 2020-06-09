import * as React from 'react';
import { Menu, Container, Button, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export interface NavBarProps {
    
}
 
const NavBar: React.SFC<NavBarProps> = () => {
    return ( 
      
        <Menu fixed='top' inverted>
      <Container>
        {/* <Menu.Item header  exact to='/'>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item> */}
        <Menu.Item name='Add word' to='/add-word' as={Link}/>
        <Menu.Item
            as={Link}
            to='/all-words'
            content='All words'
         />
      
        {false && (
          <Menu.Item position='right'>
            {/* <Image avatar spaced='right' src={user.image || '/assets/user.png'} /> */}
            <Dropdown pointing='top left' text="name">
              <Dropdown.Menu>
                <Dropdown.Item
                //   to={`/profile/${user.username}`}
                  text='My profile'
                  icon='user'
                />
                <Dropdown.Item  text='Logout' icon='power' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )}
      </Container>
    </Menu>
     );
}
 
export default NavBar;