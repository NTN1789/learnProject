import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate ,useParams } from 'react-router-dom';
 
const Edit = () => {
    const {id}=useParams()
    const navigate = useNavigate();
    const home=()=>{
        navigate('/');
    }
 
    const [faixas, setFaixas] = useState({
      nome: '',
      artista: '',
      slug: '',
      id_categoria: ''
  
  });
  
 
    useEffect(()=>{
        fetchUser();
    },[id])
 
    const fetchUser=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/faixas/"+id);
         
            setFaixas(result.data.results)
        }catch(err){
            console.log("erro");
        }
    }
 
    const changeFaixasFieldHandler = (e) => {
        setFaixas({
            ...faixas,
            [e.target.name]: e.target.value
        });
      
    }
     
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://127.0.0.1:8000/api/faixas/"+id, faixas);
            navigate('/');  
        } catch (err) {
            console.log("erro");
        }
    }
 
    return(
        <div className="container">
            <h1>Edit Form</h1>
            <form>
                <div className="mb-3 mt-3">
                    <label className="form-label"> ID:</label>
                    <input type="text" className="form-control" id="id" placeholder="id" name="id" value={id} disabled />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label"> nome:</label>
                    <input type="text" className="form-control" placeholder="novo nome da música"  id='nome'  name="nome" value={faixas.nome} onChange={e => changeFaixasFieldHandler(e)} />
                </div>
               
                <div className="mb-3 mt-3">
                    <label className="form-label">artista:</label>
                    <input type="text" className="form-control" id="artista" placeholder="nome do artista" name="artista" value={faixas.artista} onChange={e => changeFaixasFieldHandler(e)}/>
                </div>

                <div className="mb-3 mt-3">
                        <label className="form-label">detalhes</label>
                        <input type="text" className="form-control" id="slug" placeholder="digita os detalhes" name="slug" onChange={e => changeFaixasFieldHandler(e)} required/>
                    </div>

                    <div className="mb-3 mt-3">
                        <label className="form-label">digite um número de  alguma categoria cadastrada:</label>
                        <input type="text" className="form-control" id="id_categoria" placeholder="digita um que esteja cadastrado" name="id_categoria" onChange={e => changeFaixasFieldHandler(e)} required/>
                    </div>
                <button type="submit" className="btn btn-primary" onClick={e=>onSubmitChange(e)}>Update</button>
            </form>
            <div className='container d-flex justify-content-center'>
                <button className='btn btn-primary' onClick={ home}>voltar</button>
            </div>
        </div>
    );
};

export default Edit;