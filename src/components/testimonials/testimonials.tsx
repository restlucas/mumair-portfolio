"use client";

import { useEffect, useState } from "react";
import {
  Button,
  ButtonWrapper,
  Card,
  Carousel,
  TestimonialsContainer,
  TestimonialsSubtitle,
  TestimonialsTitle,
  UserComment,
  UserInfo,
  UserPhoto,
  Wrapper,
} from "./testimonials.styles";

export const Testimonials = () => {
  const totalCards = 4;
  const [screenSize, setScreenSize] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateScreenSize = () => setScreenSize(window.innerWidth);

      updateScreenSize();
      window.addEventListener("resize", updateScreenSize);
      return () => window.removeEventListener("resize", updateScreenSize);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 3500);

    return () => clearInterval(interval);
  }, [totalCards]);

  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsTitle>Testimonials</TestimonialsTitle>
      <TestimonialsSubtitle>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </TestimonialsSubtitle>

      <Carousel>
        <Wrapper $index={currentIndex} $screenSize={screenSize}>
          {Array.from({ length: totalCards }).map((_, index) => {
            return (
              <Card selected={currentIndex === index} key={index}>
                <UserPhoto $imageSrc="/testimonial.jpg" />
                <UserComment>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                    accumsan. Id leo urna velit neque mattis id tellus arcu
                    condimentum. Augue dictum dolor elementum convallis
                    dignissim malesuada commodo ultrices.
                  </p>
                </UserComment>
                <UserInfo>
                  <span>Name</span>
                  <span>CEO</span>
                </UserInfo>
              </Card>
            );
          })}
        </Wrapper>
      </Carousel>

      <ButtonWrapper>
        {Array.from({ length: totalCards }).map((_, index) => (
          <Button
            key={index}
            selected={index === currentIndex}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </ButtonWrapper>
    </TestimonialsContainer>
  );
};
