import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          Hello, my name is Ombasa Abuya, and I am currently living in Nairobi, 
          Kenya. I hold a Bachelor of Science in Information Technology (BSc IT) from Zetech University, 
          which I completed in 2022. Additionally, I have also successfully completed a Software Engineering program at Moringa School.
          My family resides in Kisii.
          During my leisure time, I like to stay active and maintain a healthy lifestyle.
          I enjoy going for long walks with my friend Billy, 
          as well as engaging in small hikes with my friends. Physical fitness is important to me, 
          and I make it a point to incorporate some form of exercise into my daily routine.
          Attending a hot HIIT class is one of my preferred ways to stay fit and energetic.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
