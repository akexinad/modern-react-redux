import React from 'react'

export default class App extends React.Component {
  state = {
    resource: 'posts'
  }

  render() {
    return (
      <div>
        <div>
          <button
            className="ui button primary"
            onClick={ () => this.setState({ resource: 'todos' })}
          >
            Posts
          </button>
          <button
            className="ui button primary"
            onClick={ () => this.setState({ resource: 'posts' })}
          >
            Todos
          </button>
        </div>
        { this.state.resource }
      </div>
    )
  }
}
