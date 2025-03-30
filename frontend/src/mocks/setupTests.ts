
import { beforeAll, afterAll, afterEach } from "vitest";
import { server } from "./handlers";

beforeAll(() => server.listen()); // Uruchomienie MSW przed testami
afterEach(() => server.resetHandlers()); // Resetowanie handlerów po każdym teście
afterAll(() => server.close()); // Zatrzymanie MSW po testach