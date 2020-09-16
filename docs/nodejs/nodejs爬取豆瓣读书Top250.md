# nodejs爬取豆瓣读书Top250

需要用到的依赖：
* request  Node.js 第三方 HTTP 请求工具
* iconv-lite 用于在node当中处理各种奇特编码
* cheerio jquery核心功能的一个快速灵活实现

原文链接： https://book.douban.com/top250?start=0

实现对网址的爬取，获取当前页的书籍信息
```js
const originRequest = require('request')
const iconv = require('iconv-lite')
const cheerio = require('cheerio')

function request(url, callback) {
    const option = {
        encoding: null,
        url: url,
        headers: { 
            // 模拟浏览器
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36'
        }
    }
    originRequest(option, callback)
}
const lists = [];
function getList(start = 0) {
    let list = [];
    request('https://book.douban.com/top250?start='+ start, (err, res, body) => {
        const html = iconv.decode(body, 'utf8');
        const $ = cheerio.load(html)
        let books = $('.indent table tr');
        for(let i = 0; i < books.length; i++) {
            // 名字
            let name = $(books[i]).find('.pl2 a').text().trim();
            // 图片地址
            let img = $(books[i]).find('img').attr('src');
            // 具体描述
            let bookDesc = $(books[i]).find('p.pl').text().trim();
            // 星级
            let rating_num = $(books[i]).find('.rating_nums').text().trim();
            // 多少人评论
            let pl = $(books[i]).find('.star .pl').text().trim(); 
            // 引用文字
            let quote = $(books[i]).find('.quote').text().trim();
            list.push({name, img, bookDesc, rating_num, pl, quote});
        }
        lists.push(...list);
    });
}
```
读取250条并输入 `books.json`
```js
const originRequest = require('request')
const iconv = require('iconv-lite')
const cheerio = require('cheerio')
const fs = require('fs')

function request(url, callback) {
    const option = {
        encoding: null,
        url: url,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36'
        }
    }
    originRequest(option, callback)
}
const lists = [];
function getList(start = 0) {
    request('https://book.douban.com/top250?start='+ start, (err, res, body) => {
        const html = iconv.decode(body, 'utf8');
        const $ = cheerio.load(html)
        let books = $('.indent table tr');
        let list = [];
        for(let i = 0; i < books.length; i++) {
            // 名字
            let name = $(books[i]).find('.pl2 a').text().trim();
            // 图片地址
            let img = $(books[i]).find('img').attr('src');
            // 具体描述
            let bookDesc = $(books[i]).find('p.pl').text().trim();
            // 星级
            let rating_num = $(books[i]).find('.rating_nums').text().trim();
            // 多少人评论
            let pl = $(books[i]).find('.star .pl').text().trim(); 
            // 引用文字
            let quote = $(books[i]).find('.quote').text().trim();
            list.push({name, img, bookDesc, rating_num, pl, quote});
        }
        lists.push(...list);
        if(start == 225) { // 250条数据 每页25条 225就拿完了
            fs.appendFile('books.json', JSON.stringify(lists, null, '\t'), (err) => {
                if(err) return err;
                console.log('文件已被保存');
            })
            return;
        } else {
            getList(start + 25);
        }
    });
}
getList(0);
```

爬取电影Top250也是一样的思路，只是文档结构不一样。