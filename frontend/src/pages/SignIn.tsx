import { SubmitHandler, useForm } from "react-hook-form"
import Title from "../components/Title/Title";
import { useState } from "react";
import { Button, Form, Input, MainWrapper } from "./SignIn.style";

interface SignUpInputs {
    email:string,
    password:string,
}

const SignIn = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<SignUpInputs>();
    const [error, setError] = useState("")

    const onSubmit : SubmitHandler<SignUpInputs> = (data) => {
        console.log(data)
      
    }

    return(
        <MainWrapper>
            <Title text="Logowanie" variant="large" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("email")} type="text" placeholder="Wpisz e-mail" />
                {errors.email && <span>{errors.email.message}</span>}
                <Input {...register("password")} type="password" placeholder="Wpisz hasło" />
                {errors.email && <span>{errors.password?.message}</span>}
                <Button type="submit">Zaloguj się</Button>
            </Form>
        </MainWrapper>
    )
}

export default SignIn