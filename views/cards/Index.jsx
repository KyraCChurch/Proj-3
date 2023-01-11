const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { cards } = this.props
    return (
      <Default title='Cards Index Page'>
        <ul>
          {
                        cards.map((card) => {
                          const { name, ingredients, instructions } = card
                          return (
                            <li key={card._id}>
                              <a href={`/cards/${card._id}`}>
                                {name}
                              </a> needs {ingredients}

                              <br />
          {instructions}
                              <br />
                              <form method='POST' action={`/cards/${card._id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index