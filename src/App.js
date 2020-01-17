import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './config/reactotron'
import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';
import store from './store';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Wrapper>
            <Container>
              <Sidebar />
              <Content>
                <Header />
                <Routes />
              </Content>
              <Player />
            </Container>
          </Wrapper>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
