import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© Markus Bike Shop {currentYear} </p>
    </footer>
  );
};
