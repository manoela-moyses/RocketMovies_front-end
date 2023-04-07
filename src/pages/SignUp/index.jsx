import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { RiArrowLeftLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Crie sua conta</h2>

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
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button
          title="Cadastrar"
        />

        <Link to="/">
          <ButtonText
            className="simpleButton"
            icon={RiArrowLeftLine}
            title="Voltar para o login"
          />
        </Link>
      </Form>

      <Background />
    </Container>
  )
}