import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Fade} from "react-awesome-reveal";

import {ThemeContext} from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'
import {VerticalTimelineElement} from "react-vertical-timeline-component";

function EducationCard({id, institution, course, startYear, endYear}) {

    const {theme} = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard: {
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
            contentStyle={{
                background: theme.primary400,
                color: theme.tertiary,
                border: '1px solid',
                borderColor: theme.tertiary
            }}
            contentArrowStyle={{borderRight: '7px solid'}}
            date={startYear}
            dateClassName="date"
            iconStyle={{background: theme.primary400, color: theme.tertiary}}
        >
            <Fade bottom>
                <div key={id} className={`education-card ${classes.educationCard}`}>
                    <div className="educard-img" style={{backgroundColor: theme.primary}}>
                        <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt=""/>
                    </div>
                    <div className="education-details">
                        <h6 style={{color: theme.primary600}}>{startYear}-{endYear}</h6>
                        <h4 style={{color: theme.tertiary}}>{course}</h4>
                        <h6 style={{color: theme.tertiary80}}>{institution}</h6>
                    </div>
                </div>
            </Fade>
        </VerticalTimelineElement>
    )
}

export default EducationCard
