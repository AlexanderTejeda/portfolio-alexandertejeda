import ProfileCard from "../components/ProfileCard";
import Avatar from "../assets/Avatar.png";
import "../styles/Hero.css";

const Hero = ({onViewProjects}) => {
    return (
    <main> 

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

        <section className="introductionSide">
            <aside className="texside">
                <h1>Desarrollo web moderno y eficiente</h1>
                <p>
                    Construyo aplicaciones web que funcionan de verdad. Desde interfaces interactivas hasta backends sólidos, me enfoco en eficiencia, rendimiento y soluciones prácticas para los usuarios.
                </p>
            </aside>
            
            <button 
                className="ctaButton"
                onClick={onViewProjects} 
            >
                Ver proyectos
            </button>
        </section>

      
    </main>
    );
}


export default Hero;