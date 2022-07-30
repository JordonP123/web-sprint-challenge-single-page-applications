import React from 'react'
import { Link } from 'react-router-dom'



const PizzaBuilder = (props) =>{
    const {submit, formValues, change, disabled ,errors} = props


 const onChange = e => {
    const { name, value, checked, type} = e.target
    const valueToUse =  type === 'checkbox' ? checked : value;
    change(name, valueToUse)
 }


 const onSubmit = e => {
    e.preventDefault()
    submit()
 }

    return(
        <>

        <form onSubmit={onSubmit} id='pizza-form'>
        <div className='formContainer'>
            
            <label><div className='name'>Enter your name: </div>
            <input id='name-input'
            type='text'
            name='name'
            placeholder='Name'
            onChange={onChange}
            value={formValues.name}
            />
            <div className="error">{errors.name}</div>
            </label>

            <label className='size'> <div className='sizeText'>Pick a size, any size</div>
            <select value={formValues.size} onChange={onChange} name='size' id='size-dropdown'>
                <option className='dropdown' value=''>--Pick a size--</option>
                <option className='dropdown' value='Small 12 inch'>Small 12"</option>
                <option className='dropdown' value='Medium 14 inch'>Medium 14"</option>
                <option className='dropdown' value ='Large 16 inch'>Large 16"</option>
            </select>
            </label>

            <div className='cboxTitle'>Select your toppings</div>
            <div className='cboxContainer'>
                
            <label className='cbox cbox1'>Cheese
                <input
                type='checkbox'
                name='toppingOne'
                checked={formValues.toppingOne}
                onChange={onChange}
               
                />
            </label>
            <label className='cbox cbox2'>Extra Cheese
                <input
                type='checkbox'
                name='toppingTwo'
                onChange={onChange}
                checked={formValues.toppingTwo}
                />
            </label>
            <label className='cbox cbox3'>Extra Extra Cheese
                <input
                type='checkbox'
                name='toppingThree'
                onChange={onChange}
                checked={formValues.toppingThree}
                />
            </label>
            <label className='cbox cbox4'>No Cheese
                <input
                type='checkbox'
                name='toppingFour'
                onChange={onChange}
                checked={formValues.toppingFour}
                />
            </label>
            </div>

            <label><div className='specialInstructions'>Special Instructions, that we wont read</div>
            <input id='special-text'
            type ='text'
            name='specialInstructions'
            placeholder='Anything else you want to attempt to add mwuahahahah'
            onChange={onChange}
            value={formValues.specialInstructions}
            />
            </label>
            
            <button disabled={disabled} className='formButton' id='order-button'>Submit your order</button>
            </div>

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