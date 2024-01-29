import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
function ProfileCard() {
    return (
        <div className="profile-card__container">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <img
            className="profile-card__img"
            src="profiles-image/profile.avif"
            alt="profile"
        />
    );
}

function Main() {
    return (
        <main className="main">
            <Name />
            <About />
        </main>
    );
}

function Name() {
    return <h2>Alireza Sobhanian</h2>;
}

function About() {
    return (
        <p>
            Front-end developer and UI UX designer. Currently student of
            computer science and working as IT Technician at Mihan Human
            Resource Development Department.
        </p>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <Technology name="HTML 💪" bColor="orange" />
            <Technology name="JavasScript 💪" bColor="yellow" />
            <Technology name="Git , GitHub 💪" bColor="#939393" />
            <Technology name="React 💪" bColor="aqua" />
            <Technology name="SCSS 💪" bColor="#ff45e6" />
            <Technology name="Web Design 💪" bColor="#86FF9F" />
            <Technology name="Svelte 💪" bColor="#935EFF" />
            <Technology name="CPP 💪" bColor="#646AFF" />
        </footer>
    );
}

function Technology(props) {
    return (
        <span
            className="technology-box"
            style={{ backgroundColor: props.bColor }}
        >
            {props.name}
        </span>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <React.StrictMode>
        <ProfileCard />
    </React.StrictMode>
);
