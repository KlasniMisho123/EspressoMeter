import { useState } from 'react'
import Layout from './components/Layout';
import Hero from './components/Hero';
import CoffeeForm from './components/CoffeeForm';
import Stats from './components/Stats';
import History from './components/History';

function App() {
  
  const isAutenticated = true;

  const authenticaedContent = (
    <>
    <Stats />
    <History />
    </>
  )

  return (
    <Layout >
      <Hero /> 
      <CoffeeForm />
      {isAutenticated && (authenticaedContent)}
    </Layout>
  )
}

export default App
