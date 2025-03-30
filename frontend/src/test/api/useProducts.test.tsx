import { renderHook, waitFor } from '../../test-utils';
import { http, HttpResponse } from 'msw';
import useProducts from '../../hooks/useProducts';
import { server } from '../../mocks/handlers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';



/*const queryClient = new QueryClient();

// Wrapper do opakowania hooka w QueryClientProvider
const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

// Testy
describe('useProducts hook', () => {
    it('should return products data', async () => {
        // Symulowanie poprawnej odpowiedzi z API
        server.use(
            http.get('/products', () => {
                return HttpResponse.json([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
            })
        );

        const { result, waitFor } = renderHook(() => useProducts(), { wrapper });

        await waitFor(() => result.current.isLoading === false); // Czekamy, aż załaduje dane

        expect(result.current.data).toEqual([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
        expect(result.current.isLoading).toBe(false);
        expect(result.current.error).toBeUndefined();
    });

    it('should handle error', async () => {
        // Symulowanie błędu API
        server.use(
            http.get('/products', ( )=> {
                return HttpResponse.json({ message: 'Internal Server Error' });
            })
        );

        const { result, waitFor } = renderHook(() => useProducts(), { wrapper });

        await waitFor(() => result.current.isLoading === false); // Czekamy na zakończenie ładowania

        expect(result.current.data).toBeUndefined();
        expect(result.current.isLoading).toBe(false);
        expect(result.current.error).toBeInstanceOf(Error);
    });

    it('should handle loading state', async () => {
        // Symulowanie opóźnienia odpowiedzi
        server.use(
            http.get('/products', () => {
                return HttpResponse.json(
                  [{ id: 1, name: 'Product 1' }]
                );
            })
        );

        const { result } = renderHook(() => useProducts(), { wrapper });

        expect(result.current.isLoading).toBe(true);

        // Czekamy, aż załaduje dane
        await waitFor(() => result.current.isLoading === false);
        expect(result.current.data).toEqual([{ id: 1, name: 'Product 1' }]);
    });
});*/

describe("testing useProducts hook", () => {

    const queryClient = new QueryClient();
      
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
    beforeAll(() => server.listen()); // Uruchamia MSW przed testami
    afterEach(() => server.resetHandlers()); // Resetuje handlery po każdym teście
    afterAll(() => server.close())
    it("check if hook have contain properly values in data", async  () => {
     
        server.use(
            http.get('/products', () => {
                return HttpResponse.json([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
            })
        );
        const {result} = renderHook(() => useProducts(), {wrapper} );

        expect(result.current.isLoading).toBe(true);

        await waitFor(() => expect(result.current.isLoading).toBe(false));
       
        expect(result.current.data).toEqual([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
    })
    it("check if hook contain error", async () => {
       
        server.use(
            http.get('/products', () => {
                return HttpResponse.error();
                })
        );

        const { result } = renderHook(() => useProducts(), {wrapper} );


        await waitFor(() =>  expect(result.current.isLoading).toBe(false));

        /*if (result.current.error) {
            expect(result.current.error.message).toContain("Internal Server Error");
        } else {
            console.error("Error is undefined!");
        }*/
        console.log(result.current.error)
        expect(result.current.error).toBeDefined();
        
    })
})
