 
 
 
 let byTag  = document.getElementById('byTag');
 let byId  = document.getElementById('byId');
 let byClass  = document.getElementById('byClass');
 let spans = document.getElementsByTagName('span');

 spans[0].style.borderColor = 'red';
 spans[1].style.borderColor = 'green';
 spans[2].style.borderColor = 'blue';




 byTag.addEventListener('keypress',function(){
     changeTag()
 })
 byId.addEventListener('keypress',function(){
    changeTag()
})
byClass.addEventListener('keypress',function(){
    changeTag()
})


 function changeTag(){
    let params = {
        active:true,
        currentWindow: true
    }

    chrome.tabs.query(params , function (tabs){
        let message = {
            byTag :byTag.value,
            byId :byId.value,
            byClass :byClass.value
        }
         chrome.tabs.sendMessage(tabs[0].id , message) 
    });

  }
  

