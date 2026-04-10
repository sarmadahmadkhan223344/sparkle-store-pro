import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', zip: '', country: '' });

  const shipping = cartTotal > 50 ? 0 : 9.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address || !form.city || !form.zip) {
      toast.error('Please fill in all fields');
      return;
    }
    clearCart();
    setSubmitted(true);
    toast.success('Order placed successfully!');
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
        </motion.div>
        <h1 className="text-3xl font-heading font-bold mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-6">Thank you for your purchase. Your order is being processed.</p>
        <Link to="/products" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-heading font-bold mb-2">Nothing to checkout</h1>
        <Link to="/products" className="text-primary hover:underline mt-2">Go shopping</Link>
      </div>
    );
  }

  const inputClass = "w-full bg-secondary text-secondary-foreground rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm";

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-heading font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <h2 className="font-semibold mb-2">Shipping Details</h2>
            <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className={inputClass} />
            <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className={inputClass} />
            <input name="address" placeholder="Street Address" value={form.address} onChange={handleChange} className={inputClass} />
            <div className="grid grid-cols-2 gap-4">
              <input name="city" placeholder="City" value={form.city} onChange={handleChange} className={inputClass} />
              <input name="zip" placeholder="ZIP Code" value={form.zip} onChange={handleChange} className={inputClass} />
            </div>
            <input name="country" placeholder="Country" value={form.country} onChange={handleChange} className={inputClass} />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity mt-4"
            >
              Place Order — ${total.toFixed(2)}
            </button>
          </form>
          <div className="md:col-span-2">
            <div className="glass-card p-5 sticky top-24">
              <h2 className="font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>${tax.toFixed(2)}</span></div>
                <div className="border-t border-border pt-2 flex justify-between font-bold"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
