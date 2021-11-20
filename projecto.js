

    //const  url="https://monkeyddragon356.github.io/jsonapihero/superhero.json";
    const  url="https://www.superheroapi.com/api.php/1002894710492692/"

    function buscar(){
            console.log

            var  anime=document.getElementById("heroe").value;
            console.log("id:"+anime);
            
            fetch(url+anime)
                .then(function(response){
                return response.json();    
            })

            .then(function(data){
                console.log(data);
                

                console.log(data['image'].url);


                var im=document.getElementById("heroimg");
                console.log("imagen:"+im);
                im.src=data['image'].url;

                 
                console.log(data['biography']); 
            

                var bio=document.getElementById("biography"); 
                bio.innerHTML=("<i><b>Nombre:</b></i>"+data['biography']['full-name']);
                

                console.log(data['biography']); 
                
                var bio=document.getElementById("first"); 
                bio.innerHTML=("<i><b>Primera aparición:</b></i>"+data['biography']['first-appearance']);
  
                console.log(data['biography']); 
                
                console.log(data[stats])

                var statsf=document.getElementById("stats"); 
                statsf.innerHTML=("<i><b>Inteligencia:</b></i>"+data['powerstats']['intelligence']+"    <i><b>Fuerza:</b></i>"+data['powerstats']['strength']+"    <i><b>Velocidad:</b></i>"+data['powerstats']['speed']+ "   <i><b>Durabilidad:</b></i>"+data['powerstats']['durability']+ "    <i><b>Poder:</b></i>"+data['powerstats']['power'] ); 

                
                console.log(data[connections])

                var connec=document.getElementById("connections"); 
                connec.innerHTML=("<i><b>Grupos afiliados:</b></i>"+data['connections']['group-affiliation']);

                var connec=document.getElementById("relatives"); 
                connec.innerHTML=("<i><b>Relacionados:</b></i>"+data['connections']['relatives']);
            })


           
            .catch(function(error){
                console.log(error);           
            });
        
    
    }