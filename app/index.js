import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'


class Calculator extends React.Component{

    onInputChange(){
      let input = document.getElementById("input").value;
    //  console.log(input);
    }

    onButtonClick(val){
        document.getElementById("input").value += val;
        let input = document.getElementById("input").value;

        document.getElementById("intermediate").value += input;

        document.getElementById("input").value = "";
    }

    onCalculate(){
        let input = document.getElementById("input").value;

        document.getElementById("intermediate").value += input;


         let x = document.getElementById("intermediate").value;
        // console.log(x);
         let total = eval(x);
         document.getElementById("total").value = total;
    }
    render() {
        return(
           <React.Fragment>
               <div>
                   <input type="input"
                          id="input"
                          className="input-field"
                          placeholder="ENTER NUMBER"
                          onChange={e=>this.onInputChange()}
                   />
               </div>

               <div>
                   <input type="button"
                          value="+"
                          className="button"
                          onClick={()=>this.onButtonClick("+")}
                   />
                   <input type="button"
                          value="-"
                          className="button"
                          onClick={()=>this.onButtonClick("-")}
                   />
                   <input type="button"
                          value="*"
                          className="button"
                          onClick={()=>this.onButtonClick("*")}
                   />
                   <input type="button"
                          value="/"
                          className="button"
                          onClick={()=>this.onButtonClick("/")}
                   />
               </div>
               <div>
                   <input type="button"
                           value="="
                           className="button"
                           onClick={()=>this.onCalculate()}
               />
               </div>
               <div>
                   <input type="input"
                          id="intermediate"
                          className="input-field"
                          placeholder="Intermediate"
                   />
               </div>
               <div>
                   <input type="input"
                          id="total"
                          className="input-field"
                          placeholder="TOTAL"
                   />
               </div>
           </React.Fragment>
        )
    }
}

ReactDOM.render(
  <Calculator/>,

  document.getElementById("root")
);