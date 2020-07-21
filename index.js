
const extra=require("./matchesWon");
const csvFilePath="../data.json";
csv()
.fromFile(csvFilePath)
    .then((jsonobj)=>{console.log(jsonobj);
});