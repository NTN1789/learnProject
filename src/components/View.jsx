import axios from 'axios';
import  { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';



const View = () => {
    const {id} = useParams();
  
    const [faixasData,setFaixasData] = useState([]);
  
    const navigate = useNavigate();

    useEffect(() => {

            fetchCategoria();
            
    },[id])

 



    const fetchCategoria = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/faixas/${id}`);
       
       
            setFaixasData(response.data.results);
        


            
        } catch (error) {
            console.log(error);
        }
    }
    


    console.log(faixasData);

    const home=()=>{
        navigate('/');
    }
 


  return (
    <div>
      <div className="container">
            <div className='row'>
                <div className='col-md-12'>
 
                    <h1> detalhes da música </h1>
                    <table className="table">
                        <thead>
                            <tr>
                                
                                <th>nome</th>
                              
              <th>artista</th>
               <th>detalhes</th>
               <th>  categoria</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                        {faixasData &&
                            <tr>
                               
                                <td>{faixasData.nome}</td>
                          <td>{faixasData.artista}</td>
                          <td>{faixasData.slug}</td>
                          <td>{faixasData.id_categoria}</td>
                              
                            </tr>
                        }
                        
                        </tbody>
                    </table>
                </div>
 
            </div>
        </div>
        <div className='container d-flex justify-content-center'>
            <div><button className='btn btn-primary' onClick={home}>voltar </button></div>
        </div>
        
        </div>
  )
}

export default View