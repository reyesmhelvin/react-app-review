import React from 'react';

class App extends React.Component {
  render() {
    let title = this.props.title;
    return <h1 className="header">{title}</h1>
  }
}

App.propTypes = {
  title: React.PropTypes.string
}

App.defaultProps = {
  title: "What is your app title?"
}

export default App;
