import React,{ Component,Fragment } from 'react';
import config from './../../config/config'


 class currencyDropdown extends Component {
     constructor(){
         super()
         this.state = {
            value:'INR',
            buttonToggle:true
         }
     }

     onChnageHandler = (e) => {
         this.setState ({value:e.target.value}) 
     }
     addNewCurency = () =>{
        const _curr = this.state.value;
        const {currenyList=[]} = this.props;
        if(!currenyList.includes(_curr)){
            this.props.saveNewCurrency(_curr);
            this.toggleHandler();
        } else {
            alert("Currency already in above list.")
        }
     }

     toggleHandler = () =>{
        this.setState ({buttonToggle:!this.state.buttonToggle}) 
     }

     renderAddButton = () => {
         return <div className="row">
                    <button 
                        type="button" 
                        className="btn btn-success col-sm-6" 
                        onClick={this.toggleHandler}
                        >
                        {`Add New `}
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger col-sm-6" 
                        onClick={e=>this.props.removeCurrency("ALL")}
                        >
                        {`Clear all`}
                    </button>
                </div>
     }

     renderSelectView = () => {
         return <div className="row">
                        <select 
                            className= "col-sm-8"
                            onChange={this.onChnageHandler} 
                            value={this.state.value}
                        >
                        {config.currencyDropdown.map(item=>{
                            return <option value={item} >{item}</option>
                        })}
                    </select>
                    <button type="button" 
                            className="btn btn-success col-sm-4" 
                            onClick={this.addNewCurency}
                            >
                            {`Submit`}
                    </button>
                </div>
     }


     render () {
        return <Fragment>
                {this.state.buttonToggle 
                    ? this.renderAddButton() 
                        : this.renderSelectView()
                }   
                </Fragment>
        }
}

export default currencyDropdown;