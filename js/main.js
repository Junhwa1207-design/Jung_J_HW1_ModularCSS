(() => {
    //makes an AJAX request using the Fetch API 
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {  
          console.log(data);
          function loadDataSet(data){
            document.querySelector('.profPanelText').innerHTML = data;
          }
          if(response.status === '404'){
            alert('NOT FOUND')
          }
            debugger;
            console.log(data);
            //handleData
            //here's where you would call the function that puts the pieces on the page

            //create an instance of the AJAX object
  let myReq = new XMLHttpRequest;


  //add an event handler so that we can track the stages of the request and respond accordingly
    myReq.addEventListener("readystatechange", handleRequest);
  
  //get the request ready to go / configure it with method and resourse request
    myReq.open('GET','../classData.json');
  
      //send the request off to the server
    myReq.send();
  
      // this is passive listener function - it gets invoked for every stage of the AJAX request. When the request is done and th data payload is returned from the server it passes that data to the handleDataSet function
    function handleRequest() {
      debugger;
  
      if (myReq.readyState === XMLHttpRequest.DONE) {
          // check status here and proceed
          if (myReq.status === 200) {
            debugger;
              // 200 means done and dusted, ready to go with the dataset!
            handleDataSet(myReq.responseText);
  
          } else {
              // probably got some kind of error code, so handle that 
              // a 404, 500 etc... can render appropriate error messages here
              console.error(`${myReq.status} : something done broke, son`);
          }
      } else {
          // request isn't ready yet, keep waiting...
          console.log(`Request state: ${myReq.readyState}. Still processing...`);
      }
  
  }
  console.log(data);


        })
    .catch((err) => {
        console.log(err);
    })

})();
