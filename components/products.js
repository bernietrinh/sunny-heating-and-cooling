import cxs from 'cxs';

const brands = [
  {
    name: 'keeprite',
    imageUrl: '/static/images/keeprite.png'
  },
  {
    name: 'goodman',
    imageUrl: '/static/images/goodman.png'
  },
  {
    name: 'york',
    imageUrl: '/static/images/york.png'
  }
];

const styles = {
  products: cxs({
    maxWidth: '100rem',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    '@media (max-width: 39.9em)': {
      padding: '3rem'
    },
    '@media (min-width: 40em)': {
      padding: '10rem'
    }
  }),
  imageWrapper: cxs({
    width: '25%'
  }),
  image: cxs({
    width: '100%'
  })
};

export default () => {
  return (
    <div>
      <div className={styles.products}>
        {
          brands.map((brand, key) => {
            return (
              <section key={key} className={styles.imageWrapper}>
                <img src={brand.imageUrl} alt="" className={styles.image} />
              </section>
            )
          })
        }
      </div>
    </div>
  )
}