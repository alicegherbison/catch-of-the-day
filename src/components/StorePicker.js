import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  };

  myInput = React.createRef();

  goToStore(event) {
    event.preventDefault();
    
  };
  render() {
    return (
      <Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>What store would you like to visit?</h2>
          <input type="text" placeholder="Store name" defaultValue = {getFunName()} ref={this.myInput} required />
          <button type="submit">Visit store →</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;