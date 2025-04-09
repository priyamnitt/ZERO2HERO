
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import CartIcon from "@/components/CartIcon";
import ProfileIcon from "@/components/ProfileIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Get initial cart count
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      setCartItemCount(cartItems.length);
    };
    
    // Initial load
    updateCartCount();
    
    // Listen for storage events (for updates from other tabs)
    window.addEventListener('storage', updateCartCount);
    
    // Custom event for same-tab updates
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative overflow-hidden">
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Zero To Hero
            </span>
          </div>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-4">
            <Link to="/" className="font-medium text-gray-700 hover:text-brand-purple transition">
              Home
            </Link>
            <Link to="/courses" className="font-medium text-gray-700 hover:text-brand-purple transition">
              Courses
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-brand-purple transition">
              About
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-brand-purple transition">
              Contact
            </Link>
          </div>
          
          <div className="flex gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <CartIcon itemCount={cartItemCount} />
                <ProfileIcon />
              </div>
            ) : (
              <>
                <CartIcon itemCount={cartItemCount} />
                <Button variant="outline" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90" asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <CartIcon itemCount={cartItemCount} />
              <ProfileIcon />
            </div>
          ) : (
            <CartIcon itemCount={cartItemCount} />
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="py-4 px-6 flex flex-col gap-4">
            <Link to="/" className="font-medium text-gray-700 py-2 hover:text-brand-purple" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/courses" className="font-medium text-gray-700 py-2 hover:text-brand-purple" onClick={() => setIsMenuOpen(false)}>
              Courses
            </Link>
            <Link to="/about" className="font-medium text-gray-700 py-2 hover:text-brand-purple" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 py-2 hover:text-brand-purple" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            {!isAuthenticated && (
              <div className="flex flex-col gap-3 pt-2">
                <Button variant="outline" asChild className="w-full justify-center">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                </Button>
                <Button className="w-full justify-center bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90" asChild>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
