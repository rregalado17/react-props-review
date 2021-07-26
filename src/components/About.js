import React from "react";
import user from "../data/user";
import Links from "./Links";

function About(props) {
    
  // const userbio = user.bio

  // return (
  //   <div id="about">
  //     <h2>About Me</h2>
  //     {userbio === null ? null : <p>{userbio}</p>}
  //     <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  //     <Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/"/>
  //   </div>
  // );
  
  
  if (!props.bio) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/"/>
      </div>
    );
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{user.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={user.links.github} linkedin={user.links.linkedin}/>
      </div>
    );
  }
  // return (
  //   <div id="about">
  //     <h2>About Me</h2>
  //     {/* <p>Put the bio in here</p> */}
  //     <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  //     <Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/"/>
  //   </div>
  // );
}

export default About;
