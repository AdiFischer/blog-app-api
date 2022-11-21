import { MongoClient } from 'mongodb'
import 'dotenv/config'

const client = new MongoClient(process.env.MONGO_URI)//MC-class, imported and make a new instance of it
const database = client.db('blog')
export const posts = database.collection('posts')

client.connect()
console.log('connected to mongo')