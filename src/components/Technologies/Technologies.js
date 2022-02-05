import React from 'react';
import {
  FaRobot,
  FaCode,
  FaTools,
  FaReact,
  FaDatabase,
  FaBrain,
} from 'react-icons/fa';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I made lot of projects during my education where I learnt several
      technologies and approaches. Currently, I am working a with Java for the
      backend, HTML/CSS/Js for the frontend and MySQL/SQL Server for the
      databases.
    </SectionText>
    <List>
      <ListItem>
        <FaReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>jQuery, Bootstrap, React, TypeScript</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Spring, MySQL, SQL Server</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaRobot size="3rem" />
        <ListContainer>
          <ListTitle>Robotics</ListTitle>
          <ListParagraph>µController, AI, Navigation, RTOS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaCode size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Java, HTML, CSS, JavaScript, C, C++, C#, Python, SQL, MATLAB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaTools size="3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Eclipse, VSCode, Git, Jenkins, SonarQube, Azure DevOps
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaBrain size="3rem" />
        <ListContainer>
          <ListTitle>Methods</ListTitle>
          <ListParagraph>Scrum, Functionnal Analysis, SysML</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
