import React from "react";
import reactDOM from "react-dom";
import "./index.css";




const Person =({img,name,job,children}) => {

    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
        <article className="person">
        <img src={url} alt="person" />
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
        </article>
    )
}

const PersonList =() => {

    
    return(
        <section className="person-list">
        
        <Person img="28" name="mohan" job="developer"/>
        <Person img="45" name="jack" job="designer">
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Delectus cum libero error facere eaque? Labore deleniti 
             ad porro accusamus, unde iusto ullam voluptatum magni non 
             voluptates aspernatur ducimus tempora voluptatibus.</p>
        </Person>
        <Person img="62" name="kavi" job="doctor"/>
        </section>
    )
}




reactDOM.render(<PersonList/>,document.getElementById("root"));