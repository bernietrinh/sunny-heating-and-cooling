import React from 'react';
import cxs from 'cxs';

const styles = {
  header: cxs({
    position: 'absolute',
    width: '100%',
    // top: '0',
    // right: '0',
    // left: '0',
    display: 'flex',
    background: 'none',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginTop: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem'
  }),
  contact: cxs({
    padding: '.5rem',
    fontSize: '1.8rem',
    fontFamily: `'Montserrat', sans-serif`,
    b: {
      fontWeight: 'bold'
    }
  }),
  logo: cxs({
    width: '11rem'
  })
};


const header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img className={styles.logo} src="/static/images/logo.svg" alt=""/>
        <div className={styles.contact}><p><b>For immediate services:</b> 416-566-1820</p></div>
        <div></div>
      </header>
    </div>
  )
};


export default header;
