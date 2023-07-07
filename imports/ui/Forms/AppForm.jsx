import React from "react";
import { AddPost } from "../components/AddPost";
import { Posts } from "../components/Posts";
import { useLocation } from "react-router-dom";

export const AppForm = ({props}) => {
    // const search = useLocation();
    // console.log(search.pathname);
    return (
        <div className="app-form">
            <AddPost />
            <Posts />
        </div>
    )
}