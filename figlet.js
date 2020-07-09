const figlet = require("figlet");
let newArr = process.argv.slice(2, process.argv.length);
figlet.text(newArr.join(' '), (error, data) => {
    if (error)
        console.log(error);
    else
        console.log(data);
});

