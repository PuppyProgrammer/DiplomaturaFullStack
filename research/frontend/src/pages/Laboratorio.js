import { useState, useEffect } from 'react';
import axios from 'axios';
import CriptidoItem from '../components/criptidos/CriptidoItem';
import '../styles/laboratorio.css';


const Laboratorio = (props) => {
    const [loading, setLoading] = useState(false);
    const [criptidos, setCriptidos] = useState([]);

    useEffect(() => {
        const cargarCriptidos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/criptidos');
            setCriptidos(response.data);
            setLoading(false);
        };

        cargarCriptidos();
    }, []);
    return (
        <main className="holder">
            <h2>El Laboratorio</h2>
            <div className="portadalab">
                <p className="lore">El laboratorio, la sede principal donde guardamos a todas las especies avistadas por el hombre captadas por sencillas camaras. Ante ustedes tendran 
                visualizado una lista catalogada de los "criptidos" mas conocidos y por conocer. Los hemos definido por su nombre, la clase y el paradero de los mismos. Podemos decir que la 
                clase fue categorizada en 3 tipos: amistoso, neutro y agresivo. Si bien es una escala facil de reconocer, no me gustaria estar cerca ni un momento de un criptido
                cuya clase representa una AMENAZA. Muchos de ellos se encuentran en nuestras instalaciones o habitats que hemos preparado en diversos puntos del mundo para su investigacion. 
                Aunque de vez en cuando, suele escaparse una que otra criatura, pero no se preocupen investigadores, haremos lo posible para hallar su paradero. De momento disfruten del catalogo
                brindado por la Research.
                </p>
                <span className="pdf">
                    <img src="/img/acromo2.png"></img>
                </span>
            </div>
            <div>
                <div>
                    {
                        loading ? (
                            <p>Cargando...</p>
                        ) : (
                            criptidos.map(item => <CriptidoItem key={item.id}
                                name={item.nombre} imagen={item.imagen}
                                type={item.clase} state={item.estado} />)
                        )
                    }
                </div>

            </div>

        </main>

    );
}

export default Laboratorio;