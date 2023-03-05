import React from 'react'
import Doctors from '../components/Doctors'

function Home() {
  return (
    <main className="text-center mt-2">
        <h1 className="text-danger display-5">Clarus Hospital</h1>
        <Doctors />
        <div>Appointments</div>
    </main>
  )
}

export default Home