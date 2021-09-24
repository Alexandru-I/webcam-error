Webcam.set({
    width : 300,
    height : 350,
    image_format : 'png',
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function saveImage(){
    Webcam.snap(function(img){
  document.getElementById("result").innerHTML = '<img id = "snapshot" src = "' + img + '">';
    }
 )
}
//console.log(ml5.version);

 //var classifier = ml5

//https://teachablemachine.withgoogle.com/models/BG-bq-MVU//

