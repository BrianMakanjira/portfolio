import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2021 -2022"
        iconStyle={{background : "#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">University of Zimbabwe</h3>
          <p>Bsc Hons Computer Science Faculty of Computer Engineering and Informatics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work"
        date="2021 -2022"
        iconStyle={{background : "#ff5733", color: "#fff"}}
        icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">SADACNET Internet</h3>
          <p>Software Development Intern</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience;