import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="MERN stack developer"
            date="2022 — Present"
            description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
          />
          <TimelineItem
            title="Front-end developer"
            date="2020 — 2022"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            title="Web designer"
            date="2019 — 2020"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Html" value={80} />
          <SkillItem title="Css" value={70} />
          <SkillItem title="Tailwind Css" value={80} />
          <SkillItem title="Bootstrap" value={60} />
          <SkillItem title="JavaScript" value={70} />
          <SkillItem title="React" value={75} />
          <SkillItem title="Node Js" value={70} />
          <SkillItem title="Express Js" value={75} />
          <SkillItem title="MongoDB" value={60} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
