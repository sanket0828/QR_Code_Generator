import express from 'express';
import fs from 'fs';
import qr from 'qr-image';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('./')); 

app.post('/generate', (req, res) => {
  const url = req.body.url;


  fs.writeFileSync('message.txt', url);

  const qr_svg = qr.image(url);
  const qrPath = path.join('./qr_img.png');
  const out = fs.createWriteStream(qrPath);

  qr_svg.pipe(out);

  out.on('finish', () => {
    res.status(200).send({ message: 'QR generated' });
  });

  out.on('error', (err) => {
    console.error(err);
    res.status(500).send({ message: 'Failed to generate QR' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
