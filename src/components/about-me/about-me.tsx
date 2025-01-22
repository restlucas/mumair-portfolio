"use client";

import {
  AboutMeContainer,
  ImageContainer,
  ProgressBarContainer,
  Progression,
  SkillsList,
} from "./about-me.styles";

const skillsProgress = [95, 80, 85, 90];

export function AboutMe() {
  return (
    <AboutMeContainer id="about-me">
      <ImageContainer $imageSrc={"/man-2.svg"} />
      <div>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>

        <SkillsList>
          <li>
            <p>UX</p>
            <ProgressBarContainer>
              <Progression progress={skillsProgress[0]}>
                <span />
              </Progression>
            </ProgressBarContainer>
          </li>
          <li>
            <p>Website Design</p>
            <ProgressBarContainer>
              <Progression progress={skillsProgress[1]}>
                <span />
              </Progression>
            </ProgressBarContainer>
          </li>
          <li>
            <p>App Design</p>
            <ProgressBarContainer>
              <Progression progress={skillsProgress[2]}>
                <span />
              </Progression>
            </ProgressBarContainer>
          </li>
          <li>
            <p>Graphic Design</p>
            <ProgressBarContainer>
              <Progression progress={skillsProgress[3]}>
                <span />
              </Progression>
            </ProgressBarContainer>
          </li>
        </SkillsList>
      </div>
    </AboutMeContainer>
  );
}
