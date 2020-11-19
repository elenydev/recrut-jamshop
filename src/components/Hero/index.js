import React from "react"

import HeroBackground from "../../assets/elements/hero_background.svg"
import HeroImage from "../../assets/elements/monitor.svg"
import HeroDecor from "../../assets/elements/hero_decor.svg"

function HomepageHero() {
  return (
    <section>
      <img src={HeroImage} alt="Vector Monitor" />
      <h1>
        Don't waste time
        <br />
        on boring things
      </h1>
      <button>GO EXPLORE</button>
      <img src={HeroBackground} />
    </section>
  )
}

export default HomepageHero
