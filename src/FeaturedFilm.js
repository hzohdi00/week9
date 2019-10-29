import React from 'react';

class FeaturedFilm extends React.Component{
    
    render(){
        
        return <>
            <h2>Featured Film</h2>
            <div>{this.props.films[0].name}</div>
            </>;
    }
}

export default FeaturedFilm;