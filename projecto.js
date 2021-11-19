

    //const  url="https://monkeyddragon356.github.io/jsonapihero/superhero.json";
    const  url="https://www.superheroapi.com/api.php/1002894710492692/"

    function buscar(){
            

            var  anime=document.getElementById("heroe").value;
            console.log("id:"+anime);

            var  element=document.getElementById("sh");
            element.innerHTML="" ;
            
            fetch(url+anime)
                .then(function(response){
                return response.json();    
            })

            .then(function(data){
                long=data.length;
                console.log("lenght:"+ long);
                console.log(long);
                console.log(data);
                

                console.log(data['image'].url);


                var im=document.getElementById("heroimg");
                console.log("imagen:"+im);
                im.src=data['image'].url;


                console.log(data[biography])

                var bio=document.getElementById('biography');                    
                bio.innerHTML="<b> </b>"+[0].biography; 

                console.log(data[stats])

                var stats=document.getElementById('stats');
                stats.innerHTML="<b> </b>"+[0].powerstats;

                
                console.log(data[connections])

                var connect=document.getElementById('connections');
                connect.innerHTML="<b> </b>"+[0].connections;

                /*
                var p4=document.getElementById('weight');bio
                


                p4.innerHTML="<b>Peso: </b>"+res[0].weight+"kg.";
                var p5=document.getElementById('des');
                p5.innerHTML="<b>Descripción: </b>"+res[0].des;

                */



            })


           
            .catch(function(error){
                console.log(error);           
            });
        
    
    }