import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
    <Card user='himanshu' age={10} img={'https://images.unsplash.com/photo-1779896411959-26149949fdc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D'} />
    <Card user='shibham' age={22} img={'https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D'} />
    <Card user='kamal' age={23} img={'https://images.unsplash.com/photo-1789009666152-ac554305c90b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&i'}  />
    <Card user='Raman' age={30} img={'https://images.unsplash.com/photo-1791487531135-dba42c2edfc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}  />
    <Card user='vishal' age={15} img={'https://images.unsplash.com/photo-1791719557156-a2c576a4fe24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}  />
    <Card user='vikas' age={18} img={'https://plus.unsplash.com/premium_photo-1791721702473-2f2d6275a051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}  />
    <Card user='Prabh' age={17} img={'https://images.unsplash.com/photo-1791292183261-158a21a5e713?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}  />
    <Card user='ritik singh' age={22} img={'https://images.unsplash.com/photo-1791188212248-ae972ab2a463?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}  />

    </div>
  )
}

export default App