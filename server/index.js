const express = require('express');
const app = express();
const process=require('process');
const port = process.env.PORT || 3000;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});


// MongoDB
const { MongoClient, ServerApiVersion ,ObjectId} = require('mongodb');
const { log } = require('console');
const uri = 'mongodb+srv://anshu:123@mernbook.lwxoluw.mongodb.net/?retryWrites=true&w=majority';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB');

    // Create a collection of documents
    const bookCollection = client.db("BookInventory").collection("books");

    // Insert a book to the database using the POST method
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollection.insertOne(data);
        res.json({ message: 'Book uploaded successfully', result });
      } catch (error) {
        res.status(500).json({ error: 'Failed to upload book', details: error.message });
      }
    });

    // app.get("/all-books",async (req, res) =>{
    //     const books=await bookCollection.find();
    //     const result=await books.toArray();
    //     res.send(result)
    // })

    app.patch("/book/:id", async (req, res) =>{
        const id=req.params.id;
        // console.log(id);
        const updateBookData=req.body;
        const filter={_id: new ObjectId(id)}
        const options={upsert:true};
        const updateDoc={
            $set:{
                ...updateBookData
            }
        }

        //update
        const result=await bookCollection.updateOne(filter,updateDoc,options);
        res.send(result);


    })

    //delete a book data
    app.delete(("/book/:id"), async (req, res) =>{
        const id=req.params.id;
        const filter={_id: new ObjectId(id)}
        const result=await bookCollection.deleteOne(filter);
        res.send(result);
    })

    //find by catogery
    app.get("/all-books",async (req, res) =>{
       let query={}
       if(req.query?.category){
           query={category:req.query.category}
       }
       const result=await bookCollection.find(query).toArray();
       res.send(result);
    })

    //to get single book data
    app.get("/book/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id: new ObjectId(id)}
      const result=await bookCollection.findOne(filter);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  } finally {
    // Ensure that the client is properly closed
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
