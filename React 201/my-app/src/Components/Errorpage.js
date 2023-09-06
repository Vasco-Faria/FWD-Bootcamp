import React from "react";
import Hero from "./Hero";


const Errorpage = () => {

    const ErrorMsg="Error! What you want couldn't be find in here..."

return (
    <>
        <Hero title={ErrorMsg} ></Hero>
    </>
);

}
export default Errorpage;