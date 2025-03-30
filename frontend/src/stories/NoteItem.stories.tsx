import { Meta, StoryObj } from "@storybook/react";
import NoteItem from "../components/Notes/NoteItem";
import { Note } from "../types/type";

export default {
    title:"Components/Notes/NoteItem",
    component:NoteItem,
    argTypes:{
        data:{
            control:"object"
        },
        removeNote:{action:"removeNote clicked"}
    }
} satisfies Meta<typeof NoteItem>

type Story = StoryObj<typeof NoteItem>

const sampleNote: Note = {
    id: "1",
    title: "Przykładowa notatka",
    content:"Przykładowa notatka - kontent",
    category: "Praca",
  };

export const Default : Story = {
    args:{
        data:sampleNote,
        removeNote: (id:string) => console.log(`Usunięto notatkę o id ${id}`)
    }
}

export const LongNote : Story = {
    args:{
        data:{
            ...sampleNote,
            title:"Bardzo długa nazwa notatki, która przekracza standardową długość",
            content:"Bardzo długi opis , który przekracza standardową długość , lorem sdfadasdasdwadasdasdasdsadsadaadsasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
        },
        removeNote: (id:string) => console.log(`Usunięto notatkę o id ${id}`)
    }
}

export const DifferentCategory : Story = {
    args:{
        data:{
            ...sampleNote,
            category:"Osobiste"
        },
        removeNote: (id:string) => console.log(`Usunięto notatkę o id ${id}`)
    }
}

export const WithoutCategory: Story = {
    args: {
      data: {
        ...sampleNote,
        category: "",
      },
    },
  };

export const LongCategory : Story = {
    args:{
        data:{
            ...sampleNote,
            category:"Podróże małe i duże laslalal"
        },
        removeNote: (id:string) => console.log(`Usunięto notatkę o id ${id}`)
    }
}

export const LargeNoteSizeAndFont : Story = {
    args:{
        data:sampleNote,
        size:"large",
        fontSize:"large"
    }
}

export const SmallNoteSizeAndFont : Story = {
    args:{
        data:sampleNote,
        size:"small",
        fontSize:"small"
    }
}