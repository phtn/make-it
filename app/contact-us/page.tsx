"use client";

import GodRays from "@@components/godrays";
import { Container, Content } from "./styled";
import { Kerrigan } from "../_components/hero/Kerrigan";
import Footer from "../_components/footer";
import { ContactLocations } from "./locations";

const ContactUs = () => (
  <Container>
    <GodRays />
    <Content>
      <Kerrigan
        title="Our locations"
        description="You can reach us from anywhere in closest to you."
      />
      <ContactLocations />
      <Footer />
    </Content>
  </Container>
);

export default ContactUs;
