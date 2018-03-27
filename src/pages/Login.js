import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../store';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        const {username, password} = this.state;
        e.preventDefault();
        this.props.login(username, password);
        this.props.history.push('/'); //send me back
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Login:</h2>
                    <div>
                        <input type="email"
                         placeholder="Email..."
                         value={this.state.username}
                         onChange={e => this.setState({username: e.target.value})}
                         required />
                    </div>
                    <div>
                        <input type="password" 
                        placeholder="Password..." 
                        value={this.state.password}
                        onChange={e => this.setState({password: e.target.value})}
                        required />
                    </div>
                    <button>Login</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);