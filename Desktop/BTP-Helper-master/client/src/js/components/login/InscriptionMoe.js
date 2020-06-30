import React from 'react'
import { Form, Button,Alert } from 'react-bootstrap'


function InscriptionMoe({handleChange,action,moe}) {
    return (
        <div>
             <Form className="login-form">
                    
                <Form.Group >
                    <Form.Label>Type</Form.Label>
                    <Form.Control 
                        as="select"  
                        name="type"
                        onChange={handleChange}
                        required 
                    >
                            <option ></option>
                            <option >MOE</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="nom"
                        onChange={handleChange}
                        placeholder="Entrer votre nom" 
                        required 
                    />
                </Form.Group>
                
                <Form.Group controlId="formBasicLast">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="prenom"
                        onChange={handleChange}
                        placeholder="Entrer votre prénom" 
                        required 
                    />
                </Form.Group>
                
                <Form.Group controlId="formBasicLogin">
                    <Form.Label>Login</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="login"
                        onChange={handleChange}
                        placeholder="Entrer votre Login" 
                        required 
                    />
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="pwd"
                        onChange={handleChange}
                        placeholder="Entrer votre password" 
                        required
                    />
                </Form.Group>
                 
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email"
                        onChange={handleChange}
                        placeholder="Entrer votre e-mail" 
                        required 
                    />
                </Form.Group>
                
                <Form.Group controlId="formBasicSociete">
                    <Form.Label>Nom societé</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="nom_societe"
                        onChange={handleChange}
                        placeholder="Entrer votre nom de societé" 
                        required 
                    />
                </Form.Group>
                
                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="adresse"
                        onChange={handleChange}
                        placeholder="Entrer votre adresse" 
                        required
                    />
                </Form.Group>
                
                <Form.Group controlId="formBasicDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        name="description"
                        onChange={handleChange}
                        placeholder="Entrer une description de votre activité" 
                        required 
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Activité</Form.Label>
                    <Form.Control 
                        as="select"  
                        name="activite"
                        onChange={handleChange}
                        required 
                    >
                            <option ></option>
                            <option >Architecture</option>
                            <option >design interieur</option>
                            <option >menuiserie</option>
                    </Form.Control>
                </Form.Group>
            
                <Form.Row className="button-form">                
                    <Button variant="success" type="submit" className="mr-2" onClick={action}>Inscription</Button>       
                </Form.Row>
                        {moe.msg ? <Alert color='danger'>{moe.msg}</Alert> : null}
                    
            </Form>
        </div>
    )
}

export default InscriptionMoe
