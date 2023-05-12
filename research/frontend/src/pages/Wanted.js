import '../styles/wanted.css';

const Wanted = (props) => {
    return (
        <main className="holder">
            <div className="buscaimg">
                <img src="/img/shauntal3.png"></img>
                <span className="fotobusca">
                    <img src="/img/mega50.png"></img>
                </span>
            </div>
            <div className="textoswanted">
                <p className='shauntalpresentacion'>
                    Soy la catalagodora Y, bienvenidos a la seccion Wanted, aqui encontraran todos los datos correspondientes a la especie perdida de esta semana. Se ve que 
                    hoy se ha perdido Carcharocles Megalodon, o mas conocido como Megalodon, el gran Apex Predator que sigue cazando por nuestros mares cuan valiente depredador.
                    Por aqui brindamos una foto del especimen junto a una pequeña ficha tecnica que servira de ayuda para su posible recaptura.
                </p>
                <p className="biowanted">
                El megalodón o megalodonte es una especie extinta de tiburón que vivió entre hace 19,8 y 2,6 millones de años, aproximadamente, durante el Cenozoico (de inicios del Mioceno​ hasta el final del Plioceno).
                Anteriormente se pensaba que era miembro de la familia Lamnidae y pariente cercano del gran tiburón blanco (Carcharodon carcharias).
                Sin embargo, actualmente existe un consenso casi unánime de que pertenece a la familia extinta Otodontidae, que se separó de la ascendencia del gran tiburón blanco durante el Cretácico temprano.
                La mayoría de las estimaciones del tamaño del megalodonte se extrapolan de los dientes; con estimaciones de longitud máxima de hasta 18 metros y estimaciones de longitud promedio de 10,5 metros.
                Las estimaciones sugieren que sus grandes mandíbulas podrían ejercer una fuerza de mordida de hasta 110,000 a 180,000 newtons.
                De las dimensiones de la mandíbula reconstruida, se supuso que C. megalodon podría haberse aproximado a los 30 metros de longitud total.
                </p>
            </div>



        </main>

    );
}

export default Wanted;