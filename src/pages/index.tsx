import React from 'react'
import { ReactLogo } from '@styled-icons/fa-brands'

import Button from '../components/Button'
import Input from '../components/Input'

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello World!</h1>

      <Button label="button" />
      <Button label="button" icon={ReactLogo} />

      <Input name="input" placeholder="Digite algo..." />
      <Input name="input" icon={ReactLogo} placeholder="Digite algo..." />
    </div>
  )
}

export default Home
