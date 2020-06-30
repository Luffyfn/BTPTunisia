import React,{useState,useEffect} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from "react-redux"

import {NavBar} from '../src/js/components/NavBar'

import {Home} from './js/components/Home'
import {Moe} from './js/components/moe/Moe'
import {Produits} from './js/components/Produits'
import {Services} from './js/components/Services'
import {Login} from './js/components/login/Login'
import {Footer} from './js/components/Footer'
import InscriptionMoe from './js/components/login/InscriptionMoe';
import {addMoe,getMoe} from './js/actions/actionsMoe';
import {loadMoe, registerMoe} from '../src/js/actions/actionAuth';
import {actionError, returnErrors} from '../src/js/actions/actionError'

function App() {

  const [moe,setMoe]= useState({
    login:"",
    pwd:"",
    email:"",
    nom:"",
    prenom:"",
    nom_societe:"",
    adresse:"",
    description:"",
    activite:"",
    msg:null
  })

  const dispatch = useDispatch()

  const addMOE=()=>{
    dispatch(addMoe(moe))
  }

  const handleChange=(e)=>{
        setMoe({...moe,[e.target.name]:e.target.value})
  }    
     
  useEffect(() => {
     
    dispatch(getMoe());
    dispatch(loadMoe());
    dispatch(registerMoe(moe))
     // Check for register error
     const error = dispatch(returnErrors());
     if (error.id === 'REGISTER_FAIL') {
      setMoe({...moe,msg:error.msg.msg});
    } else {
      setMoe({...moe,msg:null});
    }
  
  }, []);

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/moe" component={Moe} />
          <Route path="/Produits" component={Produits} />
          <Route path="/services" component={Services} />
          <Route path="/login" component={Login} />
          <Route path="/inscription-moe" render={()=>(
            <InscriptionMoe 
                moe={moe}
                handleChange={handleChange}
                action={addMOE}/>
          )}/>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
