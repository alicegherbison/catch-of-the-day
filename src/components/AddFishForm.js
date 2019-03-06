import React from 'react';

class AddFishForm extends React.Component {
  createFish = (event) => {
    event.preventDefault();
    console.log('Making a fish');
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" placeholder="Name"/>
        <input name="price" type="text" placeholder="Price"/>
        <select name="status">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea name="desc" placeholder="Desc"></textarea>
        <input name="image" type="type" placeholder="Image"/>
        <button type="submit">+ Add fish</button>
      </form>
    )
  }
}

export default AddFishForm;