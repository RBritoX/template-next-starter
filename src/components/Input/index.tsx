import React, { InputHTMLAttributes } from 'react'
import { StyledIconProps } from '@styled-icons/styled-icon'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<StyledIconProps>
  name: string
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }): JSX.Element => {
  return (
    <S.Container>
      {Icon && <Icon />}
      <input {...rest} />
    </S.Container>
  )
}

export default Input
