// call the UI elements
// call the form
bioForm= document.querySelector('form');

function verifyInput(inputID, errorID){
    const input=document.querySelector(inputID);
    const error=document.querySelector(errorID);
    if(input.value===''){
        error.style.display='block';
        setTimeout(function(){
            error.style.display='none'
        },4000);
    }else{
        error.style.display='none'
    }

}


bioForm.addEventListener('submit',function(e){
    verifyInput('#first-name', '#firstname-error');
    verifyInput('#last-name', '#lastname-error');
    verifyInput('#email', '#email-error');
    verifyInput('#password', '#password-error');


    e.preventDefault();
})