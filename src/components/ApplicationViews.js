import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalCard"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
            
            <CustomerProvider>
                <LocationProvider>
                    <AnimalProvider>
                        <Route exact path="/animals">
                            <h2>Animals</h2>
                            <AnimalList />
                        </Route>
                    </AnimalProvider>
                </LocationProvider>
            </CustomerProvider>

            <EmployeeProvider>
                <Route exact path="/employees">
                    <h2>Employees</h2>
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

        
            <CustomerProvider>
                <Route exact path="/customers">
                    <h2>Customers</h2>
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <h2>Locations</h2>
                    <LocationList />
                </Route>
            </LocationProvider>
        </>
    )
}