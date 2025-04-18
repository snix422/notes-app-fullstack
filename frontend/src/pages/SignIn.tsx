import { SubmitHandler, useForm } from "react-hook-form"
import Title from "../components/Title/Title";
import { Button, Form, Input, MainWrapper } from "./SignIn.style";
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";
import { useAuth } from "../hooks/useAuth";
import { useNotify } from "../hooks/useNotify";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';


interface SignUpInputs {
    email:string,
    password:string,
}

const SignIn = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<SignUpInputs>();
    const [error, setError] = useState("")
   
    const { loginUser, loginLoading } = useAuth() 
    const { dispatchNotify } = useNotify();
    console.log(loginLoading)

    const onSubmit : SubmitHandler<SignUpInputs> = async (data) => {
        try {
            const credentials = {
                email:data.email,
                password:data.password
            }
            const res = await loginUser(credentials);
            dispatchNotify("Zalogowano pomyślnie")
            setError("")
            return res;
        } catch (error:any) {
            console.log(error.response.data.error)
            setError(error.response.data.error)
            throw error
        }

        
    }


    return(
        <MainWrapper>
            <Title text="Logowanie" variant="large" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("email")} type="text" placeholder="Wpisz e-mail" />
                {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
                <Input {...register("password")} type="password" placeholder="Wpisz hasło" />
                {errors.email && <Alert severity="error">{errors.password?.message}</Alert>}
                <Button type="submit">{loginLoading ? <CircularProgress size={20} color="secondary" /> : "Zaloguj się"}</Button>
                {error && <Alert severity="error">{error}</Alert>}
            </Form>
        </MainWrapper>
    )
}

export default SignIn