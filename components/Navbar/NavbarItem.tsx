import styles from './Navbar.module.scss'

interface Props {
  children: React.ReactNode,
  className?: string
}

export const NavbarItem: React.FC<Props> = ({ children, className }) => {

  const componentProps = {
    className: [
      styles.Navbar__item,
      className
    ].join(" ")
  }

  return (
    <div {...componentProps}>
      {children}
    </div>
  )
}