const brands = [
  {
    name: 'keeprite',
    imageUrl: ''
  },
  {
    name: 'goodman',
    imageUrl: ''
  },
  {
    name: 'york',
    imageUrl: ''
  }
];

export default () => {
  return (
    <div>
      {
        brands.map((brand, key) => {
          return (
            <section key={key}>
              {brand.name}
              <img src={brand.imageUrl} alt=""/>
            </section>
          )
        })
      }
    </div>
  )
}