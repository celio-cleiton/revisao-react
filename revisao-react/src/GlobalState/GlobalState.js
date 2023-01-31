import axios from "axios"
import { BASE_URL } from "../constants/url"
import { GlobalContext } from "./GlobalContext"

const GlobalState = ({children}) => {

    const signup = (body) => {
        //falta finalizar a função
        //jogar o token para o localstorage
        //redirecionar o usuário com token para página de feed
        axios.post(`${BASE_URL}/user/signup`, body)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    const data = {
        signup
    }
    
    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState