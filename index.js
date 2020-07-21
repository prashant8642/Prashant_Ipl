
const extra=require("./matchesWon");
const csvFilePath="../deliveries.csv";
csv()
.fromFile(csvFilePath)
    .then((jsonobj)=>{console.log(jsonobj);
});
