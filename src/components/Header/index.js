import React from 'react';

import { Container, Search, User } from './styles'

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://conteudo.imguol.com.br/c/entretenimento/38/2017/12/21/cena-de-avatar-2009-1513852401735_v2_1777x999.jpg" alt="avatar"></img>
      Avatar
    </User>
  </Container>
);

export default Header;
