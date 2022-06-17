import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

function isEmpty(value) {
   return value.trim() === ''
}
function validadePostCode(value) {
   return value.trim().length === 8
}

const Checkout = (props) => {
   const [formInputValidity, setformInputValidity] = useState({
      name: true,
      street: true,
      postalCode: true,
      city: true
   });

   const nameInputRef = useRef()
   const streetInputRef = useRef()
   const postalCodeInputRef = useRef()
   const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostalCode = postalCodeInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredPostalCodeIsValid = validadePostCode(enteredPostalCode)
    const enteredCityIsValid = !isEmpty(enteredCity)

    setformInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid
    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid

    if (!formIsValid) {

    }

  }

  const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`
  const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`
  const postalControlClasses = `${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`
  const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef}/>
        {!formInputValidity.postalCode && <p>Please enter a valid code (8 numbers).</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
      </div>
      {!formInputValidity.city && <p>Please enter a valid city.</p>}
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;