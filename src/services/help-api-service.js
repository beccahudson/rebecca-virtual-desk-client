import config from '../config'

const HelpApiService = {
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUser(id) {
    return fetch(`${config.API_ENDPOINT}/users/${id}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getTickets() {
    return fetch(`${config.API_ENDPOINT}/help_tickets`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getTicket(id) {
    return fetch(`${config.API_ENDPOINT}/help_tickets/${id}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getChatComments(id) {
    return fetch(`${config.API_ENDPOINT}/help_tickets/${id}/chat_comments`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postHelpTicket(first_name, last_name, subject, question, date_due) {
    return fetch(`${config.API_ENDPOINT}/help_tickets`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        subject,
        question,
        date_due,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postChatComment(content, ticket_id, user_id) {
    return fetch(`${config.API_ENDPOINT}/chat_comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        content,
        ticket_id,
        user_id,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default HelpApiService;