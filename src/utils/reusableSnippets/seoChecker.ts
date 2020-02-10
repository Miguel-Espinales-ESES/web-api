const seochecker = require('seo-checker');

export default class CheckSEO {
  url: string
  
  constructor({
    url = ''
  }){
    this.url = url
  }

  async checkSEO () {
    return new Promise((resolve, reject) => {
      seochecker.load(this.url, function (summary: any) {
        if(!summary) { // response will be false on error
          reject('We could not analyze your website. Contact us for a personal evalutaion')
        } else {
          const data = seochecker.meta(summary)
          resolve(data)
        }
      });
    })
  }
}

