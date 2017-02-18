const links = [
  {
    title: 'link',
    url: ''
  },
  {
    title: 'link',
    url: ''
  },
  {
    title: 'link',
    url: ''
  }
];

export default () => {
  return (
    <footer>
      <div>
        <h1>Contact Us</h1>
        <p>416-098-2348</p>
        <p>sunny@email.com</p>
        <p>123 Worth St.</p>
        <p>Toronto, On</p>
      </div>
      <div>
        <h1>External Links</h1>
        {
          links.map((link, key) => {
            return (
              <section key={key}>
                <a href={ link.url }>{ link.title }</a>
              </section>
            )
          })
        }
      </div>
    </footer>

  )
}