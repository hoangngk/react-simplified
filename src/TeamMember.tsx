import React from 'react'
import { useOutletContext } from 'react-router-dom'

interface TeamMemberProps {
  name: string
}
const TeamMember = ({ name }: TeamMemberProps) => {
  const context = useOutletContext()
  return (
    <div>
      Team Member - {name} - {JSON.stringify(context)}
    </div>
  )
}

export default TeamMember
