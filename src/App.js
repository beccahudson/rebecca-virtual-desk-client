import React from "react";
import { Route } from "react-router-dom";
import HelpApiService from "./services/help-api-service";
import HelpPage from "./components/Help/HelpPage";
import ViewHelpTicket from "./components/Help/ViewHelpTicket";
import Welcome from "./components/Welcome/Welcome";

import TokenService from "./services/token-service";

import "./App.css";
import Context from "./Context";
import HelpTicketForm from "./components/Help/HelpTicketForm";
import Login from "./components/Login/Login";

export default class App extends React.Component {
  state = {
    userList: [],
    user: {},
    ticketList: [],
    error: null,
    setUserList: (userList) => {
      this.setState({ userList });
    },
    setUser: (user) => {
      return this.setState({ user });
    },
    setTicketList: (ticketList) => {
      this.setState({ ticketList });
    },
    ticketClaimed: (ticketId, newTicket) => {
      const ticketList = this.state.ticketList.map((t) =>
        t.id === ticketId ? newTicket : t
      );
      this.state.setTicketList(ticketList);
    },
    ticketClosed: (ticketId, updateTicket) => {
      const ticketList = this.state.ticketList.map((t) =>
        t.id === ticketId ? updateTicket : t
      );
      this.state.setTicketList(ticketList);
    },
    addTicket: (newTicket) => {
      return this.state.setTicketList([...this.state.ticketList, newTicket]);
    },
    setError: (error) => {
      console.error(error);
      this.setState({ error });
    },
    clearError: () => {
      this.setState({ error: null });
    },
    getFacultyAssignedEmail: (faculty) => {
      return this.state.userList.map((user) => {
        const facultyEmail = faculty === user.id ? `${user.email}` : "";
        return facultyEmail;
      });
    },
    getStudentAssignedName: (student) => {
      return this.state.userList.map((user) => {
        const studentName =
          student === user.id ? `${user.firstName} ${user.lastName}` : "";
        return studentName;
      });
    },
    getData: () => {
      HelpApiService.getUsers()
        .then(this.state.setUserList)
        .catch(this.state.setError);

      if (TokenService.hasAuthToken()) {
        HelpApiService.getUser()
          .then(this.state.setUser)
          .then(() => {
            if (this.state.user.type === "student") {
              HelpApiService.getMyTickets()
                .then(this.state.setTicketList)
                .catch(this.state.setError);
            } else {
              HelpApiService.getTickets()
                .then(this.state.setTicketList)
                .catch(this.state.setError);
            }
          })
          .catch(this.state.setError);
      }
    },
  };

  componentDidMount() {
    this.state.getData();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <main className="App__main">
          <Route
            exact
            path="/"
            component={TokenService.hasAuthToken() ? HelpPage : Welcome}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/logout"
            render={(rprops) => {
              TokenService.clearAuthToken();
              this.state.setUser({});
              rprops.history.push("/");
              return <></>;
            }}
          />
          <Route exact path="/newticket" component={HelpTicketForm} />
          <Route exact path="/help/:ticketid" component={ViewHelpTicket} />
        </main>
      </Context.Provider>
    );
  }
}
