import React from "react";

export default function Pay({cart}){

    console.log(cart)
    return (
        <div>
            <form>
                <div>
                    <input placeholder="First name"/>
                    <input placeholder="Last name"/>
                </div>
                <input type="email" placeholder="Email"/>
                <input type="tel" placeholder="Phone number"/>
                <input placeholder="Cart owner"/>
                <input type="tel" maxlength="19" placeholder="Cart number"/>
                <div>
                    <input placeholder="MM/YY"/>
                    <input placeholder="CVV/CVC"/>
                </div>
                <input placeholder="Country"/>
                <input placeholder="Adress"/>
                <div>
                    <input placeholder="City"/>
                    <input placeholder="ZIP code"/>
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}