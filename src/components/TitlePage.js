import React, { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";
// import { setDashoffset } from "animejs";

export default function TitlePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    if (!loading) {
      let timeline = anime.timeline({
        duration: 3000,
        delay: 3000,
      });

      timeline.add({
        targets: [".imageHolder", ".name", ".title"],
        opacity: 1,
        easing: "linear",
        duration: 2000,
        delay: anime.stagger(1000)
      })

      // timeline.add({
      //   targets: ".imageHolder",
      //   opacity: 1,
      //   easing: "linear",
      //   duration: 1000,
      // });
    } else if (loading) {
      anime({
        targets: [".boxOne", ".boxTwo", ".boxThree", ".boxFour"],
        translateY: [
          { value: 200, duration: 500 },
          { value: 0, duration: 800 },
        ],
        loop: true,
        rotate: {
          value: "1turn",
        },
        borderRadius: 50,
        direction: "alternate",
        easing: "easeInOutQuad",
        delay: function () {
          return anime.random(0, 1000);
        },
        elasticity: 200,
      });
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="TitlePage">
        <div id="boxes">
          <h1 margin-bottom="1vh">Loading</h1>
          <div className="boxOne"></div>
          <div className="boxTwo"></div>
          <div className="boxThree"></div>
          <div className="boxFour"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="TitlePage">
        <div className="imageHolder"></div>
        <h1 className="name">Jordan Shaw</h1>
        <h2 className="title">
          Junior <span className="highlight">Developer</span>
        </h2>
      </div>
    );
  }
}
