import React from 'react';
import Header from './Header';
import NotesList from './NotesList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    }

    this.addNote = this.addNote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addNote() {
    let notes = this.state.notes;
    notes.push(notes.length - 1);
    this.setState({notes});
  }

  render() {
    return (
      <div className="container-fluid" >
        <Header addNote={this.addNote} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
