import React from "react";
import { useState } from "react";
import "./paystyle.css";

export default function Pay({ cart, total }) {
  // State to hold the form values for input fields
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cartOwner: "",
    cartNumber: "",
    mmyy: "",
    cvvcvc: "",
    country: "",
    adress: "",
    city: "",
    zipCode: "",
  });

  // State to keep track of form submission
  const [flag, setFlag] = useState(false);

  // Function to handle form submission
  function handleForm(e) {
    e.preventDefault();
    setFlag(true);
    let count = 0;
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
      if (span.innerHTML.length > 0) {
        count++;
      }
    });

    // Check if all required fields are filled and there is only one error
    const check = Object.values(formValues).filter((i) => {
      if (i === "") return true;
    });

    if (check.length === 0 && count === 1) {
      alert("Thank you for your order");
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cartOwner: "",
        cartNumber: "",
        mmyy: "",
        cvvcvc: "",
        country: "",
        adress: "",
        city: "",
        zipCode: "",
      });
      setFlag(false);
    }
  }

  // Function to update form values when input fields change
  function newValues(e, item) {
    setFormValues({ ...formValues, [item]: e.target.value });
  }

  // Functions to display error messages for each input field
  function Fname() {
    if (formValues.firstName === "") return <span>required</span>;
  }
  function Lname() {
    if (formValues.lastName === "") return <span>required</span>;
  }
  function Email() {
    if (!formValues.email.includes("@") || !formValues.email.includes(".com")) {
      return <span>Invalid Email</span>;
    }
  }
  function Pnumber() {
    if (isNaN(formValues.phoneNumber) || formValues.phoneNumber === false) {
      return <span>Invalid Number</span>;
    }
  }
  function Cowner() {
    if (
      !/^[a-zA-Z ]+$/.test(formValues.cartOwner) ||
      formValues.cartOwner === false
    ) {
      return <span>Invalid Name</span>;
    }
  }
  function Cnumber() {
    if (
      !/^[0-9]+$/.test(formValues.cartNumber) ||
      formValues.cartNumber === false
    ) {
      return <span>Invalid Number</span>;
    }
  }
  function Mmyy() {
    if (formValues.mmyy < 2) return <span>Invalid Date</span>;
  }
  function Cvvcvc() {
    if (!/^[0-9]+$/.test(formValues.cvvcvc) || formValues.cvvcvc.length < 3) {
      return <span>required</span>;
    }
  }
  function Country() {
    if (
      !/^[a-zA-Z ]+$/.test(formValues.country) ||
      formValues.country === false
    ) {
      return <span>required</span>;
    }
  }
  function Adress() {
    if (
      !/^[a-zA-Z0-9 ]+$/.test(formValues.adress) ||
      formValues.adress === false
    ) {
      return <span>required</span>;
    }
  }
  function City() {
    if (!/^[a-zA-Z ]+$/.test(formValues.city) || formValues.city === false) {
      return <span>required</span>;
    }
  }
  function Zipcode() {
    if (!/^[0-9]+$/.test(formValues.zipCode) || formValues.zipCode === false) {
      return <span>required</span>;
    }
  }

  return (
    <div className="all">
      {/* Payment form */}
      <form onSubmit={(e) => handleForm(e)}>
        <div className="divs">
          <div className="erdiv">
            <input
              onChange={(e) => newValues(e, "firstName")}
              value={formValues.firstName}
              placeholder="First name"
            />
            {flag ? <Fname /> : ""}
          </div>
          <div className="erdiv">
            <input
              onChange={(e) => newValues(e, "lastName")}
              value={formValues.lastName}
              placeholder="Last name"
            />
            {flag ? <Lname /> : ""}
          </div>
        </div>
        <div className="erdiv">
          <input
            onChange={(e) => newValues(e, "email")}
            value={formValues.email}
            type="email"
            placeholder="Email"
          />
          {flag ? <Email /> : ""}
        </div>
        <div className="erdiv">
          <input
            onChange={(e) => newValues(e, "phoneNumber")}
            value={formValues.phoneNumber}
            type="tel"
            placeholder="Phone number"
          />
          {flag ? <Pnumber /> : ""}
        </div>
        <div className="erdiv">
          <input
            onChange={(e) => newValues(e, "cartOwner")}
            value={formValues.cartOwner}
            placeholder="Cart owner"
          />
          {flag ? <Cowner /> : ""}
        </div>
        <div className="erdiv">
          <input
            onChange={(e) => newValues(e, "cartNumber")}
            value={formValues.cartNumber}
            type="tel"
            maxLength="19"
            placeholder="Cart number"
          />
          {flag ? <Cnumber /> : ""}
        </div>

        <div className="divs">
          <div className="erdiv">
            <input
              type="month"
              onChange={(e) => newValues(e, "mmyy")}
              value={formValues.mmyy}
              placeholder="MM/YY"
            />
            {flag ? <Mmyy /> : ""}
          </div>
          <div className="erdiv">
            <input
              onChange={(e) => newValues(e, "cvvcvc")}
              value={formValues.cvvcvc}
              maxLength="3"
              placeholder="CVV/CVC"
            />
            {flag ? <Cvvcvc /> : ""}
          </div>
        </div>
        <div className="erdiv">
          <input
            onChange={(e) => newValues(e, "country")}
            value={formValues.country}
            placeholder="Country"
          />
          {flag ? <Country /> : ""}
        </div>
        <div className="erdiv">
          <input
            onChange={(e) => newValues(e, "adress")}
            value={formValues.adress}
            placeholder="Adress"
          />
          {flag ? <Adress /> : ""}
        </div>

        <div className="divs">
          <div className="erdiv">
            <input
              onChange={(e) => newValues(e, "city")}
              value={formValues.city}
              placeholder="City"
            />
            {flag ? <City /> : ""}
          </div>
          <div className="erdiv">
            <input
              onChange={(e) => newValues(e, "zipCode")}
              value={formValues.zipCode}
              placeholder="ZIP code"
            />
            {flag ? <Zipcode /> : ""}
          </div>
        </div>

        {/* Submit button */}
        <button type="submit">Buy</button>
      </form>

      {/* Cart info */}
      <div className="cartInfo">
        {cart.map((i) => {
          return (
            <section key={i.id}>
              <img src={i.src} alt="icon" />
              <p>{i.name}</p>
              <p>{i.price}$</p>
              <p>Quantity: {i.count}</p>
            </section>
          );
        })}
        <h3>Total: {total}$</h3>
      </div>
    </div>
  );
}
