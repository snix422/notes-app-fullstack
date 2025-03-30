import { ReactNode } from "react";
import AppProvider from "./providers/AppProvider";
import { render } from "@testing-library/react";


interface AllTheProviders {
    children: ReactNode
}

const AllTheProviders = ({children}: AllTheProviders) => {
    return <AppProvider>{children}</AppProvider>
}

const customRender = (ui:any,options:any = {}) => render(ui,{wrapper:AllTheProviders,...options});

export * from "@testing-library/react";

export { customRender as render };