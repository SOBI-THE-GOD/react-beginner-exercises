import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast Sobi Pizza CO.</h1>
        </header>
    );
}

function Footer() {
    const cTime = new Date().getHours();
    const isOpen = cTime >= 9 && cTime < 23;
    console.log(cTime);
    return (
        <footer className="footer">
            <div className="order">
                <FooterText isOpen={isOpen} />
                {isOpen && <button className="btn">order</button>}
            </div>
        </footer>
    );
}

function FooterText(props) {
    const text = props.isOpen
        ? "We're open untill 23:00, Come visit us or order online."
        : "Sorry 😟 We're close untill 09:00.";
    return <span>{text}</span>;
}

function Menu() {
    return (
        <main className="menu">
            <h2>our menu</h2>
            <p>
                Authentic Italian cuisine. {pizzaData.length} creative dishes to
                choose from.All from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
                {pizzaData.map((pizza) => {
                    return <Pizza pizza={pizza} key={pizza.name} />;
                })}
            </ul>
        </main>
    );
}

function Pizza({ pizza }) {
    return (
        <li className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut ? "Sold Out!" : pizza.price + "$"}</span>
            </div>
        </li>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
