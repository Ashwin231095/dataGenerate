const elasticsearch = require('elasticsearch');
const fs = require('fs');

const esClient = new elasticsearch.Client({
    host: 'https://search-apty-insights-development-es-ncg3eesqnivfzb4csusb2i6ov4.us-east-1.es.amazonaws.com',
    requestTimeout: 10 * 60 * 1000,
    headers: {
        'Content-Type': 'application/json'
    },
    log: 'error'
  });

  const bulkIndex = async function bulkIndex(data) {
    let bulkBody = [];

    data.forEach(item => {
      bulkBody.push({
        index: {
          _index: 'gazer_staging',
          _type: '_doc'
        }
      });

      bulkBody.push(item);
    });

    await esClient.bulk({body: bulkBody})
    .then(response => {
      console.log('here');
      let errorCount = 0;
      response.items.forEach(item => {
        if (item.index && item.index.error) {
          console.log(++errorCount, item.index.error);
        }
      });
      console.log(
        `Successfully indexed ${data.length - errorCount}
         out of ${data.length} items`
      );
    })
    .catch(console.error);
  };

  const test = async function test() {
    const articlesRaw = fs.readFileSync('../build/src/salesforceGazerEvents.json');
    const articles = JSON.parse(articlesRaw.toString());
    const batch = 10000
    for (let i = 0; i < articles.length;i+=batch){
        if(i+batch < articles.length) {
            await bulkIndex(articles.slice(i, i+batch));
        } else {
            await bulkIndex(articles.slice(i, articlesRaw.length));
        }
    }
  };

  test();