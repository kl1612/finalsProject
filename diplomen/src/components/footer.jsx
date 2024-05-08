import React, { useState } from "react";
import "./footer.css";
import axios from "axios";

export const Footer = () => {

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleForm = () => {
        axios.post("http://localhost:5000/api/postComment", inputs)
        .then(console.log("uploaded comment"))
        .catch((err)=>console.log(err));
    }
    return(
        <footer className="footer">
            <div className="footerTitle">
                Контакти
            </div>
            <div className="footerElements">
                <div className="contacts">
                    Свържете се!
                    <br/>
                    <br/>
                    бул. Витоша №91
                </div>
                <div className="comments">
                    <form  onSubmit={handleForm}>
                        <label className="formLabel">Име:</label><br/>
                        <input className="formComment"type="text" id="name" name="name" onChange={handleChange}/><br/>
                        <label className="formLabel">Email:</label><br/>
                        <input className="formComment" type="text" id="surname" name="surname"onChange={handleChange}/><br/>
                        <label className="formLabel">Коментар:</label><br/>
                        <textarea className="formComment"id="comment" name="comment" rows="2"onChange={handleChange}></textarea><br/>
                        <input className="submiteButton"type="submit" value="Изпращане" ></input>
                    </form>
                </div>
            </div>
        </footer>
    );
}