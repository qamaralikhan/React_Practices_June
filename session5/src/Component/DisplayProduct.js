import React, { Component, PureComponent } from 'react';
import JsonData from './db.json'


class DisplayProduct extends Component {

    constructor()
    {
        super()
             this.state={data:JsonData}        
    }

    DisplayData =()=> 
    {  
        const result =  this.state.data.map((items) => {
            return(
                <>
                <div className='container px-4' >
                        <p className="card-text">id: {items.id}</p>
                        <p className="card-text">brand:{items.brand}</p>
                        <p className="card-text">discount:{items.discount}</p>
                        <p className="card-text">uses:{items.form}</p>
                        <p className="card-text">name:{items.uses}</p>
                        <p className="card-text">name:{items.name}</p>
                </div>
                </>
                )
            });  
        return result;
    }

    searchData =(event)=> 
    {       
        //Get result 
        console.log(event)
        let searchTxt  = event.target.value;

        if (searchTxt =="") 
        {
            this.setState({data:JsonData})  
        }
        else
        {
            const output =  this.state.data.filter(items => items.id==searchTxt);  
            //return result 
            this.setState({data:output})  
            console.log(`filter ${JSON.stringify(output)}`)    
        }
    }

    render()
    {     
        return(        
                <>     
                    <div className="jumbotron"><h1 align="center">Product</h1>
                    <div className="input-group">
                    <span className="label label-default">Search</span> 
                    <input type="text" className="form-control" align="center" 
                        width="25" placeholder="Search for..." onChange={this.searchData}/>
                    </div>
                    </div>
                    {this.DisplayData()}
                </>
            )
    }
}

export default DisplayProduct;


/* searchData =()=> 
    {
        //Get result 
     const result =  this.props.data.filter((items)=>{
         return(
             <>
             <div className='container px-4'>
                    <p className="card-text">{items.id}</p>
                    <p className="card-text">{items.Brand}</p>
                    <p className="card-text">{items.discount}</p>
                    <p className="card-text">{items.form}</p>
                    <p className="card-text">{items.uses}</p>
                    <p className="card-text">{items.name}</p>
            </div>
            </>
            )
        });  
        //return result   
        return result;
    }*/