"use client"
import LoginCard from '@/components/LoginCard/LoginCard'
import { useGetUsers } from '@/service/query/user'
import React, { Suspense } from 'react'

type Props = {}
export const runtime = 'edge' 
const Login = (props: Props) => {
  const {
    data: users,
  } = useGetUsers()
  const [selectedUser, setSelectedUser] = React.useState<string>('')
  return (
    <div className='flex flex-col items-center w-full justify-center md:gap-4 gap-16 px-4'>
      
      {
        users.map((user)=>{
          if(selectedUser && selectedUser !== user.id) return null
          return <LoginCard {...user} key={user.name} onSelect={setSelectedUser} isSelected={!!selectedUser}/>
        })
      }
  
    </div>
  )
}

export default Login
