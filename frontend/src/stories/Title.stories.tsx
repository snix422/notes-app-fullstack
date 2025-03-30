
import Title from "../components/Title/Title";
import {Meta, StoryFn} from "@storybook/react"

export default {
    title:"components/Title",
    component:Title,
    argTypes:{
        text:{
            control:"text",
            description:"Tekst wyświetlony w nagłówku",
            defaultValue:"Test text"
        },
        variant:{
            control:"select",
            options:["default","large","small"],
            description:"Wariant tytułu (rozmiar czcionki)",
            defaultValue:"default"
        }
    }
} satisfies Meta<typeof Title>

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />

export const Default = Template.bind({})

Default.args = {
    text:"Domyślny tytuł",
    variant:"default"
}

export const Large = Template.bind({})

Large.args = {
    text:"Duży nagłówek",
    variant:"large"
}

export const Small = Template.bind({})

Small.args = {
    text:"Mały nagłówek",
    variant:"small"
}