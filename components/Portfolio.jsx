import React from 'react';

import PROJECTS from '../content/projects.json';

export default class Background extends React.Component {

    render() {
        return (
            <div className="s-container">
                <div className="s-card" style={{margin: '32px 16px', padding: '24px', textAlign: 'center'}}>
                    <h1 style={{textAlign: 'center'}}>Highlighted Projects</h1>
                    <p><i>Have a fun tour!</i></p>
                </div>
                {PROJECTS.projects.map((project) =>
                    <div className="s-card" style={{margin: '32px 16px', padding: '24px'}}>
                        <div className="s-project-image"><img src={'img/' + project.image}/></div>
                        <div className="s-project-header">
                            <div className="s-project-title">{project.name}</div>
                            <div className="s-project-year">{project.year}</div>
                        </div>
                        <div className="s-project-type">{project.type}</div>
                        {(project.organization !== null) &&
                            <div className="s-project-info">
                                <div className="s-project-key">Organization</div>
                                <div className="s-project-value">{project.organization}</div>
                            </div>
                        }
                        {(project.clients !== null) &&
                            <div className="s-project-info">
                                <div className="s-project-key">Clients</div>
                                <div className="s-project-value">
                                    <div className="s-project-enum">{project.clients.map((client) => <div className="s-project-client"><i className="fa fa-tag"></i> {client}</div>)}</div>
                                </div>
                            </div>
                        }
                        <div className="s-project-info">
                            <div className="s-project-key">Roles</div>
                            <div className="s-project-value">
                                <div className="s-project-enum">{project.roles.map((role) => <div className="s-project-role"><i className="fa fa-tag"></i> {role}</div>)}</div>
                            </div>
                        </div>
                        <div className="s-project-info">
                            <div className="s-project-key">Technologies</div>
                            <div className="s-project-value">
                                <div className="s-project-enum">{project.techs.map((tech) => <div className="s-project-tech"><i className="fa fa-tag"></i> {tech}</div>)}</div>
                            </div>
                        </div>
                        <div className="s-project-buttons">
                            <a target="_blank" className="s-button-secondary" href={project.projectURL}><i className="fab fa-github"></i> Go to Project</a>
                        </div>
                    </div>
                )}
            </div>
        );
    }

}

