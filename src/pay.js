import React from "react";
import { useState } from "react";
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
        let count = 0;
        const spans = document.querySelectorAll('span')
        spans.forEach((span) => {
            if (span.innerHTML.length > 0){
                count ++;
            }
        })
        if (count == 1){
            alert('Thank you for your order')
            setFormValues({
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
        }
    }

    function newValues(e, item){
        setFormValues({...formValues, [item]: e.target.value})
    }

    function handleEmail(){
        const mail = [...formValues.email]
        if(mail.includes('@')){
            return true
        }
        else {
            return false
        }
    }

     return (

        <div className="all">
            <form onSubmit={(e) => handleForm(e)}>
                <div className="divs">
                    <div className="erdiv">
                        <input onChange={(e) => newValues(e, 'firstName')} value={formValues.firstName} placeholder="First name"/>
                        <span>{formValues.firstName == '' ? 'required' : ''}</span>
                    </div>
                    <div className="erdiv">
                        <input onChange={(e) => newValues(e, 'lastName')} value={formValues.lastName} placeholder="Last name"/>
                        <span>{formValues.lastName == '' ? 'required' : ''}</span>
                    </div>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => newValues(e, 'email')} value={formValues.email} type="email" placeholder="Email"/>
                    <span>{handleEmail() == false ? 'Invalid Email' : ''}</span>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => newValues(e, 'phoneNumber')} value={formValues.phoneNumber} type="tel" placeholder="Phone number"/>
                    <span>{isNaN(formValues.phoneNumber) || formValues.phoneNumber == false ? 'Not A number' : ''}</span>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => newValues(e, 'cartOwner')} value={formValues.cartOwner} placeholder="Cart owner"/>
                    <span>{!/^[a-zA-Z ]+$/.test(formValues.cartOwner) || formValues.cartOwner == false ? 'Invalid name' : ''}</span>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => newValues(e, 'cartNumber')} value={formValues.cartNumber} type="tel" maxLength="19" placeholder="Cart number"/>
                    <span>{!/^[0-9]+$/.test(formValues.cartNumber) || formValues.cartNumber == false ? 'Invalid Number' : ''}</span>
                </div>

                <div className="divs">
                    <div className="erdiv">
                        <input type="month" onChange={(e) => newValues(e, 'mmyy')} value={formValues.mmyy} placeholder="MM/YY"/>                
                        <span>{formValues.mmyy < 2 ? 'required' : ''}</span>
                    </div>
                    <div className="erdiv">
                        <input onChange={(e) => newValues(e, 'cvvcvc')} value={formValues.cvvcvc} maxLength="3" placeholder="CVV/CVC"/>  
                        <span>{!/^[0-9]+$/.test(formValues.cvvcvc) || formValues.cvvcvc.length < 3 ? 'required' : ''}</span>
                    </div>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => newValues(e, 'country')} value={formValues.country} placeholder="Country"/>
                    <span>{!/^[a-zA-Z ]+$/.test(formValues.country) || formValues.country == false ? 'Invalid country' : ''}</span>
                </div>
                <div className="erdiv">
                    <input onChange={(e) => newValues(e, 'adress')} value={formValues.adress} placeholder="Adress"/>   
                    <span>{!/^[a-zA-Z0-9 ]+$/.test(formValues.adress) || formValues.adress == false ? 'Invalid adress' : ''}</span>
                </div>

                <div className="divs">
                    <div className="erdiv">
                        <input onChange={(e) => newValues(e, 'city')} value={formValues.city} placeholder="City"/>
                        <span>{!/^[a-zA-Z ]+$/.test(formValues.city) || formValues.city == false ? 'Invalid country' : ''}</span>
                    </div>
                    <div className="erdiv">
                        <input onChange={(e) => newValues(e, 'zipCode')} value={formValues.zipCode} placeholder="ZIP code"/>
                        <span>{!/^[0-9]+$/.test(formValues.zipCode) || formValues.zipCode == false ? 'Invalid Zip code' : ''}</span>
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