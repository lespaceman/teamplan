import React from 'react'
import ProjectSummery from './ProjectSummary'

function ProjectList({ projects }) {
    console.log(projects)
    return (
        <div className="project-list section">

            { projects && projects.map(project => {
                return (<ProjectSummery project={project} key={project.id} />)
            })
            }

        </div>
    )
}

export default ProjectList