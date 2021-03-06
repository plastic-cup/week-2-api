test('the photos on the page change',function(assert){
  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  var photosAtFirst = [].slice.call(target.getElementsByClassName('pics')).map(function(element){
    return element.firstChild;
  });
  var done = assert.async();
  setTimeout(function(){
    var photosNow = [].slice.call(target.getElementsByClassName('pics')).map(function(element){
      return element.firstChild;
    });
    notEqual(photosAtFirst,photosNow);
    done();
  },6000);
});

test("Testthere an image on the page", function(assert){
  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  var done = assert.async();
  setTimeout(function(){
    var image = target.getElementsByTagName("img")[0].src;
    notEqual(image, "", "Woop Well done dyyyd");
    done();
  },200)
});

test("Test if there is a place to input a seerch term", function(){
  var iframe =document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  var inputt = target.getElementsByTagName('input')[0].type;
  notEqual(inputt,'',"Woop there is a input element!! Way to go!");
});

test("Test does the var tag change when hit find", function(assert){

  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  var done = assert.async();
  var tag1= target.tag;
  var tag2;
  setTimeout(function(){
    target.getElementsByTagName('button')[0].click();
  },6000);

    setTimeout(function(){
    tag2 = target.getElementById("input").value;
    console.log(tag2);
    notEqual(tag2, tag1, "Successs");
    done();
    },8000)
  });

test("old pics get deleted",function(assert){
  var done = assert.async();
  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  setTimeout(function(){
    for (var i = 0; i < 20; i ++){
      ok(target.getElementById('pic'+i).children.length < 2);
    }
    done();
  },8000);
});

test("input has an onkeydown function", function(assert){
  var done = assert.async();
  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  setTimeout(function(){
    notEqual(target.getElementById('input').parentNode.innerHTML.search("onkeydown"),-1, "input has an 'onkeydown'");
    done();
  },1000)
});

test("button has an autofocus", function(assert){
  var done = assert.async();
  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  setTimeout(function(){
    notEqual(target.getElementById('input').parentNode.innerHTML.search("autofocus"), -1, "button is autofocussed");
    done();
  },1000)
});
