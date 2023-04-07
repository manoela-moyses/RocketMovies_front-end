import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Faça seu login</h2>

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

        <Button title="Entrar" />

        <Link to="register">
          <ButtonText className="simpleButton" title="Criar conta" />
        </Link>
      </Form>

      <Background />
    </Container>
  )
}