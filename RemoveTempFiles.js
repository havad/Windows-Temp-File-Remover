var fs = require('fs-extra');

console.log("File is " + __filename);
console.log("Directory is " + __dirname);

process.chdir("E:\\");
console.log("now the working directory is " + process.cwd());

//for each file, check the last modified time and then remove it if it was last modified at 3:00 am
//it works but to be safe needs some checks that the files you are removing are actually what you want to remove
//odds of files on my machine in that directory not being the files I wanted deleted are slim but is still possible
fs.readdir(process.cwd(), function(err, files) {
    files.forEach(function(file) {
        fs.stat((process.cwd() + file), function(err, stats) {
            if(err) return console.log(err);
            var dateString = stats.mtime + "";
            var splitDateString = dateString.split(" ");

            //console.log(splitDateString[4]);

            var time = splitDateString[4];
            splitTime = time.split(":");
            
            if (splitTime[0] == "03" && splitTime[1] == 00) {
                //console.log(file + " " + time);

                //UNCOMMENTING THIS SECTION AND RUNNING THE CODE WILL REMOVE FILES. BE CAREFUL
                //USE AT OWN RISK
                /*
               fs.remove((process.cwd() + file), function(err) {
                   if(err) {
                       return console.error(err);
                   }
                   else {
                       console.log(file + " removed");
                   }
                   
               })
               */
            }
        })
    })
});