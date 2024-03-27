import React from "react"
import profile from "../assets/avatar.png";


export default function Info() {
    return (
        <section className="info-section">
        <img src={profile} className="profile-pic" alt="Avatar of Vorleak"></img>
            <h1 className="name">Vorleak Hok</h1>
            <h3 className="role">Frontend Developer</h3>
            <a href="https//www.longvorleak.com" className="personal-website" alt="portfolio website" onClick={handleLinkClick}>www.longvorleak.com</a>
            <div className="button-container">
            <a href="mailto:longvorleak@gmail.com" className="email"><button className="email-button"><i class="fa-solid fa-envelope" ></i> Email</button></a>
            <a href="https://www.linkedin.com/in/longvorleak/" className="linkedin" alt="LinkedIn website" onClick={handleLinkClick}>
            <button className="linkedin-button"><i class="fa-brands fa-linkedin"></i> LinkedIn</button></a>
            </div>
        </section>
    )
}

const handleLinkClick = (event) => {
    event.preventDefault(); // Stop the default navigation
  
    // Open the link in a new tab with desired features (optional)
    window.open(event.target.href, '_blank', 'noopener,noreferrer');
  };