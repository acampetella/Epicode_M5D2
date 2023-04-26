import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Counter from '../components/Counter'

const Home = () => {
  return (
    <>
      <Navigation/>
      <Counter/>
      <Hero/>
      <Main/>
    </>
  )
}

export default Home