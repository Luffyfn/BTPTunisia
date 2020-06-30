import React from 'react'
import {Card} from 'react-bootstrap'

function MoeCard({moe}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title>{moe.activite}</Card.Title>
            <Card.Body>
                <Card.Title>{moe.nom_societe}</Card.Title>
                <Card.Text>{moe.description}</Card.Text>
                <Card.Text>{`${moe.nom} ${moe.prenom}`}</Card.Text>
                <Card.Text>{moe.email}</Card.Text>
                <Card.Text>{moe.adresse} </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MoeCard;
