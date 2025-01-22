"use client";

import Image from "next/image";
import Link from "next/link";

import {
  HeaderContainer,
  Logo,
  LogoName,
  MobileMenu,
  MobileMenuNavigation,
  MobileMenuWrapper,
  MobileNavigation,
  Navigation,
} from "./header.styles";
import MenuIcon from "../../assets/menu.svg";
import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <Logo>
        <Image alt="Mumair logo" src={"./logo.svg"} width={50} height={50} />
        <LogoName>Mumair</LogoName>
      </Logo>

      <Navigation>
        <ul className="flex items-center justify-end gap-3">
          <li>
            <Link href="#home" className="px-[14px] py-[10px]">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about-me" className="px-[14px] py-[10px]">
              About Me
            </Link>
          </li>
          <li>
            <Link href="#services" className="px-[14px] py-[10px]">
              Services
            </Link>
          </li>
          <li>
            <Link href="#projects" className="px-[14px] py-[10px]">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="px-[14px] py-[10px]">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#contact" className="px-[14px] py-[10px]">
              Contact
            </Link>
          </li>
        </ul>
        <button type="button">Download CV</button>
      </Navigation>

      <MobileNavigation onClick={() => setShowMenu(true)}>
        <MenuIcon />
      </MobileNavigation>

      {showMenu && (
        <MobileMenuWrapper>
          <MobileMenu>
            <MobileMenuNavigation>
              <ul>
                <li>
                  <Link href="">Home</Link>
                </li>
                <li>
                  <Link href="#about-me" onClick={() => setShowMenu(false)}>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="#services" onClick={() => setShowMenu(false)}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects" onClick={() => setShowMenu(false)}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" onClick={() => setShowMenu(false)}>
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contacts" onClick={() => setShowMenu(false)}>
                    Contacts
                  </Link>
                </li>
              </ul>

              <button type="button">Download CV</button>
            </MobileMenuNavigation>
          </MobileMenu>
        </MobileMenuWrapper>
      )}
    </HeaderContainer>
  );
}
