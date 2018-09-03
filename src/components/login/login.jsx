import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/activity'

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
            <div>
                <form>
                    Enter your name:
                    <input type="text" name="name" onChange={this.handleChange}></input>
                </form>
                <input type="submit" onClick={() => this.props.loginProp(this.state.name)}  value="Submit"></input>
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