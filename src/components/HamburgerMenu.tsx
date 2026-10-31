import "../styles/hamburgerMenu.css";

type HamburgerMenuProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function HamburgerMenu({ setIsOpen }: HamburgerMenuProps) {
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="hamburger-menu"
        type="button"
        aria-label="Toggle menu"
        onClick={toggle}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </>
  );
}

export default HamburgerMenu;
