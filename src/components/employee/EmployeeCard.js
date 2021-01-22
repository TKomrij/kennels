import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="emplyee__name">{employee.name}</h3>
        <div className="employee__address">{employee.location.name}</div>
    </section>
)