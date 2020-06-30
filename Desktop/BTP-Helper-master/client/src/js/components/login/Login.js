import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {Link} from "react-router-dom"

export function Login() {
    return (
        <div>
            <Form className="login-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Login</Form.Label>
                    <Form.Control type="text" placeholder="Entrer votre login" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Entrer votre password" required/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select"  required >
                        <option ></option>
                        <option >MOE</option>
                    </Form.Control>
                </Form.Group>
                <Form.Row className="button-form">      
                <Link to="/inscription-moe">          
                    <Button variant="success" type="submit" className="mr-2" >Créer un compte</Button>
                </Link>
                    <Button variant="primary" type="submit" className="mr-4" >Login</Button>                   
                </Form.Row>
            </Form>
        </div>
    )
}


