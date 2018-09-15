import React, {Component} from 'react';

class Nyt extends Component{
    render(){
        return(
            <div>
                <div className="title">
                    <h1 className="search-heading"><u>New York Times Article Scrubber</u></h1>
                    <p>Search for end and annotate articles of interest</p>
                </div>
                <br></br>
                
                <div className="heading">
                    <div className="s-div">Search</div>
                </div>
                <div className="search-container">
                    <p id="s-p">Topics</p>
                    <input type="text" id="topics" className="topics"></input>
                    <p id="s-p">Start Year</p>
                    <input type="text" className="start-year"></input>
                    <p id="s-p">End Year</p>
                    <input type="text" className="end-year"></input>
                    <br></br><br></br>
                    <button className="search-btn" onClick={this.searchbtn}>Search</button>
                </div>
                {/* following div for search result */}
                <div>
                </div>
            
            </div>
            
        );
    }
}
export default Nyt;