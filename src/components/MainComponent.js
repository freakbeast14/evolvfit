import React, { Component, useEffect } from "react";
import { CONTACTS } from "../shared/contacts";

const RenderContact = ({ contact, onClick }) => {
  return (
    <div key={contact.id} className="contact" onClick={onClick}>
      <img src={contact.image} alt={contact.name} />
      <div className="contactName">{contact.name}</div>
      <hr />
    </div>
  );
};

// const RenderMsgReceived = ({msg}) => {
//   return (
//     useEffect(() => {
//       setTimeout(() => {
//         return (
//           <>
//           <div className="messageReceived">{msg}</div>
//           {console.log(msg)}
//           </>
//         )
//       }, 300)
//     }, [msg])
//   )
// }

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: CONTACTS,
      selectedContact: null,
      message: "",
      messageSent: "",
    };
  }

  onContactSelected = (contact) => {
    this.setState({
      selectedContact: contact,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      messageSent: this.state.message,
      message: "",
    });
  };

  handleInputChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  RenderChatForm = (contact) => {
    if (contact != null)
      return (
        <div className="ChatSection vh-100">
          <header>{contact.name}</header>
          <div className="ChatSpace">
            {this.RenderMessage(this.state.messageSent)}
          </div>
          <div className="TypeMsg">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="message"
                placeholder="Type your message..."
                value={this.state.message}
                onChange={this.handleInputChange}
              ></input>
              <button type="submit">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      );
    else
      return (
        <div className="ChatSection vh-100">
          <header>Click on a contact to chat</header>
        </div>
      );
  };

  RenderMessage = (messageSent) => {
    if (messageSent !== "")
      return (
        <>
          <div className="messageSent">{messageSent}</div>
          <div className="messageReceived">{messageSent}</div>
          {/* <RenderMsgReceived msg={messageSent}/> */}
        </>
      );
    else return <div></div>;
  };

  render() {
    const contacts = this.state.contacts.map((contact) => {
      return (
        <RenderContact
          contact={contact}
          onClick={() => this.onContactSelected(contact)}
        />
      );
    });
    return (
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-2 col-md-3 contact-col vh-100">
            <div className="contacts">CONTACTS</div>
            <hr />
            {contacts}
          </div>
          <div className="col-10 col-md-9 vh-100">
            {this.RenderChatForm(this.state.selectedContact)}
          </div>
        </div>
      </div>
    );
  }
}
