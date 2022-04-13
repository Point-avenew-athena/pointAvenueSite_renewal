$(function () {
  console.log(3123231);

  $('.newsletter_wrap input[type=checkbox]').change(function(value) {
    var search = location.search.substring(1);
    console.log(search);
    let selected = [value.target.value];
    let objParams = {};
    if (search) {
      objParams = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
      console.log(objParams);
      selected.push(objParams.article)
    }
    console.log(objParams.article, selected);
    var searchParams = new URLSearchParams(window.location.search);
    if (objParams.article) {
      searchParams.set("article", `${objParams.article}%2${value.target.value}`);
    } else {
      searchParams.set("article", `${value.target.value}`);
    }
    
    
    // window.location.search = searchParams.toString();
  })
  
});