const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, ingredients, instructions } = this.props.card
    return (
      <Default title={`${name} Edit Page`} card={this.props.card}>
        <form method='POST' action={`/cards/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Ingredients: <input type='text' name='ingredients' defaultValue={ingredients} /><br />
          Instructions: <input type='text' name='instructions' defaultChecked={instructions} /> <br />
          <input type='submit' value='Edit Card' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
