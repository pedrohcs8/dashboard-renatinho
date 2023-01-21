import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Categorypage } from './pages/categorypage'
import { Guildprefixpage } from './pages/guildPrefixPage'
import { Homepage } from './pages/homepage'
import { Menupage } from './pages/menupage'
import { WelcomeMessagePage } from './pages/welcomeMessagePage'
import { GuildContext } from './utils/contexts/guildContext'

function App() {
  const [guildId, setGuildId] = useState('')

  const updateGuildId = (id: string) => setGuildId(id)
  return (
    <GuildContext.Provider value={{ guildId, updateGuildId }}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/menu' element={<Menupage />} />
        {/* <Route path='/dashboard' element={<Homepage />} /> */}
        <Route path='/categories' element={<Categorypage />} />
        <Route path='/guild/update-prefix' element={<Guildprefixpage />} />
        <Route path='/update-message' element={<WelcomeMessagePage />} />
      </Routes>
    </GuildContext.Provider>
  )
}

export default App
