import React, { Suspense } from 'react'
import { Button } from '../ui/button'
import { redirect } from "next/navigation";
import { removeUserToken } from '@/utils/userToken';
import UserCard from './UserCard';
import LogOutButton from './LogOutButton';
import ClientOnly from '../ClientOnly/ClientOnly';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="w-full
     bg-opacity-50 backdrop-filter backdrop-blur-lg bg-clip-padding backdrop-saturate-150
     bg-violet-100 shadow
    ">
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex ">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
      </div>


      <div className=" flex  flex-1 justify-end space-x-4">
        <Suspense fallback={'loading user'}>
            <ClientOnly>

        <UserCard/>
            </ClientOnly>
        </Suspense>

    <LogOutButton/>

      </div>
    </nav>

  </header>
  )
}

export default Header