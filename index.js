const app = require("./src/app/app");
const db = require("./src/data/db");
require('./src/models');



db.sync({ force:false }).then(() => {
    console.log(`Base de datos  `)
    app.listen(5000, () => {
        console.log(`Server started on port`);
    });

}).catch((err) => {
    console.log("🚀 ~ file: index.js ~ line 13 ~ db.sync ~ err", err)


})








