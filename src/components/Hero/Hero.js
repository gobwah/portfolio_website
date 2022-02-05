import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Vincent's Portfolio
      </SectionTitle>
      <SectionText>
        My name is Vincent Della Libera and I am a web developer.
      </SectionText>
      <Button onClick={() => (window.location = '#about')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
