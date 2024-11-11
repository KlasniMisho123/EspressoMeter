import { useState } from 'react'
import Layout from './components/Layout';
import Hero from './components/Hero';
import CofeeForm from './components/CofeeForm';
import Stats from './components/Stats';
import History from './components/History';

function App() {
  
  const isAutenticated = false;

  const authenticaedContent = (
    <>
    <Stats />
    <History />
    </>
  )

  return (
    <Layout >
      <Hero /> 
      <CofeeForm />
    </Layout>
  )
}

export default App
