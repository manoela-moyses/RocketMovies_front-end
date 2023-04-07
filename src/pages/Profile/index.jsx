import { RiArrowLeftLine } from 'react-icons/ri';
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Container, Form, Avatar } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText
            icon={RiArrowLeftLine}
            title="Voltar"
          />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/manoela-moyses.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />

          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button
          disabled
          title="Salvar"
        />
      </Form>
    </Container>
  )
}