import { RiArrowLeftLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Link to="/">
            <ButtonText
              icon={RiArrowLeftLine}
              title="
            Voltar"
            />
          </Link>

          <h1>Novo Filme</h1>

          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <h2>Marcadores</h2>

          <div className='markers'>
            <NoteItem value="Interestellar" />
            <NoteItem isNew placeholder="Novo marcador" />
          </div>

          <div>
            <Button className="deleteMovie" title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>

        </Content>
      </main>
    </Container>
  )
}