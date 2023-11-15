import Nav from "./Nav";

// the header
export default function Header() {
  return (
    <header>
      {/* icon */}
      <div id="icon">
        <img src="icon.png" alt="Icon" />
      </div>

      <Nav />
    </header>
  );
}
