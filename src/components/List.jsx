
import { useState ,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
const List = () => {
  const [faixaData,setFaixaData] = useState([]);

  useEffect(() => {
      fetchData();
  }, [])
  
  
  
    const fetchData = async () => {
        try{

          
          const resultado = await axios("http://127.0.0.1:8000/api/faixas");
         
          setFaixaData(resultado.data.results);
        } catch(err){
              console.log("erro");
        }
    }
   

    const handleDelete = async (id) => {
        console.log(id);
        await axios.delete("http://127.0.0.1:8000/api/faixas/"+id);

        const faixas = faixaData.filter((item)=>{
            return(
                    item.id !== id
            )
        })
            setFaixaData(faixas);
    }
 
  
  return (
    <div className="container">
        <h3>músicas</h3>
        <table className="table table-bordered">

        <thead>
           <tr>
              <th>nome</th>  
              <th>artista</th>
               <th>detalhes</th>
               <th>categoria</th> 
           </tr>
        </thead>
          <tbody>
              {faixaData.map((item,index)=>{
                  return(
                      <tr key={index}>
                        
                          <td>{item.nome}</td>
                          <td>{item.artista}</td>
                          <td>{item.slug}</td>
                          <td>{item.id_categoria}</td>
                          <td>
                          <NavLink to={`/view/${item.id}`} className="btn btn-success mx-2">View</NavLink>
                           <NavLink to={`/edit/${item.id}`}   className="btn btn-info mx-2">Edit</NavLink>
                           <NavLink to={`/categoria/${item.id}`} className="btn btn-info mx-2">categoria </NavLink> 
                            <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Excluir</button>
                            </td>
                      </tr>
                  )
              })
              }
          </tbody>
        </table>
        </div>
  )
}

export default List