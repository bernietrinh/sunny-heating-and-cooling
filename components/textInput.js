import cxs from 'cxs';

export default (props) => {
  return (
    <section>
      <label className={props.styles.label} id={props.label.id}>{props.label.title}</label>
      {
        props.input.error ?
          <div className={props.styles.error}>{props.input.error}</div>
          :
          ''
      }
      <input className={styles.input}
             type={props.type}
             name={props.label.id}
             onChange={props.onValueChange}
      />
    </section>
  )
};

const styles = {
  input: cxs({
    marginTop: '1rem',
    borderRadius: '1px',
    borderStyle: 'initial',
    height: '3.5rem',
    ':focus': {
      outline: '2px RGB(142, 190, 210) solid'
    }
  })
};