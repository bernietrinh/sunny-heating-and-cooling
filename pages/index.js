import Head from 'next/head'
import React, { Component } from 'react';

const sendEmail = () => {
  console.log('send email');
  Server.connect({
    user: 'bernie.trinh26@gmail.com'
  });
};

class Index extends Component {

  render() {
    return <div>
      <Head>
        <title>Sunny Heating &amp; Cooling</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
      <div>Welcome to next.js!</div>

      <button onClick={sendEmail}>Send email</button>
    </div>
  }
}

export default Index;