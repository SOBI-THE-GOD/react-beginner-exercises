import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const skills = [
    { name: "HTML", level: "advance", bColor: "orange" },
    { name: "JavasScript", level: "advance", bColor: "yellow" },
    { name: "Git , GitHub", level: "advance", bColor: "#939393" },
    { name: "SCSS", level: "advance", bColor: "#ff45e6" },
    { name: "React", level: "intermediate", bColor: "aqua" },
    { name: "Web Design", level: "intermediate", bColor: "#86FF9F" },
    { name: "Svelte", level: "beginner", bColor: "#935EFF" },
    { name: "CPP", level: "beginner", bColor: "#646AFF" },
];

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
            {skills.map((skill) => {
                return <Technology skill={skill} key={skill.name} />;
            })}
        </footer>
    );
}

function Technology({ skill }) {
    return (
        <span
            className="technology-box"
            style={{ backgroundColor: skill.bColor }}
        >
            {skill.name +
                (skill.level === "beginner"
                    ? " 🥉"
                    : skill.level === "intermediate"
                    ? " 🥈"
                    : " 🥇")}
        </span>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <React.StrictMode>
        <ProfileCard />
    </React.StrictMode>
);
