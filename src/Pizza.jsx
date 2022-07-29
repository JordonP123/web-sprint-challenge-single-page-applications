import React from 'react'
import { Link } from 'react-router-dom'



const PizzaBuilder = (props) =>{
    const {submit, formValues, change, newOrder,errors} = props


 const onChange = e => {
    const { name, value, checked, type} = e.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
 }


 const onSubmit = e => {
    e.preventDefault()
    submit()
 }

    return(
        <>
        <Link to='/'>Home</Link>
        <h1>Menu</h1>
        
        <form onSubmit={onSubmit} id='pizza-form'>
            {errors.name}
            <label> Name
            <input id='name-input'
            type='text'
            name='name'
            onChange={onChange}
            value={formValues.name}
            />
            </label>

            <label> Pick a size, any size
            <select size={formValues.size} onChange={onChange} name='size' id='size-dropdown'>
                <option>--Pick a size--</option>
                <option value='small'>Small 12"</option>
                <option>Medium 14"</option>
                <option>Large 16"</option>
            </select>
            </label>

            <label>Cheese
                <input
                type='checkbox'
                name='toppingOne'
                value={formValues.toppingOne}
                onChange={onChange}
               
                />
            </label>
            <label>Extra Cheese
                <input
                type='checkbox'
                name='toppingTwo'
                onChange={onChange}
                value={formValues.toppingTwo}
                />
            </label>
            <label>Extra Extra Cheese
                <input
                type='checkbox'
                name='toppingThree'
                onChange={onChange}
                value={formValues.toppingThree}
                />
            </label>
            <label>No Cheese
                <input
                type='checkbox'
                name='toppingFour'
                onChange={onChange}
                value={formValues.toppingFour}
                />
            </label>

            <label>Special Instructions, that we wont read
            <input id='special-text'
            type ='text'
            name='specialInstructions'
            onChange={onChange}
            value={formValues.specialInstructions}
            />
            </label>
            
            <button id='order-button'>Order</button>
        </form>

        {/* {
      newOrder.map(order=>(
        <>
        <div key={order.id}></div>
        <p>
            {order.name}
        </p>
        </>
      ))
      } */}
        </>
    )


}
export default PizzaBuilder