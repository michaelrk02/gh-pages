import React from 'react';
import {marked} from 'marked';

import INTRO from '../content/INTRO.md';
import SKILLS from '../content/skills.json';

const skillsSchema = {
    coding: {
        name: 'Coding Languages',
        subsections: {
            enough: 'Enough practical experience',
            less: 'Less practical experience',
            dsl: 'Domain-Specific Languages (DSL)'
        }
    },
    technologies: {
        name: 'Software Technologies',
        subsections: {
            gui: 'GUI & Systems Programming',
            cg: 'Computer Graphics & Game Development',
            comp: 'Computer Systems',
            web: 'Web Applications'
        }
    }
};

export default class Home extends React.Component {

    render() {
        return (
            <div className="s-container">
                <div className="s-card" style={{margin: '32px 16px', padding: '24px', textAlign: 'center'}}>
                    <h1 style={{textAlign: 'center'}}>Hello, World!</h1>
                    <p dangerouslySetInnerHTML={{__html: marked(INTRO)}}></p>
                </div>
                <div className="s-card" style={{margin: '32px 16px', padding: '24px'}}>
                    <h1 style={{textAlign: 'center'}}>About Me</h1>
                    <div className="s-about-card">
                        <div className="s-about-key">Education</div>
                        <div className="s-about-value">Universitas Sebelas Maret</div>
                    </div>
                    <div className="s-about-card">
                        <div className="s-about-key">Major</div>
                        <div className="s-about-value">Informatics (Bachelor's Degree)</div>
                    </div>
                    <div className="s-about-card">
                        <div className="s-about-key">Batch</div>
                        <div className="s-about-value">2020</div>
                    </div>
                    <div className="s-about-card">
                        <div className="s-about-key">Personality</div>
                        <div className="s-about-value">INTJ-T</div>
                    </div>
                    <div className="s-about-card">
                        <div className="s-about-key">Competencies</div>
                        <div className="s-about-value">IT Consulting and Web Development</div>
                    </div>
                </div>
                <div className="s-card" style={{margin: '32px 16px', padding: '24px'}}>
                    <h1 style={{textAlign: 'center'}}>Skills</h1>
                    {Object.keys(SKILLS).map((section) =>
                        <div style={{marginBottom: '24px'}}>
                            <h3>{skillsSchema[section].name}</h3>
                            <div className="s-skills-card">
                                {Object.keys(SKILLS[section]).map((subsection) =>
                                    <div style={{marginBottom: '16px'}}>
                                        <h5>{skillsSchema[section].subsections[subsection]}</h5>
                                        <div className="s-skills-container">
                                            {SKILLS[section][subsection].map((skill) => <div className="s-skills-item">{skill}</div>)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

