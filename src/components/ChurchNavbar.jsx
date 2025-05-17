import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
  } from "./Navbar";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import logo from "../assets/logo.png"
const ChurchNavbar = () => {
    const navItems = [
        {
          name: "Prayer",
          link: "/prayer",
        },
        {
          name: "Members",
          link: "#pricing",
        },
        {
          name: "Readings",
          link: "/readings",
        },
        {
          name: "Events",
          link: "#contact",
        },
      ];
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      return (
        <>
            <div className="relative w-full">
          <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
              <NavbarLogo logo={logo} width={100} height={100}/>
              <NavItems items={navItems} />
            </NavBody>
    
            {/* Mobile Navigation */}
            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo logo={logo} width={100} height={100} />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </MobileNavHeader>
    
              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                {navItems.map((item, idx) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    to={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="block">{item.name}</span>
                  </Link>
                ))}
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>
        </>
      )

}

export default ChurchNavbar;