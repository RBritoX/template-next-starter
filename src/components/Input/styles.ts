import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  padding: 1.6rem;
  border: 0;
  background: ${props => props.theme.colors.input};

  & + div {
    margin: 1.6rem 0;
  }

  svg {
    height: 2rem;
    margin-right: 1.6rem;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: ${props => props.theme.colors.text};

    &::placeholder {
      color: ${props => props.theme.colors.placeholder};
    }
  }
`
