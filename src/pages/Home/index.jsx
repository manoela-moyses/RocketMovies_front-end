import { FiPlus } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Movie } from '../../components/Movie';

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <div>
            <h2>Meus filmes</h2>
            <Link to="/new">
              <Button
                icon={FiPlus}
                title="Adicionar filme"
              />
            </Link>
          </div>

          <Movie data={{
            title: 'Interestellar',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' },
            ]
          }} />

          <Movie data={{
            title: 'Interestellar',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' },
            ]
          }} />

          <Movie data={{
            title: 'Interestellar',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' },
            ]
          }} />
        </Content>
      </main>
    </Container>
  )
}