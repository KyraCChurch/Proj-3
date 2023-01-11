const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, ingredients, instructions, _id } = this.props.card
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Show Page`} card={this.props.card}>
        <p>{capName} is made with {ingredients}. <br>{instructions}</br> </p>
      </Default>
    )
  }
}

module.exports = Show