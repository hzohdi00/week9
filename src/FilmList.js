import React from 'react';

class FilmList extends React.Component{
    
    render(){
        
        return <>
            <h2>List of All Films</h2>
            <ul>
                {this.props.films.map((film,index)=> {
                    return <li key={index}>{film.name}</li>;
                })}
            </ul>
            </>;
    }
}

export default FilmList;