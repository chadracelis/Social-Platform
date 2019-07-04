const initState = {
    projects: [
        {id: 1, title: 'Blah blah blah', content: "Yah yah yah yah"},
        {id: 2, title: 'Boo hoo boo ho', content: "Yee yee yee yee"},
        {id: 3, title: 'Blockah blockah blockah', content: "Yup yup yuppers"}
    ]
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
          console.log('created project', action.project);
          return state;
        case 'CREATE_PROJECT_ERROR':
          console.log('create project error', action.err);
          return state;
        default: 
          return state;
    }
}


export default ProjectReducer