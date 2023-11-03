'use client'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const ClientOnly = ({
    children

}: Props) => {
    const[ isClient, setIsClient ] = React.useState(false)
    React.useEffect(()=>{
        setIsClient(true)
    },[])
    if(!isClient){
        return null
    }
  return (
        <>
            {children}
        </>
  )
}

export default ClientOnly