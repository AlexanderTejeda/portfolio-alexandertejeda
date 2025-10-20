import "../styles/global.css";
import Hero from "../features/Hero";


const LandingPage = () => {
    return (
        <main>
            <section>
                <Hero />
            </section>

            <section>
                <h2>Mis proyectos</h2>
            </section>

            <section>
                <h2>Sobre mí</h2>
            </section>

            <section>
                <h2>Contacto</h2>
            </section>
        </main>
    );
}

export default LandingPage;