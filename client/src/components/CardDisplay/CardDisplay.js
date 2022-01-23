import React from 'react'
import { Container } from "react-bootstrap"
import Card from '../Card/Card'

function CardDisplay({animals}) {

    return (
        <div className="card-display">
            <Container className="card-display-container">
                {animals?.map(animal => {
                    return <Card animal={animal} />
                })}
            </Container>
        </div>
    )
}

export default CardDisplay
