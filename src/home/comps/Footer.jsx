const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <img
        src="imgs/ejandtn-logo.png"
        alt="Elijah James And The Nightmares logo"
        className="logo-footer"
      />
      <span>
        <a
          className="link"
          href="https://github.com/dreamingOfSoy/ejandtn-website-react"
          target="_blank"
          rel="noreferrer noopener"
        >
          Built using React by E. J. Mainwaring
        </a>
        <br />
        <br />
        All Rights Reserved Elijah James And The Nightmares &copy;
        <span className="copy-date">{year}</span>
      </span>
    </footer>
  );
};

export default Footer;
