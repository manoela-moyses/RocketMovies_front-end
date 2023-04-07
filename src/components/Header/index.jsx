import { Container, Brand, Search, Profile } from './style';

import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <Brand to="/">
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>Manoela Moyses</strong>
          <span>sair</span>
        </div>

        <img src="https://github.com/manoela-moyses.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}