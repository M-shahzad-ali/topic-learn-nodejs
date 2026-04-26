import express from 'express';
import cors from 'cors';
const PORT = 5000;
const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

const jokes = [
    {
    id: 1,
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!"
},
{
    id: 2,
    setup: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired!"  
},
{
    id: 3,
    setup: "What do you call fake spaghetti?",
    punchline: "An impasta!"
}
]


app.get('/api/jokes', (req, res) => {
    res.status(200).json({jokes:jokes});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
