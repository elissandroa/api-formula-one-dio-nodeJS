import fastify from "fastify";

const server = fastify({ logger: true });
const teams = [
    { id: 1, name: "McLaren", base: "Working, United Kingdon" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" }
]

const drivers = [
    { id: 1, name: "Lewis Hamilton", team: "AMG Merces" },
    { id: 2, name: "Max Verstapen", team: "Red Bull Racing" },
    { id: 3, name: "Lando Noris", team: "McLaren" }
]

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200)

    return teams
})

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200)

    return drivers
})

server.listen({ port: 3333 }, () => {
    console.log("Rodando na porta 3333")
})
