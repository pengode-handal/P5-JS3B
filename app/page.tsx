
import CardList from './components/CardList/page'
import Navbar from './components/Navbar/page'
import { useState } from 'react';



export default function Home() {
  return (
    <>
<main>
  <Navbar/>
    <CardList/>
</main>
</>
  )
}
