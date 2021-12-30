const router = require('./routes');
const fs = require('fs');

const dataNewsPosts = require('../dist/mailer-tester/assets/data/news-posts');

const newPost = async (postContent) => {
  try {
    return await addNewPost(postContent);
  } catch (error) {
    throw error
  }
}

function addNewPost(newPost) {
  fs.readFile('./dist/mailer-tester/assets/data/news-posts.json',  (err, dataContent) => {
    if (err) {
      throw err;
    } else {
      let jsonFile = JSON.parse(dataContent);
      jsonFile.push(newPost)
      fs.writeFile('./dist/mailer-tester/assets/data/news-posts.json', JSON.stringify(jsonFile), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
    }

  })
}

router.get('/news', (req, res) => {
  console.log(dataNewsPosts)
  res.send(dataNewsPosts);
});

module.exports = newPost;
