
import { api } from './api'


export async function signInRequest(data)  {
  const request_data = {
    'email':data.email,
    'senha':data.password
  }

  var data;
  await api.post('usuarios/token',request_data).then(result =>{
    // return result.data
    data = result.data
  }).catch(error=>data=error.response.data)

  return data

}
