import React, { Component } from 'react';
import PropTypes from 'prop-types'; //impt

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired, //ptfr
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired, //ptbf
    setAlert: PropTypes.func.isRequired
  };

  onChangeHandler = e => {
    //this.setState({text:e.target.value})
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    //displaying aleart when submit without search text
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmitHandler} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChangeHandler}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {/* buttn.btn.btn-light.btn-blocked */}
        {showClear && ( //if this is true &&
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
