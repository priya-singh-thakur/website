import React from "react";
import {style} from 'typestyle';

const table= style({
  padding: '20px',
  border:'1px solid blue',
})

const container= style({
    width:'100%',
    height:"10px",
    padding:"20px",
})


class Table extends React.Component {
    constructor(args) {
    super(args);
    this.state = {
      row: '',
      col: '',
      resultantTable: null
   };
     this.handleRowChange = this.handleRowChange.bind(this);
     this.handleColChange = this.handleColChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  
  }
  handleRowChange(event) {
    this.setState({ row: event.target.value });
  }

  handleColChange(event) {
    this.setState({ col: event.target.value });
  }
     
  handleSubmit(event) {
    event.preventDefault();
    const resultantTable = this.NewTable();
    this.setState({
      resultantTable
    })
    }

  NewTable(){
       let table = [];
     for(let i = 0 ; i<this.state.row;i++){
         let children = [];
     
     for( let j = 0 ; j<this.state.col;j++){
           const rgbx= (i*j) % 256;
           let cell_color= `rgb(${rgbx},${rgbx},${rgbx})`;
           children.push(<td style={{backgroundColor:cell_color, height:'20px'}} key={`col_${j}`}></td>)
   }

   table.push(<tr key={`row_${i}`}>{children}</tr>)
  }
  
  return (
    
    <div>
        <table className={container}><tbody>{table}</tbody></table>
    </div>
            
)
}      

  
   render()
   {
    return (
      <section>  
         <div className={table}>
    <form onSubmit={(e)=> this.handleSubmit(e)}>
       <label htmlFor="rows">ROWS</label> 
       <input type="text" name="rows" id="rows" onChange={(e) => this.handleRowChange(e)} placeholder="enter number of rows" />
       &emsp;<label htmlFor="columns">COLUMNS</label> 
       <input type="text" name="columns" id="columns" onChange={(e) => this.handleColChange(e)} placeholder="enter number of columns" />
       <button>Create Table</button>
    </form>
    {this.state.resultantTable}
   </div>
   </section>

 )
}
     }


export default Table;            