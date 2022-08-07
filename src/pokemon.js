import { useEffect, useState } from 'react';
import parse from 'html-react-parser'

function Names(){
    
    function loadNames(){
     
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=500&offset=0')
            .then((response) => response.json())
            .then((data) => setName(data.results));
            
    }
    const [names, setName] = useState([]);    
    useEffect(() => {loadNames()});    
    let namesHtml = '';   
    let pokeNames = {names};
    console.log(pokeNames);
    for (let i = 0; i < 500; i++) {
        
        if(pokeNames.names[i]){
            namesHtml+= '<option>'+pokeNames.names[i].name+'</option>';
        }        
    }
    return parse(namesHtml);
}

export default Names;


