import React from "react"
import "./Customer.css"

export const CustomerCard = ({customer}) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__animal">{customer.animals.map(animal => animal.name + " ")}</div>
        <div className="customer__address">{customer.address}</div>
    </section>
)