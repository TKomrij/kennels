import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" 
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  const history = useHistory()

  useEffect(() => {
      console.log("AnimalList: Initial render before data")
      getLocations()
      .then(getCustomers)
      .then(getAnimals)
  }, [])

  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
		      <button onClick={() => {history.push("/animals/create")}}>
            Add Animal
          </button>
      {
        animals.map(animal => {

          const owner = customers.find(c => c.id === animal.customerId)
          const clinic = locations.find(l => l.id === animal.locationId)

          return <AnimalCard 
          key={animal.id} 
          animal={animal} 
          location={clinic}
          customer={owner}
          animal={animal}/>
        })
      }
    </div>
  )
}