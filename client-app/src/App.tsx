import React, { Fragment, useContext } from 'react';
import './App.css';
import NavBar from './components/nav/NavBar';
import { Container } from 'semantic-ui-react';
import AddWords from './components/admin/words/forms/AddEditWordForm';
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import WordList from './components/admin/words/WordList';
import ModalContainer from './components/modals/ModalContainer';


const App: React.FC<RouteComponentProps> = ({ location }) => {

  return (
      <Fragment>
        <ModalContainer/>
          <NavBar/>
          <Container style={{ marginTop: '7em' }}>
          <Switch>
            <Route exact path='/add-word'  component={AddWords} />
            <Route exact path='/all-words'  component={WordList} />
          </Switch>
          </Container>
      </Fragment>

  );
}

export default withRouter(observer(App));
