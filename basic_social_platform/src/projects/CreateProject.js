import React, { Component } from 'react'
import { connect } from 'react-redux'
import createProject from '../store/actions/ProjectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: "",
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = e => {
        e.preventDefault(); 
        this.props.createProject(this.state);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props
        if(!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
              <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Express Your Thoughts</h5>
                <div className="input-field">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="content">Body</label>
                  <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <button className="btn light-green lighten-1 z-depth-0">Create Project</button>
                </div>
              </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
