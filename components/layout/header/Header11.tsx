import Link from 'next/link'
import styles from '../styles.module.css'

export default function Header11({ scroll, isMobileMenu, handleMobileMenu, handleSearch, isSearch }: any) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenu) {
      handleMobileMenu(); // Close mobile menu after clicking
    }
  };

  return (
    <>
      <header className="header-style-11">
        <nav className={`navbar navbar-expand-lg navbar-light w-100 ${scroll ? 'navbar-stick position-fixed top-0' : ''}`}>
          <div className="container-fluid">
            <Link className={`navbar-brand pe-4 ${styles.logo}`} href="/"><img src="/assets/imgs/template/graixl-logo.png" alt="" /></Link>
            <ul className="navbar-nav gap-1 align-items-lg-center m-auto">
              <li className={`nav-item ${styles.navItemPointer}`}>
                <a className="nav-link fw-medium" onClick={() => scrollToSection('about')}>About</a>
              </li>
              <li className={`nav-item ${styles.navItemPointer}`}>
                <a className="nav-link fw-medium" onClick={() => scrollToSection('product')}>Our Product</a>
              </li>
              <li className={`nav-item ${styles.navItemPointer}`}>
                <a className="nav-link fw-medium" onClick={() => scrollToSection('steps')}>How It Works</a>
              </li>
              <li className={`nav-item ${styles.navItemPointer}`}>
                <a className="nav-link fw-medium" onClick={() => scrollToSection('pricing')}>Pricing</a>
              </li>
              <li className={`nav-item ${styles.navItemPointer}`}>
                <a className="nav-link fw-medium" onClick={() => scrollToSection('faq')}>FAQ</a>
              </li>
              <li className={`nav-item ${styles.navItemPointer}`}>
                <a className="nav-link fw-medium" onClick={() => scrollToSection('contact')}>Contact</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <a onClick={handleMobileMenu} className="menu-tigger btn-navbar rounded-circle px-2 ms-4 d-flex align-items-center justify-content-center btn-menu d-lg-none d-inline-block">
                <svg width={30} height={24} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1={12} x2={30} y2={12} stroke="currentColor" strokeWidth={3} />
                  <path d="M5 22H30" stroke="currentColor" strokeWidth={3} />
                  <path d="M10 2H30" stroke="currentColor" strokeWidth={3} />
                </svg>
              </a>
            </div>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <div className={`offCanvas__info ${isMobileMenu ? 'active' : ''}`}>
          <div className="offCanvas__close-icon menu-close">
            <button onClick={handleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 24 24">
                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
              </svg>
            </button>
          </div>
          <div className="offCanvas__logo mb-20">
            <Link href="/"><img src="/assets/imgs/template/logo3.svg" alt="Logo" /></Link>
          </div>
          <div className="offCanvas__side-info mb-30">
            <ul className="navbar-nav navbar-nav-mobile">
              <li className="nav-item">
                <a className="nav-link fw-medium" onClick={() => scrollToSection('about')}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" onClick={() => scrollToSection('services')}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" onClick={() => scrollToSection('steps')}>How It Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" onClick={() => scrollToSection('pricing')}>Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" onClick={() => scrollToSection('faq')}>FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" onClick={() => scrollToSection('contact')}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`offCanvas__overly ${isMobileMenu ? 'active' : ''}`} onClick={handleMobileMenu} />
      </header>
    </>
  )
}