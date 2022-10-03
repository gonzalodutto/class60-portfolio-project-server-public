const { Router } = require("express");

const { GoogleSpreadsheet } = require("google-spreadsheet");
const router = new Router();

const File_Link = "";

router.get("/USER1", async (req, res) => {
  const File_ID = "";
  const API_key = "";
  const sheet_ID = "";
  const doc = new GoogleSpreadsheet(File_ID);
  doc.useApiKey(API_key);
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheet_ID];
  const rows = await sheet.getRows();
  const result = rows.map((row) => {
    const [idRaw, title, priceRaw] = row._rawData[0].split(">");
    const id = "F" + idRaw;
    const price = priceRaw?.replace(",", ".");
    return { id, title, price };
  });

  res.send(result);
});

router.get("/USER2", async (req, res) => {
  const File_ID = "";
  const API_key = "";
  const sheet_ID = "";
  const doc = new GoogleSpreadsheet(File_ID);
  doc.useApiKey(API_key);
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheet_ID];
  const rows = await sheet.getRows();
  const result = rows.map((row) => {
    const [idRaw, title, price] = row._rawData[0].split(">");
    const id = "KZ1" + idRaw;
    return { id, title, price };
  });

  res.send(result);
});

router.get("/USER3", async (req, res) => {
  const File_ID = "";
  const API_key = "";
  const sheet_ID = "";
  const doc = new GoogleSpreadsheet(File_ID);
  doc.useApiKey(API_key);
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheet_ID];
  const rows = await sheet.getRows();
  const result = rows.map((row) => {
    const [idRaw, title, price] = row._rawData[0].split(">");
    const id = "FE" + idRaw;
    return { id, title, price };
  });

  res.send(result);
});

module.exports = router;
