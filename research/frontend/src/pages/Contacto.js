import '../styles/contacto.css';
const Contacto = (props) => {
    return (
        <main className="holder contacto">
            <div className="samid">
                <div>
                    <h2>Contacto</h2>
                    <form action="" method="" className="formulario">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name=""></input>
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="text" name=""></input>
                        </p>
                        <p>
                            <label for="telefono">Telefono</label>
                            <input type="text"></input>
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar"></input>
                        </p>
                    </form>
                </div>
                <p className="samadp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, enim quo iste harum
                labore aspernatur
                reiciendis debitis eligendi sint sapiente quibusdam soluta sit ad consequatur? Iusto sit debitis
                laudantium quia!
                Itaque aperiam nobis dicta, eligendi molestiae iure dignissimos sint rem tempore incidunt amet
                blanditiis sit, temporibus nisi officiis est, quibusdam aspernatur sed. Voluptatibus perferendis atque,
                magnam optio dolorem dicta blanditiis?
                </p>
                <img src="/img/alberto_samad.png"></img>

            </div>

        </main>
    
    );
}

export default Contacto;