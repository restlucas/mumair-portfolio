"use client";

import Image from "next/image";
import {
  ServiceCard,
  ServicesCardContainer,
  ServicesContainer,
  ServicesSubtitle,
  ServicesTitle,
} from "./services.styles";

export function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesTitle>Services</ServicesTitle>
      <ServicesSubtitle>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </ServicesSubtitle>

      <ServicesCardContainer>
        <ServiceCard>
          <Image
            alt="Service"
            src={"/assets/ui-ux.svg"}
            style={{ height: "75px", width: "75px" }}
            width={300}
            height={300}
          />
          <h1>UI/UX</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </ServiceCard>
        <ServiceCard>
          <Image
            alt="Service"
            src={"/assets/graphic-design.svg"}
            style={{ height: "75px", width: "75px" }}
            width={300}
            height={300}
          />
          <h1>Web Design </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </ServiceCard>
        <ServiceCard>
          <Image
            alt="Service"
            src={"/assets/app-design.svg"}
            style={{ height: "75px", width: "75px" }}
            width={300}
            height={300}
          />
          <h1>App Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </ServiceCard>
        <ServiceCard>
          <Image
            alt="Service"
            src={"/assets/web-design.svg"}
            style={{ height: "75px", width: "80px" }}
            width={300}
            height={300}
          />
          <h1>Graphic Design </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </ServiceCard>
      </ServicesCardContainer>
    </ServicesContainer>
  );
}
