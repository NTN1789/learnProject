
import { useState,useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
export const Categoria = () => {

    const [categoriaData,setCategoriaData] = useState([]);

  useEffect(() => {
      fetchData();
  }, [])
  
  const home=()=>{
    Navigate('/');
}
  
  
    const fetchData = async () => {
        try{

          
          const resultado = await axios("http://127.0.0.1:8000/api/categoria");
         
          setCategoriaData(resultado.data.results);
        } catch(err){
              console.log("erro");
        }
    }

    console.log(categoriaData)
   
  return (

    
    <div>
      <h1>categorias das músicas e album</h1>
        {categoriaData.map((item)=>{
            return(
                <div>
                    <h1>{item.nome}</h1>
                    
                </div>




            )
        }
        )}

<div className='container d-flex justify-content-center'>
            <div><button className='btn btn-primary' onClick={home}>voltar </button></div>
        </div>
        
        </div>
  )
}
