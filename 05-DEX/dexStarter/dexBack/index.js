const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/tokenPrice", async (req, res) => {
  const { addressOne, addressTwo } = req.query;

  if (!addressOne || !addressTwo) {
    return res.status(400).json({
      error: "Both addressOne and addressTwo parameters are required",
    });
  }

  try {
    const responseOne = await Moralis.EvmApi.token.getTokenPrice({
      address: addressOne,
    });

    const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
      address: addressTwo,
    });

    const usdPrices = {
      tokenOne: responseOne.raw.usdPrice,
      tokenTwo: responseTwo.raw.usdPrice,
      ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice,
    };

    return res.status(200).json(usdPrices);
  } catch (error) {
    console.error("Moralis price fetch error:", error);
    return res.status(500).json({ error: error.message });
  }
});

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Backend server listening on port ${port}`);
  });
});
