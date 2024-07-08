import React from 'react'
import './CardForm.css'

const CardForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className='name-container'>
                <input type="text" name="firstname" placeholder="First Name"/>
                <input type="text" name="lastname" placeholder='Last Name' />
            </div>
            <input type="text" name='email' placeholder='Email'/>
            <textarea type="type" name="message" placeholder='Message' rows={3}></textarea>

            <button>SEND</button>
        </form>
    </div>
  );
};

export default CardForm;