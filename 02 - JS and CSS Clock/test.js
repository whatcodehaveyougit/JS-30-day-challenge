

promiseArray = [];
for (image in this.images) {
  promiseArray.push(fetch(image))
}

let attchs = [];
Promise.all(promiseArray).then(function(response){
  promiseArray.map(
    const file = fs.createWriteStream("file.jpg");
    response.body.pipe(file)
    file.on("finish", function() {
        fs.readFile("file.jpg", function(err, attachedFile){
           attchs.push(new mailgun.Attachment({data: attachedFile, contentType: 'image/jpg'}));
        })
  )
)}).then(function(data){
  const data = {
    from: process.env.EMAIL_ACCOUNT,
    to: process.env.EMAIL_RECIPIENT,
    subject: "Facebook review title: " + title,
    text: review,
    attachment: attchs
  };
  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
});
