import { Activity, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  ["Overview", "#overview"],
  ["Data", "#data"],
  ["Trends", "#trends"],
  ["UKF Method", "#method"],
  ["Results", "#results"],
  ["Performance", "#performance"],
  ["Conclusion", "#conclusion"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="shell nav-inner">
        <a className="brand" href="#top" aria-label="Measles UKF research dashboard home">
          <span className="brand-mark"><Activity size={18} aria-hidden="true" /></span>
          <span>Measles · UKF</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
