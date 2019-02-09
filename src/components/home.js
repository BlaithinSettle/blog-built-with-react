import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Home extends Component {
    render(){
        //console.log(this.props)
        const { posts } = this.props; 
        const postList  = posts.length ? (
            posts.map(post => {
                const displayPostBody=post.body.split(" ").slice(0,15).join(" ").concat("...");
                return (
                    <div className="post card post-intro" key={post.id}>
                        <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title">
                            {post.title}
                            </span>
                            </Link>
                            <p className="post-snippet">{displayPostBody}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts</div>
        )
    return(
        <div className="container">
            <h4 className="center title">My Blog</h4>
            <p>{postList}</p>
        </div>
    )
}
}
//take data from the store and map it to the component props
const mapStateToProps=(state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)