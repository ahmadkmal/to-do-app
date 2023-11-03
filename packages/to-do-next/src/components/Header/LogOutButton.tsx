'use client'
import { removeUserToken } from '@/utils/userToken'
import {  useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { useQueryClient } from '@tanstack/react-query'

type Props = {}

const LogOutButton = (props: Props) => {
    const router = useRouter()
    const queryClient = useQueryClient()
  return (
    
    <Button variant='outline' onClick={()=>{
        removeUserToken()
        router.push('/login')
        queryClient.clear()
    }}>
        Log Out
    </Button>
  )
}

export default LogOutButton