import Image from "next/image";
import Button from "../elements/Button";

const Hero = () => {
  return (
    <section className="header-container">
      {/* <!-- Profile Image -->  */}
      <Image
        className="profile-image"
        src="/public/logo.pngs"
        width={150}
        height={150}
        alt="profile picture"
      />
      <h1>Hi!👋 I'm Blain, and I love</h1>

      <div className="content-text">
        <h2>Building Projects and collaborating with others</h2>
      </div>

      <Button path={"https://github.com/ZinxValkyria"} type="secondary" target>
        Dig into my universe
      </Button>
    </section>
  );
};

export default Hero;
