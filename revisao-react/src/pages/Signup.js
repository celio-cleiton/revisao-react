import { useContext, useState } from "react"
import SignupForm from "../Components/SignupForm"
import { GlobalContext } from "../GlobalState/GlobalContext"

const Signup = () => {
    const [form, setForm] = useState({name: "", email: "", password: ""})

    const onChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const context = useContext(GlobalContext)
    const { signup } = context



    return(
        <SignupForm onChange={onChange} form={form} signup={signup}/>  
    )
}

export default Signup