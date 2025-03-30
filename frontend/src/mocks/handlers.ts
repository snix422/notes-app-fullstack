import { http, HttpResponse } from "msw";  // Importowanie rest i setupWorker
import { setupServer } from "msw/node";

export const handlers = [
  http.get("/products", () => {
    const mockProducts = [
      { id: 1, name: "Product 1", price: 100, category: "Electronics" },
      { id: 2, name: "Product 2", price: 200, category: "Furniture" }
    ];

    return HttpResponse.json(mockProducts,{
      status:200
    });
  }),
];

// Tworzymy serwer MSW w przypadku pracy w przeglądarce (worker)

export const server = setupServer(...handlers);
