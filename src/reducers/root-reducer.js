
const initState={
    posts: [
        {id: '1', title: 'Changing careers' , body:'Whilst working as a primary school teacher I found a love for teaching Computing- in particular teaching the programming language Scratch. I dedicated evenings, weekends and school holidays to learning how to program. I used fantastic online resources including FreeCodeCamp and Codecadamy. I started attending meetups around London to learn more about the industry (from small startups to tech giants) and to meet others to discuss web development and work on projects.'},
        {id: '2', title: 'Study, study, study', body: 'Once finishing my job I dedicated the next four months to learning  coding full time and building an online portfolio. This was mainly through CodePen as well as GitHub. I was able to attend workshops that promoted women working in tech (these included TechKnowDay and a Vue workshop). '},
        {id: '3', title: 'Landing my first developer job', body:'Once I felt confident with my online portfolio and coding knowledge I began applying for junior roles and internships. Following interviews, I landed my first job working as a junior developer and absolutely love it! I am mainly working on front end (developing my HTML, CSS and JavaScript skills) as well as learning about back end databases (including ASP). I am continuing to work on projects outside of work, keeping up to date with developments and relevant issues in the world of technology and learning how to write clean, accessible code. '}
    ]
}

const rootReducer = (state = initState, action) =>{
    if (action.type === 'DELETE_POST'){

        console.log(action.id)

        let newPosts = state.posts.filter(post => {
            return action.id !== post.id

        });
      return {
          ...state,
        posts: newPosts
      }     
    }
    return state;
}

export default rootReducer