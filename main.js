var Dog = 0;
var Cat = 0;
var Cow = 0;
var Lion = 0;




function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_VpYPw5xN/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error ,result) {
   if (error) {
    console.error(error); } 
    else {
    console.log(result);
    random_number_r = Math.floor(Math.random() * 255 ) + 1;
    random_number_g = Math.floor(Math.random() * 255 ) + 1;
    random_number_b = Math.floor(Math.random() * 255 ) + 1;

    
    document.getElementById("result_audio").innerHTML = " Detected Dog - "+ Dog +", Detected Cat - "+Cat+", Detected Lion - "+Lion+", Detected Cow - "+Cow;
    document.getElementById("result_audio").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        
    document.getElementById("animal_voices").innerHTML = " Detected voice is of - "+ result[0].label;
    document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById("animal_images");

    if(result[0].label == "Dog"){
         Dog = Dog + 1;
        img.src = "bark.gif";
   }
   else if(result[0].label == "Cat"){
    Cat =  Cat + 1;
   img.src = "meow.gif";
   }
   else if(result[0].label == "Cow"){ 
    Cow = Cow + 1;
   img.src = "Za9e.gif";
   }
   else if(result[0].label == "Lion"){
    Lion = Lion + 1;
   img.src = "KTjXXX8gc.gif";
   }
   else{
    img.src = "listen.gif";
   }
} 
}
