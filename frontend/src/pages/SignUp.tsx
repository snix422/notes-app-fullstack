import { SubmitHandler, useForm } from "react-hook-form"
import Title from "../components/Title/Title";
import { useState } from "react";
import { Form, Input, MainWrapper,Button } from "./SignUp.style";


interface SignUpInputs {
    email:string,
    password:string,
    confirmPassword:string,
    name:string
}

const SignUp = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<SignUpInputs>();
    const [error,setError] = useState("")

    const onSubmit : SubmitHandler<SignUpInputs> = (data) => {
        console.log(data)
        if(data.password !== data.confirmPassword){
            setError("Hasła nie są takie same");
            return
        }
    }

    return(
        <MainWrapper>
            <Title text="Rejestracja" variant="large" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("email")} type="text" placeholder="Wpisz e-mail" />
                {errors.email && <span>{errors.email.message}</span>}
                <Input {...register("password")} type="password" placeholder="Wpisz hasło" />
                {errors.email && <span>{errors.password?.message}</span>}
                <Input {...register("confirmPassword")} type="password" placeholder="Potwierdź hasło" />
                {errors.password && <span>{errors.confirmPassword?.message}</span>}
                <Input {...register("name")} type="text" placeholder="Wpisz imię" />
                {errors.name && <span>{errors.name.message}</span>}
                <Button type="submit">Zarejestruj się</Button>
                {error && <span>{error}</span>}
            </Form>
        </MainWrapper>
    )
}

export default SignUp