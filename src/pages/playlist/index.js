import React from 'react';

import { Container, Header } from './styles';

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="album cover" />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>
        <button>Play</button>
      </div>
    </Header>
  </Container>
)

export default Playlist;
