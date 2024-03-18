import React, { useEffect, useState } from 'react'
import { Statistic, Icon, Grid, Container, Image, Segment, Dimmer, Loader } from 'semantic-ui-react'
import { orderApi } from '../misc/OrderApi'
import { handleLogError } from '../misc/Helpers'
import { useAuth } from '../context/AuthContext'


function Home() {
  const [numberOfUsers, setNumberOfUsers] = useState(0)
  const [numberOfOrders, setNumberOfOrders] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const { getUser, userIsAuthenticated, userLogout } = useAuth()
  const user = getUser()

  useEffect(() => {
    async function fetchData() {
      try {
        const responseUsers = await orderApi.numberOfUsers()
        const numberOfUsers = responseUsers.data

        const responseOrders = await orderApi.numberOfOrders()
        const numberOfOrders = responseOrders.data

        setNumberOfUsers(numberOfUsers)
        setNumberOfOrders(numberOfOrders)
      } catch (error) {
        handleLogError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <Segment basic style={{ marginTop: window.innerHeight / 2 }}>
        <Dimmer active inverted>
          <Loader inverted size='huge'>Loading</Loader>
        </Dimmer>
      </Segment>
    )
  }

  return (
<div class="relative bg-cover bg-center h-screen">
      <img
        src="https://e0.pxfuel.com/wallpapers/389/224/desktop-wallpaper-pathology-medical-lab.jpg"
        class="absolute inset-0 w-full h-full object-cover"
      
      />

      <div class="absolute inset-0 flex justify-center items-center">
        <div class="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md">
          <h1 class="text-6xl	 font-bold mb-4 text-xl

">
            {`Welcome to ABC Lab Appointment System   `}
      </h1>
        
        </div>
      </div>
    </div>
  )
}

export default Home