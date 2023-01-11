const React = require('react')

class Default extends React.Component {
  render () {
    const { card, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href='/cards'>Go to Home Page For All Cards</a><br />
            <a href='/cards/new'>Create a New Card</a><br />
            {card ? <a href={`/cards/${card._id}/edit`}> {card.name} Edit Page </a> : ''}<br />
            {card ? <a href={`/cards/${card._id}`}>{card.name} Show Page</a> : ''}<br />
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
