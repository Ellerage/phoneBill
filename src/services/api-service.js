export default class ApiService {
  mobileOperators = [
    {
      name: 'mts',
      title: 'МТС',
      code: '912'
    },
    {
      name: 'beeline',
      title: 'Билайн',
      code: '9__'
    },
    {
      name: 'megafon',
      title: 'МегаФон',
      code: '922'
    }
  ]

  requestToServer = async (payload) => {
    // fetch (url, {body: payload})
    
    let randomRes = Math.floor(Math.random() * 2)
    return randomRes === 1 ? true : false
  }
}