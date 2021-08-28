import React from 'react'

function About(props) {

    var tech=["React","Angular","Vanilla Js","Node Js"];

   
    return (
        <div>
      <section id="welcome-section" className="welcome-section "> 
         {/* <h1 className="text-"> Hi I am Stephen Infanto, <br/>
         a 24 year old Web developer, and a  Blogger<br/>
           living in Chennai, India. I am a Web Engineer,currently working with great folks.<br/>
           Just connect with me on LinkedIn. 
        I am always excited to do business with  great people , lets discuss over coffee.
       </h1> <br/> <br/> */}
        <h1 id="dev-name1">A web developer who loves to work with </h1><br/> <br/>  
        {tech.map((tec,i)=>{
            return (                
            <p key={i} id="dev-name" className=""> { tec } </p>                
        )})}
     </section>
        </div>
    )
}

export default About;
