import React, { Component } from 'react';


import Cardlist from './card'



const service =()=> {
 
         const data=[
              {
                  img:'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  name:'Ankit Yadav',
                  Job:'Develper'
              },{
                img:'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                name:'Satyam Singh',
                Job:'HR Manager'
              },{
                img:'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                name:'Atul Shukla',
                Job:'Tester'
              }
          ]
      
      
 
    
   
   
   const arr= data.map((Card,i)=>{
        return(
            
            <div className="col-sm">
            <Cardlist img={data[i].img} 
                        name={data[i].name}
                        job={data[i].Job}
                        />
                          </div>
        
        );
    })
   


    
        return (
            <>
            <div className="container">
            <div className="row">
            {arr}
            </div>
        </div>
            </>
        );
    
}
export default service;