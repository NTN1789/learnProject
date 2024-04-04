import { useState } from "react"
import List from "./List"
import axios from "axios";


const Home = () => {
const [faixasField, setFaixasField] = useState({
    nome: '',
    album: '',
    artista: '',
    slug: '',
    id_categoria: ''

});


const [categoriasField, setCategoriasField] = useState({
    nome: '',
    descricao: ''

});



const changeCategoriaFildHandler = (e) => {

    setCategoriasField({
        ...categoriasField,
        [e.target.name]: e.target.value

    });
}

        



        const changeFaixasFieldHandler = (e) => {
           
            setFaixasField({
                ...faixasField,
                [e.target.name]: e.target.value
            
            });
        }

        const [loading,setLoading]=useState();



        const onSubmitCategoria = async (e) => {
            e.preventDefault();
            try {
                const response= await axios.post("http://127.0.0.1:8000/api/categoria", categoriasField);
                console.log(response)
                setLoading(true);
              
            } catch (err) {
                console.log("erro");
            }
        }
        if(loading){
            return <Home/>
        }
    



const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response= await axios.post("http://127.0.0.1:8000/api/faixas", faixasField);
            console.log(response)
            setLoading(true);
        } catch (err) {
            console.log("erro");
        }
    }
    if(loading){
        return <Home/>
    }


  return (
    <div className="container">
    <h2 className='w-100 d-flex justify-content-center p-3'>veja as melhores músicas da dupla caipira Tião Carreiro e Pardinho</h2>
        <div className='row'>
            <div className='col-md-4'>
                <h3>Adicionar músicas</h3>
                <form>
                    <div className="mb-3 mt-3">
                        <label className="form-label"> nome:</label>
                        <input type="text" className="form-control" id="nome" placeholder="digite o nome" name="nome" onChange={e => changeFaixasFieldHandler(e)} />
                    </div>
               
                    <div className="mb-3 mt-3">
                        <label className="form-label">Artista:</label>
                        <input type="text" className="form-control" id="artista" placeholder="digite o artista" name="artista" onChange={e => changeFaixasFieldHandler(e)} required/>
                    </div>

                    <div className="mb-3 mt-3">
                        <label className="form-label">detalhes</label>
                        <input type="text" className="form-control" id="slug" placeholder="digita os detalhes" name="slug" onChange={e => changeFaixasFieldHandler(e)} required/>
                    </div>

                    <div className="mb-3 mt-3">
                        <label className="form-label">digite o número da categoria:</label>
                        <input type="number" className="form-control" id="id_categoria" placeholder="digita o número da categoria que você quer salvar" name="id_categoria" onChange={e => changeFaixasFieldHandler(e)} required/>
                    </div>
                     
                    <button type="submit" className="btn btn-primary" onClick={e => onSubmitChange(e)}>Adicionar nova faixa</button>
                </form>
            
            
            
                <div className='col-md-4'>
                <p>criar uma categoria</p>
                <form >
                <div className="mb-3 mt-3">
                        <label className="form-label"> nome:</label>
                        <input type="text" className="form-control" id="nome" placeholder="digite o nome do album" name="nome" onChange={e => changeCategoriaFildHandler(e)} required />

                    </div>


                    <div className="mb-3 mt-3">
                        <label className="form-label"> descrição:</label>
                        <input type="text" className="form-control" id="descricao" placeholder="digite a descrição do album" name="descricao" onChange={e => changeCategoriaFildHandler(e)}  required/>
                        
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={e => onSubmitCategoria(e)}>Adicionar novo album</button>
                </form>

            </div>
            
            
            
            </div>

         

            <div className='col-md-8'>
                <List />
            </div>
        </div>
</div>
   
  )
}

export default Home