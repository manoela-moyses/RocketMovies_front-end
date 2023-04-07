import { Container } from './style';

export function Button({ icon: Icon, title, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {Icon && <Icon size={16} />}
      {loading ? 'Carregando...' : title}
    </Container>
  );
}