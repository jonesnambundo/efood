import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'submit' | 'link'
  title: string
  to?: string
  disabled?: boolean
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children, disabled }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  if (type === 'submit') {
    return (
      <ButtonContainer type="submit" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
export default Button
