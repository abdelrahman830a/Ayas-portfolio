
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        target='_blank'
        href="https://www.linkedin.com"
        className="hover:opacity-50 transition duration-200 ease-in-out" rel="noreferrer">
          <img src="../assets/linkedin.png" alt="linkedin" />
        </a>
      <a
        target='_blank'
        href="https://www.linkedin.com"
        className="hover:opacity-50 transition duration-200 ease-in-out" rel="noreferrer">
          <img src="../assets/twitter.png" alt="twitter" />
        </a>
      <a
        target='_blank'
        href="https://www.facebook.com"
        className="hover:opacity-50 transition duration-200 ease-in-out" rel="noreferrer">
          <img src="../assets/facebook.png" alt="facebook" />
        </a>
      <a
        target='_blank'
        href="https://www.instagram.com"
        className="hover:opacity-50 transition duration-200 ease-in-out" rel="noreferrer">
          <img src="../assets/instagram.png" alt="instagram" />
        </a>
        
    </div>
  );
}

export default SocialMediaIcons