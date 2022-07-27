import React, {useContext} from 'react';

import {ThemeContext} from '../../contexts/ThemeContext';

import './Experience.css';

import {experienceData} from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';

import {VerticalTimeline} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {

    const {theme} = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}>
            <div className="experience-body">
                <div className="experience-image">
                    <img src={theme.expimg} alt=""/>
                </div>
                <div className="experience-description">
                    <h1 style={{color: theme.primary}}>Experience</h1>
                    <VerticalTimeline lineColor={theme.tertiary}>
                        {experienceData.map(exp => (
                            <ExperienceCard
                                key={exp.id}
                                id={exp.id}
                                jobtitle={exp.jobtitle}
                                company={exp.company}
                                startYear={exp.startYear}
                                endYear={exp.endYear}/>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Experience
