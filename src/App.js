import React, { Component,Fragment } from 'react';  
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
class App extends Component {
  
  render() { 
    return ( 
      <Fragment>
        <div>
          <Typography>Type:A - {this.props.a}</Typography>
          <Button color="primary" onClick={()=>this.props.updateA(this.props.b)}>A</Button>
        </div>
        <div>
          <Typography>Type:B - {this.props.b}</Typography>
          <Button color="primary" onClick={()=>this.props.updateB(this.props.a)}>B</Button>
        </div>
      </Fragment>
     );
  }
}

const mapStoreToProps = (initState) => {
  return{
    a : initState.redA.a,
    b : initState.redB.b
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    updateA : (b)=>dispatch({type: "Update-A",b:b}),
    updateB : (a)=>dispatch({type: "Update-B",a:a})
  }
}
 
export default connect(mapStoreToProps,mapDispatchToProps)(App);