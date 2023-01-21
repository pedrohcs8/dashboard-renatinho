import { createContext } from 'react'

type guildContextType = {
  guildId: string
  updateGuildId: (id: string) => void
}

export const GuildContext = createContext<guildContextType>({
  guildId: '',
  updateGuildId: () => {},
})
