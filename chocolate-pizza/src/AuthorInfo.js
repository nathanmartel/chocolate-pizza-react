import React, { Component } from "react";

export default class AuthorInfo extends Component {
    render() {
        return (
            <div className="author-share">
                <div className="author">
                    <img src="van-pic.png" alt="" />
                    <div>
                        <h4>Vanessa Stevenson</h4>
                        <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                    </div>
                </div>
                <div className="share-recipe">
                    <button>Share Recipe</button>
                </div>
            </div>

            );
    }
}
