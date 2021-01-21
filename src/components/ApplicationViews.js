import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import {EmployeeCard} from "./employee/EmployeeCard"
import {CustomerCard} from "./customer/CustomerCard"
import {LocationCard} from "./location/LocationCard"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            <Route path="/employees">
                <EmployeeCard />
            </Route>

            <Route path="/customers">
                <CustomerCard />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>
        </>
    )
}