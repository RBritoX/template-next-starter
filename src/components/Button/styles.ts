import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background: ${props => props.theme.colors.secondary};
  transition: background 0.2s;

  & + div {
    margin: 1.6rem 0;
  }

  &:hover {
    background: ${props => darken(0.2, props.theme.colors.secondary)};
  }

  button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-transform: uppercase;
    border: 0;
    padding: 1.6rem;
    background: transparent;
    color: ${props => props.theme.colors.text};

    svg {
      height: 2rem;
      margin-right: 1.6rem;
    }
  }
`
