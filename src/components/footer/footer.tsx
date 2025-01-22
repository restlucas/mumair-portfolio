"use client";

import FacebookIcon from "../../assets/logos/facebook.svg";
import InstagramIcon from "../../assets/logos/instagram.svg";
import LinkedinIcon from "../../assets/logos/linkedin.svg";
import TwitterIcon from "../../assets/logos/twitter.svg";

import Image from "next/image";
import {
  FooterContainer,
  FooterContent,
  FooterCopyright,
  FooterLinks,
  FooterLogo,
  FooterNavigation,
} from "./footer.styles";
import Link from "next/link";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
          <Image alt="Mumair logo" src={"/logo.svg"} width={100} height={100} />
          <h1>Mumair</h1>
        </FooterLogo>
        <FooterNavigation>
          <Link href="">Home</Link>
          <Link href="#about-me">About Me</Link>
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact</Link>
        </FooterNavigation>
        <FooterLinks>
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
        </FooterLinks>
      </FooterContent>
      <FooterCopyright>
        <p>
          © 2023 <Link href="">Mumair</Link> All Rights Reserved , Inc.
        </p>
      </FooterCopyright>
    </FooterContainer>
  );
}
