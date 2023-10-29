import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { myContext } from './Contextapi'

export default function ModeBtn() {
  const { mode, setmode } = useContext(myContext)
  return (
    <>
      <section className={`position-fixed top-0 w-100 text-end p-2  z-3 ${(mode) ? 'bg-white' : 'bg-dark'}`}>
        <Button onClick={() => setmode(!mode)} className={`mode-btn border-0 shadow fw-bold ${mode ? 'bg-black text-light' : 'bg-white text-dark'}`}>
          {mode ? 'Dark Mode' : 'Light Mode'}</Button>
      </section>
    </>
  )
}

