import React, { Component } from 'react'
import './todo.css'
import './styling.css'
class IncomeTax extends Component {
  constructor(props) {
    super(props)  
    this.state = {  
       Income: '',  
       Age: '',  
       newregimetax:" 0",  
       oldregimetax:"0",   
    }  
  }  
  incomeHandler=(event)=>{  
    this.setState({  
      Income:event.target.value  
    })  
  }  
  ageHandler=(event)=>{  
    this.setState({  
      Age:event.target.value  
    })  
  }  
  apiHandler=(event)=>{ 
    this.setState({ 
      AdvancePayableIncome:event.target.value 
    }) 
  } 
  tdsHandler=(event)=>{
    this.setState({ 
      TDS:event.target.value 
    }) 
  } 
  taxHandler=(event)=>{  
    this.setState({  
      tax:event.target.value  
    })  
  }  
  //NEW REGIME CODE 
  newclickHandler=(event)=>{  
    var newtaxregime=0;  
    let age=this.state.Age; 
    let income=this.state.Income;   
    let api=this.state.AdvancePayableIncome; 
    let tds=this.state.TDS;                             
      {  
        if(income<=250000){  
          newtaxregime=0;  
      }  
      else if(income<=500000){  
        newtaxregime=((income-250000)*0.05)-12500; 
      }  
      else if(income<=750000){  
        newtaxregime=(income-500000)*0.10+12500;  
      }  
      else if(income<=1000000){  
        newtaxregime=(income-750000)*0.15+37500;  
      }  
      else if(income<=1250000){  
        newtaxregime=(income-1000000)*0.20+75000;  
      }  
      else if(income<=1500000){  
        newtaxregime=(income-1250000)*0.25+125000;  
      }  
      else if(income<=5000000){  
        newtaxregime=(income-1500000)*0.30+187500;  
      } 
      else if(income<10000000){ 
        let a=(income-1500000)*0.30+187500; 
        newtaxregime=a+a*0.10; 
      } 
      else if(income<20000000){ 
        let b=(income-1500000)*0.30+187500; 
        newtaxregime=b+b*0.15; 
      } 
      else if(income<50000000){ 
        let c=(income-1500000)*0.30+187500; 
        newtaxregime=c+c*0.25; 
      } 
      else{ 
        let d=(income-1500000)*0.30+187500; 
        newtaxregime=d+d*0.37; 
      } 
      newtaxregime=newtaxregime+newtaxregime*0.04; 
      newtaxregime=newtaxregime-tds-api; 
      if(newtaxregime<0){ 
        newtaxregime=0; 
      } 
      else if (isNaN(newtaxregime)) newtaxregime = 0;
    }  
   alert('You have to pay '+ newtaxregime+' rupees tax according to new regime')  
  }; 
  //OLD TAX REGIME CODE  
  oldclickHandler=(event)=>{ 
    var oldtaxregime=0;  
    let age=this.state.Age;  
    let income=this.state.Income; 
    let tds=this.state.TDS; 
    let api=this.state.AdvancePayableIncome;  
    if(age<=60){                      //FOR LESSTHAN 60 YRS OF AGE
      if(income<=250000){ 
        oldtaxregime=0; 
      } 
      else if(income<=500000){ 
        oldtaxregime=((income-250000)*0.05)-12500; 
      } 
      else if(income<=1000000){ 
        oldtaxregime=(income-500000)*0.20+12500; 
      } 
      else if(income<=5000000){ 
        oldtaxregime=(income-1000000)*0.30+112500; 
     } 
      else if(income<10000000){ 
        let a=(income-1000000)*0.30+112500; 
        oldtaxregime=a+a*0.10; 
      } 
      else if(income<20000000){ 
        let b=(income-1000000)*0.30+112500; 
        oldtaxregime=b+b*0.15; 
      } 
      else if(income<50000000){ 
        let c=(income-1000000)*0.30+112500; 
        oldtaxregime=c+c*0.25; 
      } 
      else{ 
        let d=(income-1500000)*0.30+112500; 
        oldtaxregime=d+d*0.37; 
      } 
    } 
    else if(age>60 && age<=80){            // FOR BETWEEN 60 TO 80 YRS 
      if(income<=300000){ 
        oldtaxregime=0; 
      }
      else if(income<=500000){ 
        oldtaxregime=((income-300000)*0.05)-12500; 
      } 
      else if(income<=1000000){ 
        oldtaxregime=(income-500000)*0.20+10000; 
      } 
      else if(income<5000000){ 
        oldtaxregime=(income-1000000)*0.30+110000; 
      } 
      else if(income<10000000){ 
        let a=(income-1000000)*0.30+110000; 
        oldtaxregime=a+a*0.10; 
      } 
      else if(income<20000000){ 
        let b=(income-1000000)*0.30+110000; 
        oldtaxregime=b+b*0.15; 
      } 
      else if(income<50000000){ 
        let c=(income-1000000)*0.30+110000; 
        oldtaxregime=c+c*0.25; 
      } 
      else{ 
        let d=(income-1000000)*0.30+110000; 
        oldtaxregime=d+d*0.37; 
      } 
    } 
    else{                                // FOR GREATER THAN 80 YEARS 
      if(income<=500000){ 
        oldtaxregime=0; 
      } 
      else if(income<=1000000){ 
        oldtaxregime=(income-500000)*0.20; 
      } 
      else if(income<5000000){ 
        oldtaxregime=(income-1000000)*0.30+100000; 
      } 
      else if(income<10000000){ 
        let a=(income-1000000)*0.30+100000; 
        oldtaxregime=a+a*0.10; 
      } 
      else if(income<20000000){ 
        let b=(income-1000000)*0.30+100000; 
        oldtaxregime=b+b*0.15; 
      } 
      else if(income<50000000){ 
        let c=(income-1000000)*0.30+100000; 
        oldtaxregime=c+c*0.25; 
      } 
      else{ 
        let d=(income-1500000)*0.30+100000; 
        oldtaxregime=d+d*0.37; 
      } 
    } 
    if(oldtaxregime<0){ 
      oldtaxregime=0;
    } 
    else if (isNaN(oldtaxregime)) 
    {oldtaxregime = 0;}
    else{ 
      oldtaxregime=oldtaxregime+oldtaxregime*0.04; 
      oldtaxregime=oldtaxregime-tds-api; 
    } 
    alert('You have to pay '+oldtaxregime+' rupees tax according to old regime');
  }  
  render() {
    const mystyle={
      paddingTop:"100px",
      color:"white",
      //padding: "26px",
      fontWeight:"bold",
      fontSize:45,
      fontFamily:"TimesNewRoman",
      textShadow:"1px 1px 1px black"
      // fontStyle:"Italic"
    }
    const headingstyles={
      textAlign:"center",
      padding:"10px",
      textColor:"white",
      // fontWeight:"bold",
      fontFamily:"Arial",
      fontSize:18
    }
    const divstyle={
      padding:"10px",
      border:"5px groove Yellow"
    }
    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }
    return (
      <div style={divstyle}>
        <h1 style={mystyle}>INCOME TAX CALCULATOR</h1>
        <input style={headingstyles} type='text' value={this.Income} onChange={this.incomeHandler} placeholder="Enter your income here..." /><br />
        <input style={headingstyles} type='text' value={this.Age} onChange={this.ageHandler} placeholder="Enter your age..."></input><br/>
        <input style={headingstyles} type='text' value={this.TDS}onChange={this.tdsHandler} placeholder="Enter your TDS..."></input><br/>
        <input style={headingstyles} type='text' value={this.AdvancePayableIncome}onChange={this.apiHandler} placeholder="Enter your advance payable tax..."></input><br/>
        <button class="button button1" onClick={this.newclickHandler}>Calculate New Regime Tax</button>
        <button class="button button1" onClick={this.oldclickHandler}>Calculate Old Regime Tax</button><br/>
        <a href="https://eportal.incometax.gov.in/iec/foservices/#/login">
        <button class="button button1">To file return</button>
        </a>
      </div>
    )
  }
}

export default IncomeTax