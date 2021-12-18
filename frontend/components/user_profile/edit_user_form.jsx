import React from "react";
import {Link} from 'react-router-dom'

class EditUserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailChange: {
                id: this.props.user.id,
                email: this.props.user.email,
                password: '',
                updatingEmail: true,
            },
            passwordChange: {
                id: this.props.user.id,
                email: this.props.user.email,
                newPassword: '',
                oldPassword: '',
                updatingPassword: true,
            }
        }

        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    };

    updateEmailForm(field) {
        let emailChange = {...this.state.emailChange}
        return e => {
            emailChange[field] = e.currentTarget.value;
            this.setState({emailChange})
        }
    }

    updatePasswordForm(field) {
        let passwordChange = {...this.state.passwordChange}
        return e => {
            passwordChange[field] = e.currentTarget.value;
            this.setState({passwordChange})
        }
    }

    changeEmail(e) {
        e.preventDefault();
        this.props.updateUser(this.state.emailChange)
        .then(() => this.props.history.push(`/account/${this.props.user.id}`));
    }

    changePassword(e) {
        e.preventDefault();
        this.props.updateUser(this.state.passwordChange)
        .then(() => this.props.history.push(`/account/${this.props.user.id}`));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.userErrors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        console.log(this.state)
        const { user} = this.props;
        return (
            <div className="page">
                <div className="account-header">Hey, {user.first_name}</div>
                <form onSubmit={this.changeEmail} className='edit-user-form-proper'>
                    <div className='edit-user-form-header'>Update Email</div>
                    <div className='edit-user-form-input-row'>
                        <div className='edit-user-form-label'>New Email</div>
                        <input 
                            type='text'
                            value={this.state.emailChange.email}
                            onChange={this.updateEmailForm('email')}
                            className="edit-user-form-input">
                        </input>
                    </div>
                    <div className='edit-user-form-input-row'>
                        <div className='edit-user-form-label'>Password</div>
                        <input 
                            type='password'
                            value={this.state.emailChange.password}
                            onChange={this.updateEmailForm('password')}
                            className="edit-user-form-input">
                        </input>
                    </div>
                    <div className="edit-user-form-input-row edit-user-form-submit-row">
                        <input 
                            type='submit' 
                            className='edit-user-form-submit' 
                            value='Update Email'>
                        </input>
                    </div>
                    <div className="edit-user-form-input-row edit-user-form-submit-row">
                        <Link 
                            className='edit-user-form-cancel link'
                            to={`/account/${user.id}`}>Cancel
                        </Link>
                    </div>
                    {this.renderErrors()}
                    <div className='edit-user-form-border'></div>
                </form>
                <form onSubmit={this.changePassword} className='edit-user-form-proper'>
                    <div className="edit-user-form-header">Update Password</div>
                    <div className="edit-user-form-input-row">
                        <div className="edit-user-form-label">Old Password</div>
                        <input
                            type='password'
                            value={this.state.passwordChange.oldPassword}
                            onChange={this.updatePasswordForm('oldPassword')}
                            className="edit-user-form-input">
                        </input>
                    </div>
                    <div className="edit-user-form-input-row">
                        <div className="edit-user-form-label">New Password</div>
                        <input
                            type='password'
                            value={this.state.passwordChange.newPassword}
                            onChange={this.updatePasswordForm('newPassword')}
                            className="edit-user-form-input">
                        </input>
                    </div>
                    <div className="edit-user-form-input-row edit-user-form-submit-row">
                        <input 
                            type='submit' 
                            className='edit-user-form-submit' 
                            value='Update Password'>
                        </input>
                    </div>
                    <div className="edit-user-form-input-row edit-user-form-submit-row">
                        <Link 
                            className='edit-user-form-cancel link'
                            to={`/account/${user.id}`}>Cancel
                        </Link>
                    </div>
                    {this.renderErrors()}
                    <div className='edit-user-form-border'></div>
                </form>
            </div>
        )
    }
}

export default EditUserForm