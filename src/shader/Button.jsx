import styles from './Button'

export default function Button({color = "secondary", children, handleClick}) {
  return (
    <button onClick={handleClick} className={`${styles.button} ${color === "primary" ? styles.primary : styles.secondary}`}>
         {children}
    </button>
  )
}
