"use client";

import {
  Button,
  ContactContainer,
  ContactSubtitle,
  ContactTitle,
  Form,
  Input,
} from "./contact.styles";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form :)");
  };
  return (
    <ContactContainer id="contact">
      <ContactTitle>Lets Design Together</ContactTitle>
      <ContactSubtitle>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </ContactSubtitle>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          id="yourEmail"
          name="yourEmail"
          placeholder="Enter Your Email"
          required
        />
        <Button type="submit">Contact Me</Button>
      </Form>
    </ContactContainer>
  );
}
