import { useEffect, useState } from 'react'
import Layout from './components/Layout';
import Hero from './components/Hero';
import CoffeeForm from './components/CoffeeForm';
import Stats from './components/Stats';
import History from './components/History';
import { useAuth } from './context/AuthContext';
import { coffeeConsumptionHistory } from './utils';

function App() {
  const { globalUser, isLoading, globalData} = useAuth()
  // let globalData= coffeeConsumptionHistory
  const isAutenticated = globalUser;
  const isData = globalData && !!Object.keys(globalData || {}).length


  const authenticaedContent = (
    <>
      <Stats />
      <History />
    </>
  )

  return (
    <Layout >
      <Hero /> 
      <CoffeeForm isAutenticated ={isAutenticated} />
      {(isAutenticated && isLoading) && (
        <p>Loading data...</p>
      )}
      {(isAutenticated && isData) && (authenticaedContent)}
    </Layout>
  )
}

export default App
