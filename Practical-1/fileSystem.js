const { writeFile, readFile } = require("fs");
const readline = require("readline");
const fs = require("fs");
const path = require("path");
const { RSA_NO_PADDING } = require("constants");
var dirName = '';
var result = '';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//------ Create Directory ---------------
var createDirectory = () => {
    rl.question("Enter Directory Name : ", (ans) => {
        dirName = ans;
        const path = require("path");
        fs.mkdir(path.join(__dirname, dirName), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("created...");
            }
            repeat();
        });
        
    });

}
//------Remove Dir ----------------
var removeDirectory = () => {
    rl.question("Enter Dir Name : ", (ans) => {
        dirName = ans;
        fs.rmdir(path.join(__dirname, dirName), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Deleterd...");
            }
            repeat();
        })
        
    });
}
//----------Write File -----------------------
var fileName = '';
var content = '';
var writeInFile = () => {
    rl.question("Enter File Name : ", (ans) => {
        fileName = ans;
        rl.question("Enter File Content : ", (ans) => {
            content = ans;
            fs.writeFile(fileName + ".txt",content, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("File is Created...");
                }
                repeat();
            });
        })   
    });
}
//-------------Read File ---------------------
var readFilebyName = () => {
    rl.question("Enter File Name That you want to read : ", (ans) => {
        fileName = ans;
        fs.readFile(fileName+".txt","utf-8",(err,data) => {
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
            repeat();
        })
    });
}
//----------- Delete File ----------------------
var deleteFile = () => {
    rl.question("Enter File Name that you want to Delete : ", (ans) => {
        fileName = ans;
        fs.unlink(fileName+".txt", (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Deleted....");
            }
            repeat();
        })
    });
}
//---------- Append Data To File ---------------
var appendDataToFile = () => {
    rl.question("Enter File Name : ", (ans) => {
        fileName = ans;
        rl.question("Enter Data To Append : ", (ans) => {
            content = ans;
            fs.appendFile(fileName+".txt",content, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Data Appended ....");
                }
                repeat();
            })
        });
    });
}
//---------  Rename File -----------------------

var renameFile = () => {
    rl.question("Enter old File Name : ", (ans) => {
        fileName = ans;
        rl.question("Enter New File Name : ", (ans) => {
            newFileName = ans;
            fs.rename(fileName+".txt",newFileName+".txt", (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("File Rename Successfully ...");
                }
                repeat();
            });
        });
    });
}
//---------  instructions  ---------------------
var instructions = () => {
    console.log("1. For Create Directory");
    console.log("2. For Remove Directory");
    console.log("3. For Write File ");
    console.log("4. For Read File ");
    console.log("5. For Delete File");
    console.log("6. For Append data to file");
    console.log("7. For Update / Replace file with new data");
    console.log("8. For Rename File");
    console.log("9. For Exit");
}
var start = () => {
    rl.question("Enter Your Choice : ", (ans) => {
        if (ans === '1') {
            createDirectory();
            repeat();
        } else if (ans === '2') {
            removeDirectory();
        } else if (ans === '3') {
            writeInFile();
        } else if (ans === '4') {
            readFilebyName();
        } else if (ans === '5') {
            deleteFile();
        } else if (ans === '6') {
            appendDataToFile();
        } else if (ans === '7') {
            writeFile();
        } else if (ans === '8') {
            renameFile();
        } else if (ans === '9') {
            rl.close();
        } else {
            console.log(" : Worng choice : ");
            start();
        }
    });
}
var repeat = () => {
    instructions();
    start();
}
repeat();
