import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm} from "./animal/Animalform"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"
import { LocationDetail } from "./location/LocationDetail"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <CustomerProvider>
                <LocationProvider>
                    <AnimalProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>

                        <Route exact path="/animals">
                            <h2>Animals</h2>
                            <AnimalList />
                        </Route>

                        <Route exact path="/animals/detail/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>
                    </AnimalProvider>
                </LocationProvider>
            </CustomerProvider>

        
            <EmployeeProvider>
                <Route exact path="/employees/create">
                    <EmployeeForm />
                </Route>

                <Route exact path="/employees">
                    <h2>Employees</h2>
                    <EmployeeList />
                </Route>

                <Route exact path="/employees/detail/:employeeId(\d+)">
                    <EmployeeDetail />
                </Route>
            </EmployeeProvider>
            
           
            <CustomerProvider>
                <Route exact path="/customers">
                    <h2>Customers</h2>
                    <CustomerList />
                </Route>
            </CustomerProvider>


            <LocationProvider>
                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>

                <Route exact path="/locations">
                    <h2>Locations</h2>
                    <LocationList />
                </Route>

                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
            </LocationProvider>
        </>
    )
}