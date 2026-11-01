import "../styles/hamburgerMenu.css";

type HamburgerMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function HamburgerMenu({ isOpen, setIsOpen }: HamburgerMenuProps) {
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      className="hamburger-menu"
      type="button"
      aria-label={isOpen ? "Stäng menyn" : "Öppna menyn"}
      aria-expanded={isOpen}
      aria-controls="primary-navigation"
      onClick={toggle}
    >
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </button>
  );
}

export default HamburgerMenu;
