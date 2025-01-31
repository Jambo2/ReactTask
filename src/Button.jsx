import styles from './app/styles/Button.module.css'

export default function Button({color = "secondary", children, handleClick}) {
  return (
    <button onClick={handleClick} className={`${styles.button} ${color === "primary" ? styles.primary : styles.secondary}`}>
         {children}
    </button>
  )
}
