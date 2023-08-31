"use client"

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

function Navbar() {

  const { data: session } = useSession();

  return (
    <nav className='bg-slate-900 flex items-center py-3 justify-between px-20 text-white'>
      <Link href="/">
        <h1>Next Auth</h1>
      </Link>

      {session?.user ? (
        <div className='flex gap-x-2 items-center'>
          <Link href="/dashboard">
            Dashboard
          </Link>
          <p>{session.user?.name} {session.user?.email}</p>
          <img 
            src={session.user?.image || undefined} 
            alt='Avatar User'
            className='w-10 h-10 rounded-full cursor-pointer'
          />
          <button 
            onClick={() => {
              signOut({
                callbackUrl: "/"
              })
            }}
            className='bg-sky-400 px-3 py-2 rounded'
          >
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => signIn()} className='bg-green-400 px-3 py-2 rounded'>
          Sign In
        </button>
      )}
    </nav>
  )
}

export default Navbar;