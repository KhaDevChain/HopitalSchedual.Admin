const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

const isRunningFromAsar = process.mainModule && process.mainModule.filename.includes("app.asar");

const staticPath = isRunningFromAsar
  ? path.join(process.resourcesPath, "app.asar.unpacked", "dist")
  : path.join(__dirname, "dist");
console.log(`Serving static files from: ${staticPath}`);

if (!fs.existsSync(staticPath)) {
  console.error("ERROR: Static folder not found:", staticPath);
} else {
  console.log("Static folder found:", staticPath);
}

app.use(express.static(staticPath));

app.get("*", (req, res) => {
  const indexPath = path.join(staticPath, "index.html");
  if (!fs.existsSync(indexPath)) {
    console.error("ERROR: index.html not found:", indexPath);
    return res.status(500).send("Internal Server Error: index.html not found");
  }
  
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Error serving index.html:", err);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
