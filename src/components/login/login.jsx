import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/activity'
import './login.css'

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: "default"
        }
    }

    handleChange = event => {
        this.setState({ name: event.target.value })
    }
    //handleChange = event => this.setState({ playerName: event.target.value })

    render() {
        return (

            <div className="login-page">
              <div className="form">  
                <img className="endava-image" src="https://www.endava.com/-/media/EndavaDigital/Endava/Images/MetaDataImages/preview-image.ashx"/>
                    <p className="activity-planner-title">Activity planner</p>
                <form>                    
                    <input type="text" name="name" onChange={this.handleChange} placeholder="Enter your name"></input>
                </form>
                <input type="submit" onClick={() => this.props.loginProp(this.state.name)}  value="Submit"></input>
              </div>
            </div>
        ) // 
    }
}




const mapStateToProps = (state) => ({
    activePage: state.activePage
})
const mapDispatchToProps = dispatch => ({
    loginProp: (name) => { dispatch(login(name))}
})
Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)


export default Login