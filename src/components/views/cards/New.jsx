const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default ownersName='Create A New Card'>
        <form method='POST' action='/cards'>
          Owners Name: <input type='text' name='Last, First Name' /><br />
          Dogs Name: <input type='text' name='Dogs Name' /><br />
          Phone Number: <input type='text' name='Phone Number' /> <br />
          <input type='submit' value='Edit Card' />
        </form>
      </Default>
    )
  }
}

module.exports = New