import React from "react";
import { Link } from "react-router-dom";
import NoticeBar from "./NoticeBar";
import Header from "./Header";

export default function Nav(){
    return (
        <div>
            <NoticeBar></NoticeBar>
            <Header></Header>
        </div>
    )
}