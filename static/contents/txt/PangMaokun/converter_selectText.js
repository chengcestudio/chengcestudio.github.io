/*
    遍历 ./select text/ 目录的文件夹 下的所有JSON文件
    合并成数据
    输出 /select text_all.json

 */
const fs = require('fs');
// @ 输出路径
const readFilesPath = '/select text/'
const outFilePath =__dirname + '/out_all_selectText.json';

/*-----
ref: Reading all files in a directory, store them in objects, and send the object
-----
https://stackoverflow.com/questions/10049557/reading-all-files-in-a-directory-store-them-in-objects-and-send-the-object
 */
var arr = [];

function readFiles(dirname, onFileContent, onError) {
    /*
    得到 ./select text/ 目录的文件夹 下的所有目录名称
    */
    fs.readdir(dirname, function(err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        /*遍历所有JSON---*/
        filenames.forEach((filename) => {
            const obj = require(dirname + filename);
            arr.push(obj)
        });
        /*---遍历所有JSON*/

        /*写入文件---*/
        fs.writeFile(outFilePath, JSON.stringify(arr), (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
        });
        /*----写入文件*/
    });
}
readFiles( __dirname + readFilesPath)

