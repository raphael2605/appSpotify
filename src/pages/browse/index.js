import React from 'react';
import { Container, Title, List, Playlist } from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlist/1">
        <img src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="album cover" />
        <strong>Rock</strong>
        <p>Rock mundial</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="album cover" />
        <strong>Rock</strong>
        <p>Rock mundial</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="album cover" />
        <strong>Rock</strong>
        <p>Rock mundial</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="album cover" />
        <strong>Rock</strong>
        <p>Rock mundial</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
