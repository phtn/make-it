'use client'

import { NavContainer } from './styled'
import { Brand } from './brand'
import { Menu } from './menu'
import { Settings } from './settings'

const Navbar = () => (
  <NavContainer>

    <Brand />
    <Menu />
    <Settings />
    
  </NavContainer>
)
export default Navbar
