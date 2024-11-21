import './Button.css'

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ onClick, children, variant = 'primary' }: ButtonProps) {
  return (
    <button className={`button button-${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}
