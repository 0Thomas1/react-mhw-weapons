const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();


app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api', async (req, res) => {
  res.send('Hello API!');
});
app.get('/api/?:type', async (req, res) => {
  let type = req.params.type;
  let q = `q={"type":"${type}"}`;
  let p = `p={"id":1,"name":1,"type":1,"attack":1,"slots":1,"elements":1,"crafting":1,"assets":1}`;
  let url = `https://mhw-db.com/weapons/?${q}&${p}`;
  console.log(url);
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 