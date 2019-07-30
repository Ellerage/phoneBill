export default class ApiService {
  mobileOperators = [
    {
      name: 'MTS',
      title: 'МТС'
    },
    {
      name: 'Beeline',
      title: 'Билайн'
    },
    {
      name: 'MegaFon',
      title: 'МегаФон'
    }
  ]

  requestToServer = (payload) => {
    // fetch (url, {body: payload})
    
    let randomRes = Math.floor(Math.random() * 2)
    return randomRes === 1 ? true : false
  }
}