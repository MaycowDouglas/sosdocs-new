import { ButtonHTMLAttributes } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpen: boolean
}

export const NavbarToggle = ({ isOpen, onClick }: Props) => (
  <button className="lg:hidden" onClick={onClick}>
    {isOpen ? <FaTimes /> : <FiMenu />}
  </button>
)
