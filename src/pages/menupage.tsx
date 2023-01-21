import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockGuild } from '../mocks/guild'
import { GuildContext } from '../utils/contexts/guildContext'

export const Menupage = () => {
  const navigate = useNavigate()
  const { updateGuildId } = useContext(GuildContext)

  return (
    <div>
      <ul>
        {mockGuild.map((guild) => (
          <li
            onClick={() => {
              updateGuildId(guild.id)
              navigate('/categories')
            }}
          >
            {guild.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
