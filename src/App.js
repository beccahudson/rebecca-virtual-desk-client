import React from 'react';
import { Route } from 'react-router-dom';
import HelpApiService from './services/help-api-service';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HelpPage from './components/Help/HelpPage';
import ViewHelpTicket from './components/Help/ViewHelpTicket';
import Dashboard from './components/Dashboard/Dashboard';
// import Faq from './components/FaqList/FaqList';
// import FaqApiService from './services/faq-api-service';
// import Notes from './components/Notes/NotesPage';
// import NoteApiService from './services/note-api-service';
// import StudyHall from './components/StudyHall/StudyHallPage';
// import StudyApiService from './services/study-api-service';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {  } from '@fortawesome/free-regular-svg-icons';
import './App.css';
import Context from './Context';
import HelpTicketForm from './components/Help/HelpTicketForm';

// library.add(far, faComments, faHandPaper, faEdit, faStickyNote, faClock, faDoorClosed, faLaptopHouse, faStickyNote, faExternalLinkAlt, faSignOutAlt, faSignInAlt, faTimes, faPlus, faChalkboardTeacher, faTrashAlt, faQuestionCircle, faSearch, faCogs
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
    student: {
      first_name: 'Charlie',
      last_name: 'Bloggs',
      email: 'fake@student.email.com',
      grade: '10'
    },
    ticketList: [],
    ticket: nullTicket,
    chatList: [],
    chat: nullChat,
    error: null,
    setUserList: (userList) => {
      this.setState({userList})
    },
    setUser: (user) => {
      this.setState({user})
    },
    setCurrentStudent: (student) => {
      this.setState({student})
    },
    setTicketList: (ticketList) => {
      this.setState({ticketList})
    },
    setChatList: (chatList) => {
      this.setState({chatList})
    },
    addTicket: (ticket) => {
      this.setTicketList([
        ...this.state.ticketList,
        ticket
      ])
    },
    addChat: (chat) => {
      this.setChatList([
        ...this.state.chatList,
        chat
      ])
    },
    clearTicket: () => {
      this.setState({ ticket: nullTicket })
    },
    clearChat: () => {
      this.setState({ chat: nullChat })
    },
    setError: (error)  => {
      console.error(error)
      this.setState({ error })
    },
    clearError: () => {
      this.setState({ error: null })
    }
  };  
  
  componentDidMount() {
    
    HelpApiService.getUsers()
      .then(this.state.setUserList)
      .catch(this.state.setError);

    HelpApiService.getUser()
      .then(this.state.setCurrentStudent)
      .catch(this.state.setError);

    HelpApiService.getUser()
      .then(this.state.setUser)
      .catch(this.state.setError);

    HelpApiService.getTickets()
      .then(this.state.setTicketList)
      .catch(this.state.setError);

    /*HelpApiService.getChatComments(ticket_id)
      .then(this.state.setChatList)
      .catch(this.state.setError);*/
}

 

  render() {
    return (
      <Context.Provider value={this.state}>
          <Header />
          <main className='App__main'>
            <Route 
              exact
              path='/'
              component={Dashboard}
            />
            <Route 
              exact
              path='/help'
              component={HelpPage}
            />
            <Route 
              exact
              path='/help/newticket'
              component={HelpTicketForm}
            />
            <Route
              exact
              path="/help/:ticketid"
              component={ViewHelpTicket}
            />              
          </main>
          <Footer />
      </Context.Provider>
    )
  }
}


