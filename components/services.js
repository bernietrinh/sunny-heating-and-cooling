const services = [
  {
    title: 'Heating',
    description: 'We do heating'
  },
  {
    title: 'Cooling',
    description: 'We do cooling'
  },
  {
    title: 'Maintenance',
    description: 'We do maintenance'
  }
];

export default () => {

  return (
    <div>
      <div>
        <h2>We are here to service you.</h2>
        <p>Description</p>
      </div>
      {
        services.map((service, key) => {
          return (
            <section key={key}>
              <h5>{ service.title }</h5>
              <p>{ service.description }</p>
            </section>
          )
        })
      }
      <div></div>
    </div>
  )
}