
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className={`text-2xl font-thin ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Mio's Hospitality & Co
          </h1>
        </Link>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled ? 'text-mio-darkred' : 'text-white'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </Button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-mio-orange' : 'text-white hover:text-mio-yellow'}`}>
            About Us
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-mio-orange' : 'text-white hover:text-mio-yellow'}`}>
                Services
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              <DropdownMenuItem>
                <Link to="/services/interior-design" className="w-full">Interior Design</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/airbnb" className="w-full">Airbnb Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/videography" className="w-full">Videography</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/car-hire" className="w-full">Car Hire</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/jet-hire" className="w-full">Private Jet Hire</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/maintenance" className="w-full">Maintenance Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/property-management" className="w-full">Property Management</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services/facility-support" className="w-full">Facility Support</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/contact" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-mio-orange' : 'text-white hover:text-mio-yellow'}`}>
            Contact Us
          </Link>
          
          <Link to="/book">
            <Button size="custom" className="bg-red-950 hover:bg-red-800 text-zinc-50">
              Book a Service
            </Button>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && <div className="md:hidden bg-white shadow-lg py-4 animate-slide-in">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link to="/about" className="font-medium text-gray-800 hover:text-mio-orange py-2" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <div className="py-2">
              <p className="font-medium text-gray-800 mb-2">Services</p>
              <div className="pl-4 flex flex-col space-y-2">
                <Link to="/services/interior-design" className="text-gray-600 hover:text-mio-orange" onClick={() => setIsMobileMenuOpen(false)}>
                  Interior Design
                </Link>
                <Link to="/services/airbnb" className="text-gray-600 hover:text-mio-orange" onClick={() => setIsMobileMenuOpen(false)}>
                  Airbnb Services
                </Link>
                <Link to="/services/videography" className="text-gray-600 hover:text-mio-orange" onClick={() => setIsMobileMenuOpen(false)}>
                  Videography
                </Link>
                <Link to="/services/car-hire" className="text-gray-600 hover:text-mio-orange" onClick={() => setIsMobileMenuOpen(false)}>
                  Car Hire
                </Link>
                <Link to="/services/jet-hire" className="text-gray-600 hover:text-mio-orange" onClick={() => setIsMobileMenuOpen(false)}>
                  Private Jet Hire
                </Link>
                <Link to="/services/maintenance" className="text-gray-600 hover:text-mio-orange" onClick={() => setIsMobileMenuOpen(false)}>
                  Maintenance Services
                </Link>
                <Link to="/services/property-management" className="text-gray-600 hover:text-mio-orange" onClick={() => setIsMobileMenuOpen(false)}>
                  Property Management
                </Link>
                <Link to="/services/facility-support" className="text-gray-600 hover:text-mio-orange" onClick={() => setIsMobileMenuOpen(false)}>
                  Facility Support
                </Link>
              </div>
            </div>
            <Link to="/contact" className="font-medium text-gray-800 hover:text-mio-orange py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
            <Link to="/book" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-mio-orange hover:bg-mio-red text-white transition-colors">
                Book a Service
              </Button>
            </Link>
          </div>
        </div>}
    </nav>;
};

export default Navbar;
