import { RiTimeLine } from "react-icons/ri";

import { Container } from "./style";

import { StarsRating } from '../../components/StarsRating';

export function Section({ title, children }) {
  return (
    <Container>
      <div className="title">
        <h2>{title}</h2>
        <StarsRating />
      </div>

      <div className="info">
        <div className="user">
          <img src="https://github.com/manoela-moyses.png" alt="Foto do usuário" />
          <span>Por Manoela Moyses</span>
        </div>

        <div className="date">
          <RiTimeLine />
          <span>23/05/22 às 08:00</span>
        </div>
      </div>

      {children}

    </Container>
  )
}