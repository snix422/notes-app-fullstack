import { SubmitHandler, useForm } from "react-hook-form"
import Title from "../components/Title/Title";
import { useState } from "react";
import { Form, Input, MainWrapper,Button } from "./SignUp.style";
import Alert from '@mui/material/Alert';
import { useAuth } from "../hooks/useAuth";
import { CircularProgress } from "@mui/material";


interface SignUpInputs {
    email:string,
    password:string,
    confirmPassword:string,
    name:string
}

const SignUp = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<SignUpInputs>();
    const [error,setError] = useState("")
    const { registerUser, registerLoading } = useAuth();

    const onSubmit : SubmitHandler<SignUpInputs> = async (data) => {
        console.log(data)
        if(data.password !== data.confirmPassword){
            setError("Hasła nie są takie same");
            return
        }
        try {
            const credentials = {
                email:data.email,
                password:data.password,
                name:data.name
            }
            const res = await registerUser(credentials);
            return res.data;
        } catch (error:any) {
            console.log(error)
            setError(error.response.data.error)
            throw error
        }
    }

    return(
        <MainWrapper>
            <Title text="Rejestracja" variant="large" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("email")} type="text" placeholder="Wpisz e-mail" />
                {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
                <Input {...register("password")} type="password" placeholder="Wpisz hasło" />
                {errors.email && <Alert severity="error">{errors.password?.message}</Alert>}
                <Input {...register("confirmPassword")} type="password" placeholder="Potwierdź hasło" />
                {errors.password && <Alert>{errors.confirmPassword?.message}</Alert>}
                <Input {...register("name")} type="text" placeholder="Wpisz imię" />
                {errors.name && <Alert severity="error">{errors.name.message}</Alert>}
                <Button type="submit">{registerLoading ? <CircularProgress /> : "Zarejestruj się"}</Button>
                {error && <Alert severity="error">{error}</Alert>}
            </Form>
        </MainWrapper>
    )
}

export default SignUp