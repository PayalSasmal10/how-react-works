import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("DemoOutput Running");
    return <MyParagraph> {props.show ? 'This is new!' : ''} </MyParagraph>;
};
export default DemoOutput;