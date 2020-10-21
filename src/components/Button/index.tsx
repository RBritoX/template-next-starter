import React, { ButtonHTMLAttributes } from 'react'
import { StyledIconProps } from '@styled-icons/styled-icon'

import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<StyledIconProps>
  label: string
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, label, ...rest }) => (
  <S.Container>
    <button type="button" {...rest}>
      {Icon && <Icon />}
      {label}
    </button>
  </S.Container>
)

export default Button
