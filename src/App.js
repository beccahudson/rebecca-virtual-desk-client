import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import styled from 'styled-components';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { far, faHandPaper,faComments,faEdit,faStickyNote,faClock } from '@fortawesome/free-regular-svg-icons';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HelpPage from './components/Help/HelpPage';
import HelpApiService from './services/help-api-service';
// import Dashboard from './components/Dashboard/Dashboard';
// import Faq from './components/FaqList/FaqList';
// import FaqApiService from './services/faq-api-service';
// import Notes from './components/Notes/NotesPage';
// import NoteApiService from './services/note-api-service';
// import StudyHall from './components/StudyHall/StudyHallPage';
// import StudyApiService from './services/study-api-service';
import './App.css';
import Context from './Context';

// library.add(
//   far,
//   faComments,
//   faHandPaper,
//   faComments,
//   faEdit,
//   faStickyNote,
//   faClock,
// )

export const nullTicket = {
  first_name: '',
  last_name: '',
  subject: '',
  question: '',
  date_due: '',
  ticket_status: null,
}

export const nullChat = {  
  content: ''
}

export default class App extends React.Component {
  state = {
    userList: [],
    user: {},
    ticketList: [],
    ticket: nullTicket,
    chatList: [],
    chat: nullChat,
    error: null,
    setUserList: () => {},
    setTicketList: () => {},
    setChatList: () => {},
    clearTicket: () => {},
    clearChat: () => {},
    setError: () => {},
    clearError: () => {}
  };
  
  setUserList = (userList) => {
    this.setState({userList})
  }

  setTicketList = (ticketList) => {
    this.setState({ticketList})
  }

  setChatList = (chatList) => {
    this.setState({chatList})
  }

  addTicket = (ticket) => {
    this.setTicketList([
      ...this.state.ticketList,
      ticket
    ])
  }

  addChat = (chat) => {
    this.setChatList([
      ...this.state.chatList,
      chat
    ])
  }

  clearTicket = () => {
    this.setState({ ticket: nullTicket })
  }

  clearChat = () => {
    this.setState({ chat: nullChat })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  
  
  componentDidMount() {
    const ticket_id = this.state.ticket.id;
    HelpApiService.getUsers()
        .then(this.setUserList)
        .catch(this.setError);

    HelpApiService.getTickets()
        .then(this.setTicketList)
        .catch(this.setError);

    HelpApiService.getChatComments(ticket_id)
        .then(this.setChatList)
        .catch(this.setError);
}

 

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className='App'>
          <Route path="/" component={Header} />
          <main className='App__main'>
              <Route 
                 exact
                 path={'/'}
                 component={HelpPage}
              />
              
          </main>
          <Footer />
        </div>
      </Context.Provider>
    )
  }
}


