import React from "react";
import { useState, useRef, useEffect } from "react";
import './paystyle.css'

export default function Pay({cart, total}){

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        cartOwner: '',
        cartNumber: '',
        mmyy: '',
        cvvcvc: '',
        country: '',
        adress: '',
        city: '',
        zipCode: ''
    })

    function handleForm(e){
        e.preventDefault();
    }


    return (

        <div className="all">
            <form onSubmit={(e) => handleForm(e)}>
                <div className="divs">
                    <div className="erdiv">
                        <input onChange={(e) => setFormValues({...formValues, firstName: e.target.value})} value={formValues.firstName} placeholder="First name"/>
                        <span></span>
                    </div>
                    <div className="erdiv">
                        <input onChange={(e) => setFormValues({...formValues, lastName: e.target.value})} value={formValues.lastName} placeholder="Last name"/>
                        <span></span>
                    </div>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => setFormValues({...formValues, email: e.target.value})} value={formValues.email} type="email" placeholder="Email"/>
                    <span></span>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => setFormValues({...formValues, phoneNumber: e.target.value})} value={formValues.phoneNumber} type="tel" placeholder="Phone number"/>
                    <span></span>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => setFormValues({...formValues, cartOwner: e.target.value})} value={formValues.cartOwner} placeholder="Cart owner"/>
                    <span></span>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => setFormValues({...formValues, cartNumber: e.target.value})} value={formValues.cartNumber} type="tel" maxLength="19" placeholder="Cart number"/>
                    <span></span>
                </div>

                <div className="divs">
                    <div className="erdiv">
                        <input onChange={(e) => setFormValues({...formValues, mmyy: e.target.value})} value={formValues.mmyy} placeholder="MM/YY"/>                
                        <span></span>
                    </div>
                    <div className="erdiv">
                        <input onChange={(e) => setFormValues({...formValues, cvvcvc: e.target.value})} value={formValues.cvvcvc} placeholder="CVV/CVC"/>  
                        <span></span>
                    </div>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => setFormValues({...formValues, country: e.target.value})} value={formValues.country} placeholder="Country"/>
                    <span></span>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => setFormValues({...formValues, adress: e.target.value})} value={formValues.adress} placeholder="Adress"/>   
                    <span></span>
                </div>

                <div className="divs">
                    <div className="erdiv">
                        <input onChange={(e) => setFormValues({...formValues, city: e.target.value})} value={formValues.city} placeholder="City"/>
                        <span></span>
                    </div>
                    <div className="erdiv">
                        <input onChange={(e) => setFormValues({...formValues, zipCode: e.target.value})} value={formValues.zipCode} placeholder="ZIP code"/>
                        <span></span>
                    </div>
                </div>
                
                <button type="submit">Buy</button>
            </form>

            <div className="cartInfo">
                {cart.map((i) => {
                    return (
                        <section key={i.id}>
                            <img src={i.src} alt="icon"/>
                            <p>{i.name}</p>
                            <p>{i.price}$</p>
                            <p>Quantity: {i.count}</p>
                        </section>
                    )
                })}
                <h3>Total: {total}$</h3>
            </div>
        </div>
    )
}