import React, { useEffect } from "react";
import "./Home.css";
// This imports the required JS for the parallax to work
// import HomeJS from "./HomeJS";

// This is all the images for the parallax
import Cloud1 from "./GrandCanyon/cloud_01.png";
import Cloud2 from "./GrandCanyon/cloud_02.png";
import Foreground from "./GrandCanyon/Foreground.png";
import Rock1 from "./GrandCanyon/rock_01.png";
import Rock2 from "./GrandCanyon/rock_02.png";

// These are imported images for the overview
import KeyinLogo from "./Images/keyin.png";
import WATCCode from "./Images/WATCCode.png";
import WATC from "./Images/WATC.png";

export default function Home() {
  // This function says on scroll
  useEffect(() => {
    const scrollListener = (e) => {
      let text = document.querySelector("#text") || {};
      let cloud1 = document.querySelector("#cloud1") || {};
      let cloud2 = document.querySelector("#cloud2") || {};
      let rock1 = document.querySelector("#rock1") || {};
      let header = document.querySelector(".Content") || {};
      let btn = document.querySelector("#btn") || {};

      e.preventDefault();
      text.style = text.style || {};
      cloud1.style = cloud1.style || {};
      cloud2.style = cloud2.style || {};
      rock1.style = rock1.style || {};
      header.style = header.style || {};
      btn.style = btn.style || {};
      let scrollValue = window.scrollY;

      // make .text style from the top change with formula from scrollValue

      // text.style.top = 50 + scrollValue * -0.25 + "%";

      // cloud1.style.top = scrollValue * -0.5 + "px";
      // cloud1.style.left = scrollValue * -0.5 + "px";

      // cloud2.style.top = scrollValue * -0.5 + "px";
      // cloud2.style.left = scrollValue * 2 + "px";

      // rock1.style.top = scrollValue * 0.25 + "px";

      // header.style.top = scrollValue * 0.5 + "px";

      // btn.style.marginTop = scrollValue * 1.5 + "px";
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  // This display's the slides and activates a dot depending on slideIndex number

  // These automate's the slideshow so it will move to the next slide after 4 seconds

  return (
    <div class="Content">
      <section>
        <h2 id="text">
          <span>Let's go on an </span>
          <br />
          Adventure
        </h2>
        <img src={Cloud1} id="cloud1" />
        <img src={Rock1} id="rock1" />
        <img src={Cloud2} id="cloud2" />
        <div id="btn">
          <a href="https://www.facebook.com/wesley.squire/" id="facebook">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://www.instagram.com/gibbyz_w/" id="insta">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
        <img src={Rock2} id="rock2" />
        <img src={Foreground} id="foreground" />
      </section>
      <div class="sec">
        <h2>Overview</h2>
        <p>
          <div>
            <div>
              <span>
                I am currently a student enrolled in semester 2 at Keyin
                College, and a KPM (Keyin Peer Mentor). This is essentially a
                tutor for firt semester students. I truly love what I do as a
                Software Developer.
              </span>
              <br />
              <img src={KeyinLogo} />
            </div>
          </div>
        </p>
        <h2>Favourite Working's</h2>
        <p>
          <div class="slideContainer">
            <div class="mySlides fade">
              <div class="clip clip1">
                <div class="text">
                  <h4>This is the code behing the website!</h4>
                </div>
              </div>
              <div class="clip clip2">
                <div class="text">
                  <h4>
                    This website is the first website I made that manipulated a
                    DOM and required heavily on JS.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="slideContainer">
            <div class="mySlides fade">
              <div class="clipv3 clip3">
                <div class="text">
                  This website is the first website made using an API. This the
                  very first website I created on my own!
                </div>
              </div>
            </div>
            <div class="clipv3 clip4">
              <div class="text">
                <h4>Here is a popup I made!</h4>
              </div>
            </div>
            <div class="clipv3 clip5">
              <div class="text">
                <h4>This is the code behing the website!</h4>
              </div>
            </div>
          </div>
        </p>
      </div>
      <footer>
        <a href="https://www.freepik.com/vectors/background">
          Background vector created by upklyak - www.freepik.com
        </a>
      </footer>
    </div>
  );
}
