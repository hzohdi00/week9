// define the App component

import React from 'react';

import FeaturedFilm from './FeaturedFilm.js';
import FilmList from './FilmList.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        // this constructor method will set up the component when it's created
        
        this.state = {
            films:[
                {name:"social network", genre:"documentary"},
                {name: "john wick", genre: "action"},
                {name: "avengers", genre: "thriller"}
                ]
        }
        // state keeps track of data used by the component
    }
    
    // this render method will be used to output html
    render(){
        
        // returning JSX representation of our content
        // inline styles must be specified using js objects
        // camelCase for javascript style objects
        let headingStyle = {
            color: 'gray',
            backgroundColor: 'lightblue',
            fontFamily: 'helvetica',
            padding: '50px'
        };
        
        // embed JS variables into JSX code using {} 
        // each component should render an <h2> with a heading:
        // example "Featured Film" and "List of All Films"
        return <>
            <h1 style={headingStyle}>{this.props.title}</h1> 
            <p>hi!!!</p> 
            <FeaturedFilm films={this.state.films}/>
            <FilmList films={this.state.films}/>
        </>;
    }
    
}

export default App;
// make App component importable 