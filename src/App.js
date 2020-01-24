import React from 'react';
import Header from './components/Header';
import Item from './components/Item';
import data from './data';

class App extends React.Component {
  state = {
    upcoming: {}
  };

  componentDidMount() {
    console.log(data)
    this.setState({ upcoming: data });
  }

  render() {
    return (
      <div>
        <Header tagline="Teamwork makes the dream work" />
        <div className="wrapper">
          <div className="main">
            <div className="upcoming">
              <h2>Upcoming Publications</h2>
              <ul className="items-list">
                {Object.keys(this.state.upcoming).map(key => (
                  <Item 
                    key={key}
                    index={key}
                    details={this.state.upcoming[key]}
                  />
                ))}
              </ul>
            </div>
            <div className="review">
              <h2>In Review</h2>
            </div>
            <div className="completed">
              <h2>Completed</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
