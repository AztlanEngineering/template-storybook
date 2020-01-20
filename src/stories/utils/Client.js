import ApolloClient from 'apollo-boost'

import CONFIG from 'config'

export default new ApolloClient({
  uri:CONFIG.ENDPOINT,
})
