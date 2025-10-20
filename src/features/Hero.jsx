import ProfileCard from "../components/ProfileCard";
import Avatar from "../assets/Avatar.png";
import "../styles/Hero.css";

const Hero = () => {
    return (
    <main> 
        <section className="hero">
            <aside className="texside">
                <h1>Desarrollo web moderno y eficiente</h1>
                <p>
                    Me especializo en crear aplicaciones web rápidas, limpias y centradas
                    en la experiencia del usuario. Transformo ideas en interfaces funcionales.
                </p>
            </aside>
            
            <button 
                className="ctaButton"
                onClick={() => console.log("¡Contáctame!")} 
            >
                Ver proyectos
            </button>
        </section>

        <section className="cardSide">
            <ProfileCard
                name="Alexander Tejeda"
                title="Web Developer"
                handle="alexdtejeda"
                status="Online"
                contactText="Contactame"
                avatarUrl={Avatar}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
            />
        </section>
    </main>
    );
}


export default Hero;