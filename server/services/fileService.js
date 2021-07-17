const fs = require("fs");
const config = require("config");
const File = require("../models/File");

class FileService {
  createDir(file) {
      const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`
    return new Promise((resolve, rejects) => {
      try {
          if(!fs.existsSync(file)){
              fs.mkdirSync(filePath)
              return resolve({message: "File was created"})
          } else {
            return resolve({message: "File already exist"})
          }
      } catch (error) {
        return rejects({ message: "File error" });
      }
    });
  }
}

module.exports = new FileService();
