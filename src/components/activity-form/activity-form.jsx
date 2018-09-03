import React from 'react'
import { connect } from 'react-redux'
import { createActivity } from '../../actions/activity'


class ActivityForm extends React.Component {

	constructor(props){
		super(props)
		this.state = {

		}
	}

    handleNameChange = event => {
        this.setState({ name: event.target.value })
    }
     handleDescriptionChange = event => {
        this.setState({ description: event.target.value })
    }
     handleLocationChange = event => {
        this.setState({ location: event.target.value })
    }
     handleDateChange = event => {
        this.setState({ date: event.target.value })
    }
     handlePhotoChange = event => {
        this.setState({ photo: event.target.value })
    }
    
    getPostableJson =()=>{
    	let state = {
   			 name : this.state.name,
   			 description : this.state.description,
   			 location : this.state.location,
   			 date: this.state.date,
   			 photo:this.state.photo}

		return state;
    }

	render() {
		const createActivity = this.props.createActivity
		return (
			<div>
				<br/>
				<form action="#" method="POST" className="form" role="form">
		            <input className="form-control" name="name" placeholder="Name" type="text" onChange={this.handleNameChange} />  
   					<textarea name="description" id="description" className="form-control" rows="9" cols="25" required="required" placeholder="Description" onChange={this.handleDescriptionChange}></textarea>
		            <input className="form-control" name="date" placeholder="Date" type="text" onChange={this.handleDateChange}/>
		            <input className="form-control" name="location" placeholder="Location" type="text" onChange={this.handleLocationChange}/>
		            <input className="form-control" name="photo" placeholder="Image url" type="text" onChange={this.handlePhotoChange} />  

		            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={()=>createActivity(this.getPostableJson())}>
		               Add activity</button>
	            </form>
            </div>
		)
	}
}
const mapStateToProps = (state) => ({
  
})
const mapDispatchToProps = (dispatch) => ({
	createActivity: (activity) => { dispatch(createActivity(activity))}
})
ActivityForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityForm)


export default ActivityForm;