import express from "express";
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send('hello')
})
const PORT = 3030

app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}....`))