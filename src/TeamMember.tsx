import React from 'react'

interface TeamMemberProps {
  name: string
}
const TeamMember = ({ name }: TeamMemberProps) => {
  return <div>Team Member - {name}</div>
}

export default TeamMember
