
 let previousTag = [], previousId = [], previousClass = []; 


 function changeColor(message , sender,sendResponse){
   //console.log(message);
   let byTag = document.getElementsByTagName(message.byTag);
   let byId = document.getElementsByTagName(message.byId);
   let byClass = document.getElementsByTagName(message.byClass);



//unsetiting the property
    for(let i = 0 ; i<previousTag.length ;i++){
      previousTag[i].classList.remove("highlightTag");
    }
    for(let i = 0 ; i<previousId.length ;i++){
      previousId[i].classList.remove("highlightId");
    }
    for(let i = 0 ; i<previousClass.length ;i++){
      previousClass[i].classList.remove("highlightClass");
    }

    //    setiting the property


    for(let i = 0 ; i<byTag.length ;i++){
      byTag[i].classList.add("highlightTag");
      
    }
  for(let i = 0 ; i<byId.length ;i++){
    byId[i].classList.add("highlightId");
  }
  for(let i = 0 ; i<byClass.length ;i++){
    byClass[i].classList.add("highlightClass");
  }

     
    previousTag = byTag;
    previousId = byId;
    previousClass = byClass;
 
 }
 
 chrome.runtime.onMessage.addListener(changeColor);

 var divStyle = document.createElement("div");
 divStyle.innerHTML = `
 <style>
 .highlightTag{
  border: red 5px solid;
  z-index: 100;
  border-radius: 20px;
  
 }
 .highlightId{
  border: green 5px solid;
  z-index: 2;
  border-radius: 20px;
  
 }
 .highlightClass{
  border: blue 5px solid;
  z-index: 1;
  border-radius: 20px; 
 
 } 
 </style>
   `;  
 document.body.appendChild(divStyle);
