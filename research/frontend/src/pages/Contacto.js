import {useState} from 'react';
import axios from 'axios';
import '../styles/contacto.css';
const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }
    return (
        <main className="holder contacto">
            <div className="formulario-contacto">
                <div>
                    <h2>Contacto</h2>
                    <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                        </p>
                        <p>
                            <label for="telefono">Telefono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea id="" cols="30" rows="10" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar"></input>
                        </p>
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

                </div>
                <p className="texto-contacto">
                Me llamo Albert Samad, el fundador de esta excelente instalacion. La cuspide de todo hallazgo cientifico que cambiara la mente humana 
                y la llevara a niveles trascendentales gracias a mis descubrimientos. Por aqui mis investigadores, tendran acceso a contactarnos y ser
                parte de la comunidad cientifica mas grande del universo. Unanse y sean bienvenidos una vez mas a la Research.
                </p>
                <img src="/img/alberto_samad.png"></img>

            </div>

        </main>
    
    );
}

export default Contacto;