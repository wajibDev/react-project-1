import styles from  "./Button.module.css";
// eslint-disable-next-line react/prop-types
const Button = ({ isOutline ,icon ,text , ...rest} ) => {
  return (
    <div>
      <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
      </button>
    
    </div>
  )
}

export default Button
