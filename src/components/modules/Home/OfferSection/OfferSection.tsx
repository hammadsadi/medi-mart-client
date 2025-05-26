"use client";
import { BadgePercent, Gift, Truck, TicketPercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function OfferSection() {
  const handleCopyCoupon = () => {
    navigator.clipboard.writeText("SAVE20");
    toast.success("Coupon code copied: SAVE20");
  };

  return (
    <section className="w-full bg-gradient-to-br from-blue-100 to-white py-12 px-4 md:px-10 mt-12 md:mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Exclusive Offers Just for You!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Unlock savings on top health essentials. Explore discounts, bundles,
            and flash deals curated to keep you healthy and your wallet happy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* First Order Discount */}
          <div className="p-6 bg-white rounded-2xl shadow-sm border text-left hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <BadgePercent className="text-primary size-8" />
              <h3 className="text-xl font-semibold">
                Flat 20% Off on First Order
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              New here? Welcome! Enjoy an exclusive 20% off your first
              purchase—automatically applied at checkout.
            </p>
            <Button variant="link" className="px-0 text-primary" asChild>
              <a href="/register">Sign Up & Save</a>
            </Button>
          </div>

          {/* Flash Deals */}
          <div className="p-6 bg-white rounded-2xl shadow-sm border text-left hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="text-primary size-8" />
              <h3 className="text-xl font-semibold">
                Flash Deals – Up to 50% Off
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Shop limited-time discounts on popular medicines and health
              products. Offers refresh every 24 hours!
            </p>
            <Button variant="link" className="px-0 text-primary" asChild>
              <a href="/shop">View Deals</a>
            </Button>
          </div>

          {/* Coupon Code Offer */}
          <div className="p-6 bg-white rounded-2xl shadow-sm border text-left hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <TicketPercent className="text-primary size-8" />
              <h3 className="text-xl font-semibold">
                Extra ৳100 Off with Coupon
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Use coupon code{" "}
              <span className="font-semibold text-black">EDULADHA25</span> at
              checkout to get ৳100 off on orders above ৳800.
            </p>
            <Button variant="outline" onClick={handleCopyCoupon}>
              Copy Code
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
