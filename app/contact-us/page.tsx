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
      <div className="mt-[100px] md:mt-0 overflow-y-scroll">
        <Kerrigan
          title="Our locations"
          description="You can reach us from anywhere in closest to you."
        />
      </div>
      <ContactLocations />
      <Footer />
    </Content>
  </Container>
);

export default ContactUs;
