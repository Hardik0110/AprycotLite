import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Searchbar from './components/Searchbar'

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Sidebar  />
      <Searchbar  />
    </>
  )
}