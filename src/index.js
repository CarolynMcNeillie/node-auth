import { fastify } from "fastify"
import fastifyStatic from "fastify-static"
import path from "path"
import { fileURLToPath } from "url"

// ESM specific features: we need to define these ourselves
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = fastify()

async function startApp() {
    try {
        app.register(fastifyStatic, {
            root: path.join(__dirname, "public")
        })

        // app.get("/", {}, (req, res)  => {
        //     res.send({
        //         data: "hello world",
        //     })
        // })

        await app.listen(3000)
        console.log("🚀 Server listening at port: 3000")
    } catch (e) {
        console.error(e)
    }
}

startApp()