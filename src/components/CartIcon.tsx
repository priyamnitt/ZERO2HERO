
import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CartIconProps {
  itemCount?: number;
}

const CartIcon: React.FC<CartIconProps> = ({ itemCount }) => {
  const [count, setCount] = useState(itemCount || 0);
  
  useEffect(() => {
    // Update count from localStorage
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      setCount(cartItems.length);
    };
    
    // Initial load
    updateCartCount();
    
    // Listen for storage events to update cart count when it changes in other tabs
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
    <div className="relative">
      <Button variant="ghost" size="icon" className="relative" asChild>
        <Link to="/cart">
          <ShoppingCart className="h-6 w-6" />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-purple text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {count}
            </span>
          )}
        </Link>
      </Button>
    </div>
  );
};

export default CartIcon;
