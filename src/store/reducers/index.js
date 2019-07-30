export const initialState = {
  mobileOperators: [
    {
      name: 'MTS'
    },
    {
      name: 'Beeline'
    },
    {
      name: 'MegaFon'
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    default: 
      return state;
  }
}

export default reducer;