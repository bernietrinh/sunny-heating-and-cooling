import Head from 'next/head'
import React, { Component } from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Services from '../components/services'
import Products from '../components/products'
import Footer from '../components/footer'

class Index extends Component {

  // for smooth scroll https://www.npmjs.com/package/react-scroll

  getQuote() {
    console.log('get quote');
  }

  navigateToServices() {
    console.log('navigate to services');
  }

  navigateToAbout() {
    console.log('navigate to about');
  }

  render() {
    return <div>
      <Head>
        <title>Sunny Heating &amp; Cooling</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header gotoAbout={this.navigateToAbout} gotoServices={this.navigateToServices} />
      <Banner getQuote={this.getQuote} gotoServices={this.navigateToServices} />

      <Services />
      <Products />

      <Footer />
    </div>
  }
}

export default Index;