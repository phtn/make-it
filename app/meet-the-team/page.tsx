"use client";

import { FourFeatureImage } from "@@components/four-features";
import { HeadlineData } from "@@components/hero/types";
import Footer from "@@components/footer";
import { Container, Content } from "./styled";
import dynamic from "next/dynamic";
import { teamData } from "./team-data";
import { Kerrigan } from "../_components/hero/Kerrigan";

const GodRays = dynamic(() => import("@@components/godrays"));

const MeetTheTeam = () => (
  <Container>
    <GodRays />
    <Content>
      <Kerrigan
        title="Meet The Planning Dream Team."
        description="Get to know the people behind the growing movement."
        data={teamData}
        listTitle="The Team"
      />
    </Content>
  </Container>
);

export default MeetTheTeam;
