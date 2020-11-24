import { storage } from "./storage"

export const saveFile = (input) => {
  const afterSave = (error, data) => {
    if (error) return console.log("saveFile error:", error)
    console.log("saveFile done:", data)
  }

  const options = {
    Bucket: input.bucket,
    Key: input.fileName,
    Body: input.fileContent,
  }

  return storage.putObject(options, afterSave)
}
