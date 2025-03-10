import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PizzaBuilder from './Pizza'
import axios from 'axios'
import schema from './schema'
import * as yup from 'yup'
import './reset.css';
import './App.css'
import Home from './Home.jsx'


const initialData = {
  name: '',
  size: '',
  toppingOne: false,
  toppingTwo: false,
  toppingThree: false,
  toppingFour: false,
  specialInstructions: ''
}

const initialDataErrors = {
  name: '',
  size: '',
  specialInstructions: ''
}


const initialOrder = []

const App = () => {

  const [formValues, setFormValues] = useState(initialData)
  const [newOrder, setNewOrder] = useState(initialOrder)
  const [errors, setErrors] = useState(initialDataErrors)
  const [disabled, setDisabled] = useState(true)

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  useEffect(()=> {
    schema.isValid(formValues).then(valid => {setDisabled(!valid)})
  }, [formValues])

  const change = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  const addPizzaToApi = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        setNewOrder([res.data, ...newOrder])
      })
  }

  const submit = () => {
    const newData = {
      name: formValues.name,
      size: formValues.size,
      toppingOne: formValues.toppingOne,
      toppingTwo: formValues.toppingTwo,
      toppingThree: formValues.toppingThree,
      toppingFour: formValues.toppingFour,
      specialInstructions: formValues.specialInstructions
    }
    addPizzaToApi(newData)
    setFormValues(initialData)
  }



  return (
    <>
      <header className="header">
        <h1>Lambda Eats</h1>
        <Route exact path='/'>
          <Link id='order-pizza' to='/pizza'><button className="headerButton">Order Now</button></Link>
        </Route>
        <Route path='/pizza'>
          <Link to='/'><button className="headerButton">Home</button></Link>
        </Route>
      </header>

      <Route exact path='/'>
        <Home />
      </Route>


      <Route path='/pizza'>
        <PizzaBuilder
          formValues={formValues}
          submit={submit}
          change={change}
          errors={errors}
          disabled={disabled}
        />
      </Route>

    </>
  );
};
export default App;
