import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  HeaderContainer,
  Logo,
  LogoName,
  MobileMenuWrapper,
  MobileMenu,
  MobileMenuNavigation,
  DesktopNavigation,
  MobileNavigation,
} from "./header.styles";
import MenuIcon from "../../assets/menu.svg";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  const closeMenu = () => setShowMenu(false);

  return (
    <HeaderContainer>
      <Logo>
        <Image alt="Mumair logo" src="/logo.svg" width={50} height={50} />
        <LogoName>Mumair</LogoName>
      </Logo>

      <DesktopNavigation>
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
      </DesktopNavigation>

      <MobileNavigation onClick={toggleMenu}>
        <MenuIcon />
      </MobileNavigation>

      {showMenu && (
        <MobileMenuWrapper>
          <MobileMenu>
            <MobileMenuNavigation>
              <ul>
                <li>
                  <Link href="#home" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about-me" onClick={closeMenu}>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="#services" onClick={closeMenu}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects" onClick={closeMenu}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" onClick={closeMenu}>
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contacts" onClick={closeMenu}>
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
