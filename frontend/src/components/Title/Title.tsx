import React from "react"
import { TitleStyled } from "./Title.style"


interface TitleProps {
    text:string
    variant?: "default" | "large" | "small"
}

const Title : React.FC<TitleProps>= ({text, variant = "default"}) => {
    return(
       <TitleStyled className={`title-${variant}`}>{text}</TitleStyled>
    )
}

export default Title