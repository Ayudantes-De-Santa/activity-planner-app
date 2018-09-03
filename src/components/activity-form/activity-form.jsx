import React from 'react'
import { connect } from 'react-redux'
import { sayHello } from '../../actions/activity'


let ActivityForm = ({}) => (
<div>
<h2>Create activity</h2>
<br/>
		<form action="" method="POST" class="form" role="form">
            <input class="form-control" name="name" placeholder="Name" type="text" />
            <textarea name="description" id="description" class="form-control" rows="9" cols="25" required="required" placeholder="Description"></textarea>
            <input class="form-control" name="date" placeholder="Date" type="text" />
            <input class="form-control" name="location" placeholder="Location" type="text" />
     <br/>
            <button class="btn btn-lg btn-primary btn-block" type="submit">
               Add activity</button>
            </form>
            </div>
)

const mapStateToProps = (state) => ({
  
})
const mapDispatchToProps = (dispatch) => ({
//   saySomething: () => { dispatch(sayHello())}
})
ActivityForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityForm)


export default ActivityForm;