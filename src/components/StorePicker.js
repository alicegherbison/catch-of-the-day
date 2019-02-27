import React, {Fragment} from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
      <form action="" className="store-selector">
      <h2>What store would you like to visit?</h2>
      <input type="text" placeholder="Store name" required />
      <button type="submit">Visit store →</button>
      </form>
      </Fragment>
      )
    }
  }
  
  export default StorePicker;