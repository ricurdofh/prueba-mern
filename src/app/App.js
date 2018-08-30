import React, { Component } from 'react';
import ColumnComponent from './ColumnComponent';

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts() {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                this.setState({posts: data});
            });
    }

    render() {
        const postsLen = this.state.posts.length;
        return (
            <div style={{paddingTop: '2em'}}>
                <nav className="navbar navbar-dark bg-dark shadow-sm fixed-top">
                    <div className="container">
                        <a className="navbar-brand d-flex align-items-center" href="/">Posts</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <ColumnComponent posts={this.state.posts.slice(0, postsLen / 2)} />
                        <ColumnComponent posts={this.state.posts.slice(postsLen / 2, postsLen)} />
                    </div>
                </div>
            </div>
        )
    }

}
export default App;