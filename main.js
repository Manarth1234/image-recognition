Webcam.set({
width: 350,
height: 350,
image_format: 'png',
png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_img" src="'+data_uri+'"/>';
    });
}

  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7GCM0d1-j/model.json',modelLoaded); 

 //classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded); //



function modelLoaded() {
    console.log("Model Loaded!");
}

function check() {
    img = document.getElementById("capture_img");
    classifier.classify(img, gotResults);
}

function gotResults(error,results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2);   
    }
}