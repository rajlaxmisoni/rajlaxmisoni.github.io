import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Fade} from "react-awesome-reveal";

import {ThemeContext} from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

import {VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function ExperienceCard({id, company, jobtitle, startYear, endYear}) {

    const {theme} = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();


    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: theme.primary400, color: theme.tertiary, border: '1px solid', borderColor: theme.tertiary }}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date={startYear}
            dateClassName="date"
            iconStyle={{ background: theme.primary, color: theme.tertiary }}
        >
            <Fade bottom>
                <div key={id} className={`experience-card ${classes.experienceCard}`}>
                    <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                        <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt=""/>
                    </div>
                    <div className="experience-details">
                        <h6 style={{color: theme.primary600}}>{startYear}-{endYear}</h6>
                        <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                        <h6 style={{color: theme.tertiary80}}>{company}</h6>
                    </div>
                </div>
            </Fade>
        </VerticalTimelineElement>
    )
}

export default ExperienceCard
