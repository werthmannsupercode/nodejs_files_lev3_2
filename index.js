const fs = require('fs');

if (fs.existsSync("./myfunnyfolder") && fs.existsSync("./what/isThis.txt")) {
    fs.rmdirSync("./myfunnyfolder")
    fs.unlinkSync("./what/isThis.txt")
    fs.rmdirSync("./what")
}

else {
    fs.mkdirSync("./myfunnyfolder")
    fs.mkdirSync("./what")
    fs.writeFileSync("./what/isThis.txt", "Ich bin eine Textdatei")
}
