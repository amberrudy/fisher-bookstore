import React, { Component } from "react";
import "./Authors.css";
import { AuthorDisplay } from "./AuthorDisplay";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Amber's Life Story",
                    author: "Amber Rudy",
                    isbn: "978-0337432198"
                },
                {
                    id: 4,
                    title: "The Tale of Amber",
                    author: "Amber Roodie",
                    isbn: "978-7382934501"
                },
                {
                    id: 5,
                    title: "Amber and 3610",
                    author: "Rebma Ydur",
                    isbn: "978-0324567123"
                },
                {
                    id: 6,
                    title: "Amber Might Fail This Class",
                    author: "Amber Ydur",
                    isbn: "978-1967301239"
                }
            ]
        };
    }
    render() {
            return (
                <div className="Authors">
                    <div className="lander">
                     <AuthorDisplay authors={this.state.authors} />
                    </div>
                </div>
            );
     }  

}
