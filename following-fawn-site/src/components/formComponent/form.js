import React, { Component } from 'react';

//stateless
const Form = props => (
    <div>
        <h2>Form Component</h2>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <button>Get Weather</button>
        </form>
    </div>
);

export default Form;
