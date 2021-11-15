import React, { useState } from 'react';
import './CustomForm.css';

const CustomForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        
        setTimeout(() => {
            setSubmitting(false);
        }, 3000);
    }

    return(
        <div className='wrapper'>
            <h1>How About Theme Apples</h1>
            {submitting && 
            <div>Submitting Form...</div>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name='name'/>
                    </label>
                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default CustomForm;