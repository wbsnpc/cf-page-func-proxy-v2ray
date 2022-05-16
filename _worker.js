const SingleDay = 'tr53.herokuapp.com'
const DoubleDay = 'rt53.herokuapp.com'
export default {
    async fetch(request, env) {
      let nd = new Date();
      if (nd.getDate()%2) {
          host = SingleDay
      } else {
          host = DoubleDay
      }
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname=host;
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
