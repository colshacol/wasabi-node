const { getFile } = require("./dist/index.js")
const { readFileSync } = require("fs")
const mimeTypes = require("mime-types")

const main1 = async () => {
  const contentType = mimeTypes.lookup("./rebass-block.png") // image/png
  const file = readFileSync("./rebass-block.png", "") // buffer
  const content = new Buffer(file, "binary").toString("base64") // string

  console.log({ file, content, contentType })
}

const main0 = async () => {
  const result = await getFile({
    bucket: "podo",
    fileName: "foo.txt",
  })

  console.log({ result })
}

main1()
