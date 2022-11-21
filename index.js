import express from "express";
import cors from "cors"
// import { MongoClient } from 'mongodb'
import 'dotenv/config'

import { posts } from './mongoConnect.js'

import { addPost } from "./posts.js";

const app = express()
app.use(cors())
app.use(express.json())

// const client = new MongoClient(process.env.MONGO_URI)//MC-class, imported and make a new instance of it
// const database = client.db('blog')
// const posts = database.collection('posts')

// client.connect()
// console.log('connected to mongo')


// app.get('/', (req, res) => {
//     res.send('hello')
// })


app.listen(process.env.PORT, () => console.log(`listening to http://localhost:${process.env.PORT}....`))

//post - add 1 post item
//----- author ,date, text
// app.post('/', async(req, res) => {
//     // const newPost = {author: 'Jon', date: '2022-21-22', text: 'blah blah blah'}
//     // console.log('req.body ->', req.body)

//     await posts.insertOne(req.body)
//     res.send('item added')
// })

app.post('/', addPost)

//get all posts
app.get('/', async(req, res) => { //(req,res)-callback
    const allPosts = await posts.find().toArray()
    res.send(allPosts)
})