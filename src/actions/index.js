export const FETCH_DATA = 'FETCH_DATA';

export function fetchData() {
    let URL = `http://localhost:3000/src/data.json`;
    const request = fetch(URL, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
        .then( (response) => {
            return response.json()    
        })
        .then( (json) => {
            this.setState({
            data: json
            })
            console.log('parsed json', json)
        })
        .then(
            console.log(this.state.data)
        )

    return{
        type: FETCH_DATA,
        payload: request
    }
}