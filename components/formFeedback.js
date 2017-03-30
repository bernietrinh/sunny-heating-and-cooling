import cxs from 'cxs';

export default (props) => {
  return (
    <div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.message}>{props.message}</p>
      <button
        className={styles.button}
        onClick={props.returnToForm}>
        {props.btnText}
      </button>
    </div>
  )
}

const styles = {
  title: cxs({
    fontSize: '2.4rem',
    color: '#FFFFFF',
    fontFamily: `'Montserrat', sans-serif`,
    marginBottom: '2rem'
  }),
  message: cxs({
    fontSize: '1.6rem',
    color: '#FFFFFF',
    marginBottom: '2rem'
  }),
  button: cxs({
    color: '#FFFFFF',
    background: 'none',
    border: '2px solid',
    padding: '1rem 2rem',
    fontSize: '1.8rem',
    transition: 'color 0.5s ease',
    ':hover': {
      color: '#1f5264'
    }
  })
};