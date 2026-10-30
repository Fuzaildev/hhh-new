import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react';
import Logo from '../ui/Logo';
import { container, buttonClass } from '../../styles/ui';

export default function Footer({ onOpen }) {
  return (
    <footer>
      <div
        className={`${container} footer-top grid grid-cols-2 gap-8 py-12 max-[760px]:[&>*:first-child]:col-span-2 max-[760px]:[&>*:first-child]:flex max-[760px]:[&>*:first-child]:flex-col max-[760px]:[&>*:first-child]:items-start max-[760px]:[&>*:first-child]:gap-3.5 max-[760px]:[&>.footer-ctas]:col-span-2 md:grid-cols-[1.3fr_.8fr_1fr_1.3fr] md:gap-10 md:py-16 lg:py-[90px]`}
      >
        <div className="footer-brand">
          <Logo />
          <p className="mt-5 text-base max-[760px]:m-0">
            Thoughtful care.
            <br />
            For a healthier tomorrow.
          </p>
          <nav className="mt-5 flex gap-2.5 max-[760px]:mt-0" aria-label="Social media">
            {[
              [Facebook, 'https://www.facebook.com/', 'Facebook', 19],
              [Instagram, 'https://www.instagram.com/', 'Instagram', 19],
              [Youtube, 'https://www.youtube.com/', 'YouTube', 20],
              [Linkedin, 'https://www.linkedin.com/', 'LinkedIn', 19],
            ].map(([Icon, href, label, size]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-[42px] w-[42px] place-items-center text-ink transition-colors hover:text-accent hover:[&>svg]:scale-110 [&>svg]:transition-transform"
              >
                <Icon size={size} />
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="mb-5 text-base font-semibold">Explore</h4>
          <Link to="/" className="my-3.5 block text-[15px] text-muted hover:text-accent">
            Home
          </Link>
          <Link to="/doctors" className="my-3.5 block text-[15px] text-muted hover:text-accent">
            Doctors
          </Link>
          <a href="#about" className="my-3.5 block text-[15px] text-muted hover:text-accent">
            About us
          </a>
          <a href="#contact" className="my-3.5 block text-[15px] text-muted hover:text-accent">
            Contact
          </a>
        </div>
        <div>
          <h4 className="mb-5 text-base font-semibold">For patients</h4>
          <Link to="/doctors" className="my-3.5 block text-[15px] text-muted hover:text-accent">
            Find a doctor
          </Link>
          <a href="#departments" className="my-3.5 block text-[15px] text-muted hover:text-accent">
            Departments
          </a>
          <a href="#packages" className="my-3.5 block text-[15px] text-muted hover:text-accent">
            Health packages
          </a>
          <a href="#telemedicine" className="my-3.5 block text-[15px] text-muted hover:text-accent">
            Telemedicine
          </a>
        </div>
        <div className="footer-ctas flex flex-col gap-3.5 self-start">
          <button
            className={buttonClass('dark', 'justify-between text-[15px]')}
            onClick={() => onOpen('appointment')}
          >
            Book an appointment <ArrowUpRight size={17} />
          </button>
          <button
            className={buttonClass('border', 'justify-between text-[15px]')}
            onClick={() => onOpen('collection')}
          >
            Home sample collection <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
      <div
        className={`${container} flex justify-between gap-5 border-t border-line py-5 text-[13px] text-[#8a9ab3] max-[760px]:flex-col max-[760px]:gap-2.5 lg:py-7`}
      >
        <span>© {new Date().getFullYear()} Happy Healthy Hospital</span>
      </div>
    </footer>
  );
}
