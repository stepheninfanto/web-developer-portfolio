  import React, { useState } from 'react';
  // import PropTypes from 'react-proptypes';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    link:"https://stepheninfanto.github.io/",
    ImageSrc:"https://www.goalcast.com/wp-content/uploads/2017/12/Elon-musk-on-hate.jpg",
     title:"Tribute Page"          
    },
    {
      link:"https://codepen.io/stephen-infanto/pen/KKNPrmJ?editors=0100",
      ImageSrc:"https://i01.appmifile.com/webfile/globalimg/products/pc/mi-mix-alpha/index_01.jpg" ,
       title: "My Phone website"    
      },
    
        {
            link:"https://codepen.io/stephen-infanto/pen/WNGLXzz",
            ImageSrc:"https://www.builtinaustin.com/sites/www.builtinaustin.com/files/outboundengine.jpg",
             title: " Employee Work Preference Survey Form",
         },
  
        //  {
        //     link:"https://codepen.io/stephen-infanto/pen/RwoaPQQ",
        //     ImageSrc:"https://cdn.dribbble.com/users/461622/screenshots/10677181/media/3398f89271dc30f09d2f15dc5d31f809.png?compress=1&resize=800x600",
        //     title:"Technical documentation Page",
        //     },
];




// const projectData=[
    
//   {
//   link:"https://stepheninfanto.github.io/",
//   ImageSrc:"https://www.goalcast.com/wp-content/uploads/2017/12/Elon-musk-on-hate.jpg",
//    title:"Tribute Page"          
//   },
//   {
//     link:"https://codepen.io/stephen-infanto/pen/KKNPrmJ?editors=0100",
//     ImageSrc:"https://i01.appmifile.com/webfile/globalimg/products/pc/mi-mix-alpha/index_01.jpg" ,
//      title: "My Phone website"    
//     },
  
//       {
//           link:"https://codepen.io/stephen-infanto/pen/WNGLXzz",
//           ImageSrc:"https://www.builtinaustin.com/sites/www.builtinaustin.com/files/outboundengine.jpg",
//            title: " Employee Work Preference Survey Form",
//        },

//        {
//           link:"https://codepen.io/stephen-infanto/pen/RwoaPQQ",
//           ImageSrc:"https://cdn.dribbble.com/users/461622/screenshots/10677181/media/3398f89271dc30f09d2f15dc5d31f809.png?compress=1&resize=800x600",
//           title:"Technical documentation Page",
//           },

//   ];


const Work = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.ImageSrc}
      >
        <img src={item.ImageSrc} alt={item.title} />
        <CarouselCaption captionText={"A Glimpse of my Work "} captionHeader={item.title} />
      </CarouselItem>
    );
  });

  return (
    <div id="Projects" >
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default Work;

// import React from 'react'

// function Work(props) {   
  
//   console.log(" props in work",props);
//     return (
//         <div>    


//       <section id="projects" className="projects-section">
//             <h2 className="projects-section-header">
//                 These are some of my projects
//             </h2>
    
//       <div className="projects-grid">

//           {props.projectData.map((project,i)=>{
//               return(
//                 <a key={i}
//                 href={project.link} rel="noreferrer"
//                 target="_blank" 
//                 className="project project-tile"
//               >
//                 <img
//                   className="project-image"
//                   src={project.ImageSrc}
//                   alt={"project"+project.title}
//                 />
//                 <p className="project-title">
//                   <span className="code">&lt;</span>
//                    {project.title}
//                   <span className="code">&#47;&gt;</span>
//                 </p>
//               </a>
//               )
//           })}
//       </div>
    
     
//     </section>
    
//         </div>
//     )
// }

// export default Work
