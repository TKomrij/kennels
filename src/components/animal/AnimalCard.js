import { Link } from "react-router-dom"
import React from "react"
import "./Animal.css"


export const AnimalCard= ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name"><Link to={`/animals/detail/${animal.id}`}>
          { animal.name }
        </Link></h3>
        <address className="location__address">{animal.location.name}</address>
        <div className="customer___name">{animal.customer.name}</div>
    </section>
)