import React, { Component } from 'react';


class Home extends Component
{
    constructor() {
        super();
        
    }    
    
   /* filterData(searchTxt) {
        
       let filterData = this.state.data.filter((item)=> 
                        {
                            return item.name.toLowerCase().indexOf(searchTxt)>-1
        
        });
        this.setState({data:filterData})
          console.log({filterData})
    }*/
    render()
    {  
        return(<>        
         Home          
        </>)
    }
}

export default Home;

//<DisplayProduct data={this.state.data}/>