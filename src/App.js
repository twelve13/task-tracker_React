import React from 'react';
import Header from './components/Header';
import Item from './components/Item';
import AddItemForm from './components/AddItemForm';
import data from './data';

class App extends React.Component {
  state = {
    upcoming: {},
    review: {},
    completed: {}
  };

  componentDidMount() {
    this.setState({ upcoming: data });
  }

  addItem = (item) => {
    const upcoming = {...this.state.upcoming};
    //add the new item to the items variable using date.now to generate a unique key
    upcoming[`items${Date.now()}`] = item;
    this.setState({
      upcoming
    })
  };

  moveToReview = (index, details) => {
    const upcoming = {...this.state.upcoming};
    const review = {...this.state.review};
    //add to review portion of state
    review[index] = details;
    //remove from upcoming portion of state
    delete upcoming[index];
    this.setState({
      upcoming,
      review
    })
  };

  moveToCompleted = (index, details) => {
    const review = {...this.state.review};
    const completed = {...this.state.completed};
    //add to review portion of state
    completed[index] = details;
    //remove from upcoming portion of state
    delete review[index];
    this.setState({
      review,
      completed
    })
  };

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
                    moveToReview={this.moveToReview}
                    moveToCompleted={this.moveToCompleted}
                  />
                ))}
              </ul>
            </div>
            <div className="review">
              <h2>In Review</h2>
              <ul className="items-list">
                {Object.keys(this.state.review).map(key => (
                  <Item 
                    key={key}
                    index={key}
                    details={this.state.review[key]}
                    status="inReview"
                    moveToCompleted={this.moveToCompleted}
                  />
                ))}
              </ul>
            </div>
            <div className="completed">
              <h2>Completed</h2>
              <ul className="items-list">
                {Object.keys(this.state.completed).map(key => (
                  <Item 
                    key={key}
                    index={key}
                    details={this.state.completed[key]}
                    status="completed"
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="form-area">
            <h2>Add New Item</h2>
            <AddItemForm addItem = {this.addItem} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
