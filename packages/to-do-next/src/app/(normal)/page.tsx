'use client'
import Todo from '@/components/ToDo/Todo'
import { Suspense } from 'react'
export const fetchCache = 'force-no-store'
export default function Home() {
  return (
<Suspense fallback={<div>Loading...</div>}>
<Todo />
</Suspense>

  )
}
