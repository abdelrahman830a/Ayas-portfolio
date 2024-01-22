import SocialMediaIcons from "../components/SocialMediaIcons"
const Footer = () => {
  return (
    <footer className="h-24 bg-red pt-10 flex items-center">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />

        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">Aya Rashwan</p>
          <p className="font-playfair text-md text-yellow">©2024 Zaitoun. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer