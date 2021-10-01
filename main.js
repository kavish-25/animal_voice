function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7YQC8j6Ch/model.json',modelReady);
    
    }
    function modelReady(){
        classifier.classify(gotResults);
    
    }function gotResults(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
         random_r=Math.floor(Math.random()*255)+1;
         random_g=Math.floor(Math.random()*255)+1;
         random_b=Math.floor(Math.random()*255)+1;
         document.getElementById("result_label").innerHTML="I can Hear - "+results[0].label;
         document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+" % ";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        
        if(results[0].label=="bark"){
            img1.src="https://media4.giphy.com/media/m9pQ6KapT7Cq3DQ5DZ/200.gif";
            img2.src="cat.png";
            img3.src="images.jpg";
        }
        else if(results[0].label=="cat"){
            img1.src="";
            img2.src="https://c.tenor.com/ZhfMGWrmCTcAAAAM/cute-kitty-best-kitty.gif";
            img3.src="aliens-03.png";
        
        }
        else if(results[0].label=="roar"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
           
        }
        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
        
        }
        
        }
        }
        
    