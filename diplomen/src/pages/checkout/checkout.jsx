import React, { useContext, useState } from "react";
import './checkout.css';
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Checkout = () => {

    const navigate = useNavigate();
    const {cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
    const total = getTotalCartAmount();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleOrder = (event) => {
        event.preventDefault();
        const entry = {...inputs, cartItems};
        axios.post('http://localhost:5000/api/makeOrder', entry)
        .then(console.log("uploaded order"))
        .catch((err)=>console.log(err));

        navigate('/finishedOrder');
    }

    return(
        <div className="container">
            <h1>Попълнете данните си</h1>
            <p>Дължите общо {total} лв.</p>
            <form  onSubmit={handleOrder}>
                <label className="form">Име:</label><br/>
                <input className="form"type="text" id="name" name="name" onChange={handleChange}/><br/>
                <label className="form">Фамилия:</label><br/>
                <input className="form" type="text" id="surname" name="surname"onChange={handleChange}/><br/>
                <label className="form">Адрес:</label><br/>
                <textarea className="form"id="address" name="address" rows="4"onChange={handleChange}></textarea><br/>
                <input className="form"type="submit" value="Поръчайте!" ></input>
            </form>
        </div>
    );
}