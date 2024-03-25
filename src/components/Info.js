import React from "react"

export default function Info() {
    return (
        <section className="info-section">
        <img src="../assets/avatar.png" className="profile-pic" alt="Avatar of Vorleak"></img>
            <h1 className="name">Vorleak Hok</h1>
            <h3 className="role">Frontend Developer</h3>
            <a href="https//www.longvorleak.com" className="personal-website" alt="portfolio website">www.longvorleak.com</a>
            <div className="button-container">
            <a href="mailto:longvorleak@gmail.com" className="email"><button className="email-button"><i class="fa-solid fa-envelope" ></i> Email</button></a>
            <a href="https://www.linkedin.com/in/longvorleak/" className="linkedin" alt="LinkedIn website">
            <button className="linkedin-button"><i class="fa-brands fa-linkedin"></i> LinkedIn</button></a>
            </div>
        </section>
    )
}