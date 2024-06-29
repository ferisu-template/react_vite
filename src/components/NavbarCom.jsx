import { navlinks } from "../dist/index";
import "../dist/script.js";

const NavbarCom = () => {
  const menutoggle = document.querySelector(".menu-toggle input");
  const nav = document.querySelector("nav ul");
  menutoggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
  });
  return (
    <nav>
      <div className="navlogo">
        <h3>Feri Sus</h3>
      </div>
      <ul>
        {navlinks.map((link) => (
          <li key={link.id}>
            <a href={link.path}>{link.text}</a>
          </li>
        ))}
      </ul>
      <div className="menu-toggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
export default NavbarCom;
