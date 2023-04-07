import { VscStarFull, VscStarEmpty } from 'react-icons/vsc';

import { Container } from './style';

export function StarsRating({ rating }) {
  return (
    <Container>
      <span>{rating >= 1 ? <VscStarFull /> : <VscStarEmpty />}</span>
      <span>{rating >= 2 ? <VscStarFull /> : <VscStarEmpty />}</span>
      <span>{rating >= 3 ? <VscStarFull /> : <VscStarEmpty />}</span>
      <span>{rating >= 4 ? <VscStarFull /> : <VscStarEmpty />}</span>
      <span>{rating >= 5 ? <VscStarFull /> : <VscStarEmpty />}</span>
    </Container>
  )
}