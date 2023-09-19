const fs = require('fs')
const path = require('path')

function getUploadDirName(){
  const date = new Date();
  let month = Number.parseInt(date.getMonth()) + 1;
  month = month.toString().length > 1 ? month : `0${month}`;
  const dir = `${date.getFullYear()}${month}${date.getDate()}`;
  return dir;
}

function getUploadFileExt(name) {
  const ext = name.split('.');
  return ext[ext.length - 1];
}

function getUploadFileName(name){
  const ext = getUploadFileExt(name)
  const num = Math.floor(Math.random() * 1000)
  const stamp = Date.now();
  const result = `${stamp}${num}.${ext}` 
  return result;
}

const beforeUpload = (name, file,app) => {
  const dirName = getUploadDirName()
  const fileName = getUploadFileName(file.newFilename)
  // 最终要保存到的文件夹目录
  const dir = path.resolve(__dirname, `../public/upload/${dirName}`)
  // // 检查文件夹是否存在如果不存在则新建文件夹
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  // 覆盖文件存放的完整路径(保留原始名称)
  file.filepath = `${dir}/${fileName}`
  file.newPath = `${dirName}/${fileName}`
}

module.exports = beforeUpload
