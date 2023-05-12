import '../styles/principal.css';

const Principal = (props) => {
    return (
        <main className="holder">
            <div className="portada">
                <img src="img/acromo2.png"></img>
                <img src="img/lab.gif"></img>
                <img src="img/shauntal2.png"></img>
            </div>
            <div style={{ marginBottom: "20px" }}></div>
            <div className="principal">
                <div className="titulos">
                    <h2>Bienvenidos a la Research</h2>
                    <h3>Recientemente hemos abierto nuestras puertas al mundo exterior, bienvenidos a "La Research".
                        Un laboratorio/centro de estudio y cautiverio de las diversas exoticas criaturas conocidas
                        comunmente con la palabra clave de "criptidos" (credito a nuestros magnificos terminos).
                        Por aqui mis pequeños investigadores encontraran pruebas de que estas especies existen, y daremos a
                        conocer su biologia con el fin de enriquecer sus mentes.
                    </h3>
                </div>
                <div className="content">
                    <p>
                        Como pueden ver debajo de este cuadro de dialogo, encontraran 2 secciones las cuales la primera
                        anunciara novedades y noticias acerca de algun nuevo criptido descubierto
                        y otras cuestiones. A su derecha hemos creado lo que llamamos Cartel de "Se Busca". En ese espacio
                        aparecera alguna especie en estado de fuga por razones desconocidas al publico.
                    </p>
                </div>
                <div style={{ margin: "20px" }}></div>
                <div className="Noticia">
                    <div className="noticias">
                        <h4>Noticias</h4>
                        <ul className="lista">
                            <li><a href="https://www.youtube.com/watch?v=gZxGGQc_hRI" target="_blank" rel="noreferrer">Buceadores Japoneses logran filmar en vivo un especimen de Calamar
                                Gigante en las costas de Japon</a></li>
                            <li><a href="https://oceanservice.noaa.gov/facts/bloop.html" target="_blank" rel="noreferrer">
                                Qué es The Bloop?</a></li>
                            <li><a href="https://www.youtube.com/watch?v=U7Ntx-rrVxw&t=396s" target="_blank" rel="noreferrer">Sonidos extraños captados en el trecho más profundo de la Tierra</a></li>
                        </ul>
                    </div>
                    <div className="sebusca">
                        <a href="/wanted" target="" rel="noreferrer">
                            <img src="/img/megalodon.png"></img>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Principal;