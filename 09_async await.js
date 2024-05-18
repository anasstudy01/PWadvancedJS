function downloader(url) {
  return new Promise((res, rej) => {
    console.log("Started downloading from", url);
    setTimeout(() => {
      console.log("Download completed");
      let downloadedData = "Dummy content";
      res(downloadedData);
    }, 4000);
  });
}

function writeFile(data) {
  return new Promise((res, rej) => {
    console.log("Started writing data", data);
    setTimeout(() => {
      console.log("Writing completed");
      // with the written content, whatever you want to do you can do
      let fileName = "Dummy.txt";
      res(fileName); // cb -> any callback
    }, 2000);
  });
}

function uploadFile(fileName, newUrl) {
  return new Promise((res, rej) => {
    console.log("Started uploading file", fileName, "on the url", newUrl);
    setTimeout(() => {
      console.log("Upload completed");
      // with the uploaded content, whatever you want to do you can do
      let uploadResponse = "SUCESSS";
      res(uploadResponse); // cb -> any callback
    }, 3000);
  });
}


async function execute(){
    console.log("we are inside the execute function");
    const downloadedData = await downloader("www.google.com");
    console.log(" data downloaded is ",downloadedData);
    const filename = await writeFile(downloadedData);
    console.log("file written is ",filename);
    const response = await uploadFile(filename,"drive.google.com");
    console.log("upload response is ", response);

    console.log("start");
    execute();
    console.log("end");
}