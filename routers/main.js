const { default: axios } = require('axios');
const { response } = require('express');
const express = require('express');
const router = express.Router();
const WPAPI = require( 'wpapi' );
const wp = new WPAPI({ endpoint: 'https://www.pointavenue.com/wp-json/' });

router.get('/', (req, res) => {
  res.render('index');
})

router.get('/about-us', (req, res) => {
  res.render('about-us');
})

router.get('/scholarship', (req, res) => {
  // res.send('Main > Scholarship')
  res.render('scholarship');
})

router.get('/careers', (req, res) => {
  res.render('careers');
})

router.get('/news', async (req, res, next) => {
//   1. 3574 How to write a great Letter of Continued Interest &#038; A Successful Example
// 2. 3475 Newsletter On Point &#8211; Issue 6
// 3. 3469 Was 2020-2021 the most difficult college application season yet?
// 4. 3433 Newsletter On Point – Issue 5
// 5. 3419 Admissions Waitlist: What Is It? What Do You Do Next?
// 6. 2624 Meeting Point Avenue&#8217;s Top SAT Scorers
// 7. 2557 Understanding and Nurturing Your Child’s Creativity
  let MAIN_NEWS_POSTS_ID = [3574, 3475, 3469, 3433, 3419, 2624, 2557];
// id: 2548 - Sự kiện sắp tới tại Point Avenue: Workshop Tranh Biện &#038; Lễ hội Trung thu
// id: 2536 - Có gì hay tại Point Avenue: Khởi động Kỳ học Mùa Thu!
// id: 2348 - Có gì hay tại Point Avenue: Tiếp đón Đại sứ Hoàng gia Thái, Ngày Cộng đồng &#038; Tiệc Potluck
// id: 2293 - Có gì hay tại Point Avenue: Quốc khánh Mỹ &#038; Trại hè Đợt 2!
  let EVENTS_ID = [2548, 2536, 2348, 2293];

  
  // res.send('Main > News')
  await wp.posts().perPage(30).validatePath('/news').order('desc').param('lang', 'en')
  // wp.posts().param('categories', 19)//* testimonials 데이터 반환
  // wp.posts().param('categories', 1).param('per_page', 10)  //* newsletter 데이터 반환
  // wp.categories().id(223)
  // .posts()
  // .sticky(false)
  // .param( 'after', new Date( '2020-10-01' ) )
  // // .param( 'author', 1 )
  // .param( 'lang', 'en')
  .then(async function( data ) {
    let filteredData;
    let resultData = [];
    if(data){
      // async () => {
        filteredData = data.filter(item => MAIN_NEWS_POSTS_ID.some(id => id === item.id));

        for ( let i = 0; i < filteredData.length; i++){
          const featureMediaURL = `https://www.pointavenue.com/wp-json/wp/v2/media/${filteredData[i].featured_media}`;
          const imageData = await axios.get(featureMediaURL);

               // console.log("data :", data.data.guid.rendered)
          filteredData[i].imageURL = imageData.data.guid.rendered;
          // resultData.push(imageData.data.guid.rendered);
        }

        /*
        try {
          Promise.all([resultData]).then(async() => {
            console.log("resultData inside promise all: ", resultData); 
            // return dataSentToClient = {
            //   filteredData: filteredData,
            //   resultData: resultData
            // };
            // res.render('news', {data: filteredData, test: resultData})
            return res.status(200).json({data: filteredData, test: resultData})
          }).catch(e => {
            if(e) console.log(e);
          })
        } catch(e) {
          if(e) console.log(e)
        }
        */

        /* * 오리지날 되던거
        // const item = filteredData[0];

        // const featureMediaURL = `https://www.pointavenue.com/wp-json/wp/v2/media/${item.featured_media}`;
        // const imageData = axios.get(featureMediaURL).then(data => { console.log("data :", data.data.guid.rendered)});

        */
      // }
        

        
        // filteredData.forEach( async item => {
        //   const featureMediaURL = `https://www.pointavenue.com/wp-json/wp/v2/media/${item.featured_media}`;
        //   const imageData = await axios.get(featureMediaURL);
           
        //   resultData.push(imageData);
          
        // // try{
        // //   Promise.all([resultData]).then(data => {
        // //     console.log("data:", data);
        // //   })
        // // }catch (e){

        // // }
        // })

       

        
        // console.log("resultData inside if:", resultData)
        
      //  console.log("data: ", data);
    }
    // console.log('filteredData:', filteredData);
   
    
    // do something with the returned posts
    // console.log("data :", data._links.collection);
    // console.log("data :", data);
    // res.send(data);
    //* PA 웹사이트의 포스트 아이디
    let wpData = {
      // id: data.id,
      // categories: data.categories[0],
      // title: data.title.rendered,
      // content: data.content.rendered,
      // date: data.date_gmt,
      // excerpt: data.excerpt, 
    }
    // console.log("resultData test", resultData);
    // res.render('news', {data: filteredData, test: resultData}) 오리지날
    // res.render('news', dataSentToClient);
    // res.render('news', {data: wpData})

      try {
        Promise.all([resultData]).then(async () => {
          console.log("resultData inside promise all: ", resultData); 
          // return dataSentToClient = {
          //   filteredData: filteredData,
          //   resultData: resultData
          // };
          // res.render('news', {data: filteredData, test: resultData})
          res.render('news', {mainNews: filteredData})
          // return res.status(200).json({data: filteredData, test: resultData})
      }).catch(e => {
        if(e) console.log(e);
        next();
      })
    } catch(e) {
      if(e) console.log(e)
      next();
    }

}).catch(function( err ) {
    // handle error
    console.log(err);
    next();
});

})


module.exports = router;