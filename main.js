 function startclassification()
 {
     navigator.mediaDevices.getUserMedia({audio : true})
     classifier = ml5.soundClassifier('' , modelReady);

 }

 function modelReady()
 {
     classifier.classify(gotresult);
 }

  function gotresult(error , results)
  {
      if(error){
          console.error(error);
        }else
        {
            console.log(results);

            random_number_1 = Math.floor(Math.random() * 255) + 1 ;
            random_number_2 = Math.floor(Math.random() * 255) + 1 ;
            random_number_3 = Math.floor(Math.random() * 255) + 1 ;

            document.getElementById("text").innerHTML = " I Can Hear -" + results[0].label;
            document.getElementById("text").style.color = "rgb(" + random_number_1 + "," + random_number_2 + "," + random_number_3 + ")";


            img = document.getElementById('img_of_sound');

            if(result[0].label == "cat")
            {
                img.src = ('cat.jpg');
            } else if (result[0].label == "cow"){
                img.src = ('cow.jpg');
            
            } else if (result[0].label == "lion")
            {
                img.src=('lion.jpg');

            } else if(result[0].label == "dog")
            {
                img.src = ('dog.jpg');
            }
        
            
            


        }

      

      

  }