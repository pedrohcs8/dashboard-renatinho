import { useContext } from 'react'
import { GuildContext } from '../utils/contexts/guildContext'

export const Categorypage = () => {
  const { guildId } = useContext(GuildContext)
  return <div>Category Page {guildId}</div>
}
