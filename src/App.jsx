import ProfileCard from "./components/ProfileCard";
import Avatar from "./assets/Avatar.png";
import "./styles/App.css";

function App() {
  return (
    <div >
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
    </div>
  );
}

export default App;