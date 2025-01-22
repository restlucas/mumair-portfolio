"use client";

import Link from "next/link";
import FacebookIcon from "../../assets/logos/facebook.svg";
import InstagramIcon from "../../assets/logos/instagram.svg";
import LinkedinIcon from "../../assets/logos/linkedin.svg";
import TwitterIcon from "../../assets/logos/twitter.svg";

import { CardImage, HeroContainer, HeroLinks } from "./hero.styles";

export function Hero() {
  return (
    <HeroContainer id="hero">
      <div>
        <h3>Hi I am</h3>
        <h2>Mohammad Umair</h2>
        <h1>UI & UX</h1>
        <h1>Designer</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>

        <button>Hire Me</button>
      </div>

      <CardImage imagesrc="/man.png">
        <div />
        <HeroLinks>
          <Link href="">
            <FacebookIcon />
          </Link>
          <Link href="">
            <TwitterIcon />
          </Link>
          <Link href="">
            <InstagramIcon />
          </Link>
          <Link href="">
            <LinkedinIcon />
          </Link>
        </HeroLinks>
      </CardImage>
    </HeroContainer>
  );
}
