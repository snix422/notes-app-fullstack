
import { http, HttpResponse } from "msw";
import { describe, it, expect } from "vitest";
import { getProducts } from "../../api/getProducts";
import { server } from "../../mocks/handlers";
import { waitFor } from "@testing-library/react";
import { AxiosError } from "axios";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';  // Import mocka axios

describe("getProducts", () => {
    beforeAll(() => server.listen());
    // Resetowanie handlerów po każdym teście
    afterEach(() => server.resetHandlers());
    // Zamykanie serwera po wszystkich testach
    afterAll(() => server.close());
    it("should fetch products successfully", async () => {
        const result = await getProducts();

        waitFor(()=> expect(result.data).toEqual([
            { id: 1, name: "Product 1", price: 100 },
            { id: 2, name: "Product 2", price: 200 }
        ]))
       
    });

    it("should handle API error", async () => {
        server.use(
            http.get("/products", () => HttpResponse.error())
        );

        try {
            const result = await getProducts();
        } catch (error:any) {
            // Sprawdź, czy błąd jest instancją AxiosError i zawiera oczekiwane właściwości
            expect(error).toBeInstanceOf(AxiosError);
            expect(error.message).toMatch(/Network Error/);
        }   
    });
});


// Tworzymy instancję mocka dla axios
/*const mock = new MockAdapter(axios);

describe('getProducts function', () => {
    afterEach(() => {
        mock.reset(); // Resetujemy mocka po każdym teście
    });

    it('should return products data', async () => {
        // Mockowanie odpowiedzi z API
        mock.onGet('/products').reply(200, [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);

        // Wywołanie funkcji
        const data = await getProducts();

        // Sprawdzamy czy zwrócone dane są poprawne
        expect(data).toEqual([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
    });

    it('should throw error when API returns error', async () => {
        // Mockowanie odpowiedzi z błędem
        mock.onGet('/products').reply(500, { message: 'Internal Server Error' });

        // Sprawdzamy, czy funkcja rzuca błąd, zawierający status błędu
        await expect(getProducts()).rejects.toThrow('Request failed with status code 500');
    });

    it('should handle network error', async () => {
        // Mockowanie błędu sieciowego
        mock.onGet('/products').networkError();

        // Sprawdzamy, czy funkcja rzuca błąd sieciowy
        await expect(getProducts()).rejects.toThrow('Network Error');
    });
});*/
