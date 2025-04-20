export interface Note {
    _id:string,
    title:string,
    content:string,
    category:string
}

export interface CreateNote {
    title:string,
    content:string,
    category:string
}

declare module 'styled-components' {
    export interface DefaultTheme {
      colors: {
        white: string;
        lightGrey: string;
        grey: string;
        darkGrey: string;
        black: string;
        success: string;
        error: string;
        warning: string;
        darkPurple: string;
        lightPurple: string;
        lightGreyBody:string,
        lightGreyNav:string,
        darkBlueLinks:string,
        solidBlueHoverLinks:string,
        darkGreyFont:string,
        searchBar:string
      };
      fontSize: {
        xxl: string;
        xl: string;
        l: string;
        m: string;
        s: string;
      };
    }
  }

  export type NotePayload = {
    title: string;
    description: string;
    category: string;
  };
