import React from "react";
import { useState, useRef, useEffect } from "react";
import './paystyle.css'

export default function Pay({cart, total}){

    
    return (
        <div className="all">
            <form>
                <div className="divs">
                    <div className="erdiv">
                        <input placeholder="First name"/>
                        <span></span>
                    </div>
                    <div className="erdiv">
                        <input placeholder="Last name"/>
                        <span></span>
                    </div>
                </div>
                <div className="erdiv">
                    <input type="email" placeholder="Email"/>
                    <span></span>
                </div>
                <div className="erdiv">
                    <input type="tel" placeholder="Phone number"/>
                    <span></span>
                </div>
                <div className="erdiv">
                    <input placeholder="Cart owner"/>
                    <span></span>
                </div>
                <div className="erdiv">
                    <input type="tel" maxlength="19" placeholder="Cart number"/>
                    <span></span>
                </div>

                <div className="divs">
                    <div className="erdiv">
                        <input placeholder="MM/YY"/>                
                        <span></span>
                    </div>
                    <div className="erdiv">
                        <input placeholder="CVV/CVC"/>  
                        <span></span>
                    </div>
                </div>
                <div className="erdiv">
                    <input placeholder="Country"/>
                    <span></span>
                </div>
                <div className="erdiv">
                    <input placeholder="Adress"/>   
                    <span></span>
                </div>

                <div className="divs">
                    <div className="erdiv">
                        <input placeholder="City"/>
                        <span></span>
                    </div>
                    <div className="erdiv">
                        <input placeholder="ZIP code"/>
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