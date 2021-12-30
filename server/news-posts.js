const router = require('./routes');
const fs = require('fs');
// const jsonContentOfNewsPosts = JSON.parse(fs.readFileSync('./dist/mailer-tester/assets/data/news-posts.json'));

const dataNewsPosts = require('../dist/mailer-tester/assets/data/news-posts');

// let newsStrem = fs.createWriteStream("./dist/mailer-tester/assets/data/news-posts.json", {flags:'w'});


const newPost = async (postContent) => {
  // console.log('jsonContentOfNewsPosts*************: ', )
  try {
    return fs.appendFile('./dist/mailer-tester/assets/data/news-posts.json', JSON.stringify(postContent), (err) => {
      if (err) {
        console.log('append err------------: ', err);
        throw err;
      }
    })
  } catch (error) {
    throw error
  }
}

router.get('/news', (req, res) => {
  console.log(dataNewsPosts)
  res.send(dataNewsPosts);
});

module.exports = newPost;
