import cxs from 'cxs';

const styles = {
  footer: cxs({
    height: '22rem',
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(167, 204, 219, 1)',
    div: {
      marginLeft: '6.5rem'
    },
    'div:first-child': {
      marginRight: '6.5rem'
    },
    h2: {
      fontSize: '2.4rem',
      marginBottom: '1rem',
      fontWeight: 'bold'
    },
    'p, a': {
      lineHeight: '1.2',
      fontSize: '1.6rem'
    },

  })
};

export default () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Contact Us</h2>
        <p>416-098-2348</p>
        <p>sunny@email.com</p>
        <p>123 Worth St.</p>
        <p>Toronto, On</p>
      </div>
    </footer>

  )
}