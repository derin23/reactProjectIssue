import React, {Component} from 'react';
import '../css/Note.css';
const GENERIC_NOTE_TITLE = "Book Name: ", GENERIC_NOTE_BODY = "Author: ", Date1 ="Date: ", Genre = "Genre: ";
class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: GENERIC_NOTE_TITLE,
      body: GENERIC_NOTE_BODY,
      date: Date1,
      genre : Genre,
      editMode: false,
      update : this.props.bodyElement
    }
  }

  // componentWillMount() {
  //   this.state = {
  //     title: GENERIC_NOTE_TITLE,
  //     body: GENERIC_NOTE_BODY,
  //     date: Date1,
  //     genre : Genre,
  //     editMode: false,
  //     update : this.props.bodyElement
  //   }
  // }

  handleEdit() {
    this.setState({
      editMode: true
    });
  }

  handleSave() {
    this.setState({
    title: this.refs.titleContent.value,
    body: this.refs.bodyContent.value,
    date: this.refs.DATE.value,
    genre: this.refs.GENRE.value,
    editMode: false
    });
  }

  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }

  handleUpdate(){
    console.log("hello");
    this.props.updateHandler(this.props.id);
  }

  render() {
    let titleElement, bodyElement,DATE,GENRE,buttonArea;
    if (this.state.editMode) {
      titleElement = <textarea ref="titleContent" className="title-textarea" defaultValue={this.state.title}></textarea>;
      bodyElement = <textarea ref="bodyContent" className="body-textarea" defaultValue={this.state.body}></textarea>;
      DATE = <textarea ref="DATE" className="body-textarea" defaultValue={this.state.date}></textarea>;
      GENRE = <textarea ref="GENRE" className="body-textarea" defaultValue={this.state.genre}></textarea>;
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button>
      
      </div>;
    } else {
      titleElement = <h5>{this.state.title}</h5>;
      bodyElement = <p>{this.state.body}</p>;
      DATE = <p>{this.state.date}</p>;
      GENRE = <p>{this.state.genre}</p>;
      buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button>
      <br></br>
      <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
      <button className="btn btn-info" onClick={() => this.handleUpdate()}>Update</button></div>;
    }

    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body" body ={bodyElement} >
            {titleElement}
            {bodyElement}
            {DATE}
            {GENRE}
            {buttonArea}
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
