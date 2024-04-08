import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import InfoPanel from '../info-panel/InfoPanel';
import ExperiencePanel from '../experience-panel/ExperiencePanel';
import SkillPanel from '../skill-panel/SkillPanel';
import EducationPanel from '../education-panel/EducationPanel';
import ProjectTabPanel from '../project-tabpanel/ProjectTabPanel';
import SwipeableViews from 'react-swipeable-views';
import styles from './DetailTabPanel.module.css';
import InfoCard from '../info-card/InfoCard';

class DetailTabPanel extends Component {

    constructor(props) {
        super(props);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { value } = this.state;
        const { theme } = this.props;
        return (
            <div className={styles.tabPanelRoot}>
                <AppBar position="static">
                    <Tabs value={value} variant="fullWidth" onChange={this.handleChange}>
                        <Tab className={styles.tabPanelText} label="Home" />
                        <Tab className={styles.tabPanelText} label="My Experience" />
                        {/* <Tab className={styles.tabPanelText} label="My Skills" />
                        <Tab className={styles.tabPanelText} label="My Personal Projects" /> */}
                    </Tabs>
                </AppBar>
                <SwipeableViews animateHeight={true} className={styles.tabContainer} axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={this.state.value} onChangeIndex={this.handleChangeIndex}>
                    <InfoCard dir={theme.direction}></InfoCard>
                    <ExperiencePanel dir={theme.direction}></ExperiencePanel>
                    {/* <SkillPanel dir={theme.direction}></SkillPanel>
                    <ProjectTabPanel dir={theme.direction}></ProjectTabPanel> */}
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(DetailTabPanel);