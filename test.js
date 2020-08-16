// function focusblurtest() {
//     $('#input').focus();
//     /* do what you want to do */
//     $('#input').blur();
//   }

function enterkey() {
    if (window.event.keyCode == 13) {
        console.log(document.getElementById('input').value);
        // var in_string = document.getElementById('input').value
        var get_input = document.getElementById('input').value
        var in_string =  {'1' : get_input}
        document.getElementById('input').value = "";
        $.ajax({
            url: '',
            dataType: 'json',
            type: 'GET',
            data: JSON.stringify(in_string),
            contentType: 'application/json; charset=UTF-8'
        }).then((response) => {
            console.log(response['1'])
            var value = response['1']
            if(String(value) == '1' ){
                document.getElementById('output_div').innerText = get_input+' : 혐오댓글 입니다.';
            }
            else{
                document.getElementById('output_div').innerText = get_input+' : 정상댓글 입니다.';
            }
        });
    
}
}

document.addEventListener('DOMContentLoaded',function(){ // 버튼에 기능을 주는 함수
    var btn01 = document.querySelector('#input');
    btn01.addEventListener("keydown",enterkey);
 });


//  chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         let resMessage;

//         doClassify(request).then((response)=> {
//             resMessage = response;
//             sendResponse(resMessage);
//         });
//         return true;
//     }
// );

// function doClassify(comments) {
//     return $.ajax({
//         url: 'http://168.188.126.219:6007/classification',
//         dataType: 'json',
//         type: 'GET',
//         data: comments,
//         contentType: 'application/json; charset=UTF-8'
//     });
// }

var element = $('#square');

// when mouseover execute the animation
element.mouseover(function(){
  
  // the animation starts
  element.toggleClass('wobble animated');
  
  // do something when animation ends
  element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
   
   // trick to execute the animation again
    $(e.target).removeClass('wobble animated');
  
  });
  
});


