import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
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
    </Fragment>
  );
}

export default App;
