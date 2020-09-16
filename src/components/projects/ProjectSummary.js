import React from 'react';

function ProjectSummery( {project}) {
    return (
        <div className="card z-depth-0 project-summery">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Made by the Spaceman</p>
                <p className="grey-text">3rd, September, 2 AM</p>
            </div>
        </div>
    )
}

export default ProjectSummery