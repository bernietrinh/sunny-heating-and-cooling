import cxs from 'cxs';

module.exports = () => {
  return (
    <div>
      <img src='/static/images/loader.svg' alt=""/>
      <p className={cxs({ color: '#FFFFFF', fontSize: '1.8rem'})}>Loading...</p>
    </div>
  )
};