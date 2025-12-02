import express from "express";
import fs from "fs";
import qr from "qr-image";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());

app.post("/generate", (req, res) => {
  const url = req.body.url;

  fs.writeFileSync(path.join("data", "message.txt"), url);

  const qr_svg = qr.image(url);
  const qrPath = path.join("data", "qr_img.png");
  const out = fs.createWriteStream(qrPath);

  qr_svg.pipe(out);

  out.on("finish", () => {
    res.status(200).send({ message: "QR generated" });
  });

  out.on("error", (err) => {
    console.error(err);
    res.status(500).send({ message: "Failed to generate QR" });
  });
});

app.get("/qr", (req, res) => {
  res.sendFile(path.resolve("data/qr_img.png"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
