import React from 'react'
import moment from 'moment' // used to reformat date

const ProjectSummary = ({project}) => {
    return (
        <div>
          <div className="card z-depth-0 project-summary projectCard">
            <div className="card-content grey-text text-darken-3">
              <span className="card-title">{project.title}</span>
              <p>Posted By {project.authorFirstName} {project.authorLastName} </p>
              <p className="grey-text"> {moment(project.createdAt.toDate().toString()).calendar()} </p>
            </div>
          </div>
        </div>
    )
}

export default ProjectSummary