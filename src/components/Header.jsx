import LogoHeader from "./LogoHeader";
import NavHeader from "./NavHeader";
export default function Header() {
  return (
    <header>
      <div className="header-container container d-flex space-between align-items-center">
        <LogoHeader />
        <NavHeader />
      </div>
    </header>
  );
}
