import React, { Component } from 'react';

export default class ColumnComponent extends Component {
    render() {
        return(
            <div className="col-lg-6">
            {
                this.props.posts.map(post => {
                    return (
                        <div style={{marginTop: '2em'}} key={post._id}>
                            <img className="mr-2 rounded" src={post.image} style={{width: '64px', height: '64px', float: 'left'}}></img>
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray" style={{marginLeft: '80px'}}>
                                <strong className="d-block text-gray-dark">{post.title}</strong>{post.description}</p>
                        </div>
                    );
                })
            }
            </div>
        )
    }
}