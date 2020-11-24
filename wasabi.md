# Wasabi Node

![](https://i.imgur.com/aWJNeXz.png)

![](https://i.imgur.com/O7IuaJs.png)

The primary way AWS suggests for you to provide your keys is [inconvenient](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html), to say the least. Luckily, AWS can also read your keys from [environment variables](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html), making this process much easier for us.

[aws-sdk](https://aws.amazon.com/sdk-for-node-js/)

[AWS S3 Docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)

```sh
yarn add aws-sdk dotenv
```

## Upload a File

Create a `.env` file in the root directory of your codebase.

```sh
AWS_ACCESS_KEY_ID="ABCDEFGHIJKLMNOPQRST"
AWS_SECRET_ACCESS_KEY="aBcDeFgHiJkLmNoPqRsTuVwXyZ986543210"
AWS_DEFAULT_REGION="us-west-2"
```

Create a `index.js` file in the root directory of your codebase.

```js
require('dotenv').config()
const AWS = require('aws-sdk')

const endpoint = new AWS.Endpoint("s3.wasabisys.com")
const storage = new AWS.S3({ endpoint })

const options = {
  // The name of the bucket we intend to upload to.
  Bucket: "podo",
  // The name of the file we are uploading.
  Key: name,
  // The contents of the file we are uploading.
  Body: content,
}

const afterSave = (error, data) => {
  if (error) return console.log("ERROR:", error)
  console.log("SUCCESS.")
}

storage.putObject(options, afterSave)
```