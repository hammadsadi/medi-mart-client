"use client";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X, Filter } from "lucide-react"; 

export default function FilterSidebar() {
  const [isOpen, setIsOpen] = useState(false); 
  const [showFilterButton, setShowFilterButton] = useState(true)

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Handle Search Query
  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(query, value.toString());
    router.push(`${pathname}?${params}`, { scroll: false });
  };

  // Scroll Wise Handle Filter Button 
  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY < 200){
        setShowFilterButton(false)
      }else{
          setShowFilterButton(true);
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  },[])
  return (
    <>
      {/*  Filter Button For Mobile Device */}

      {showFilterButton && (
        <Button
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 text-white p-2 rounded-md shadow-lg"
        >
          <Filter className="w-5 h-5" />
        </Button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-fit bg-slate-50  p-6 w-72 transition-transform duration-300 z-50 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:relative lg:w-60 lg:h-fit lg:block`}
      >
        {/* Close Button (Mobile) */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex gap-4 md:gap-0 md:justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Filter</h2>
          <Button
            onClick={() => router.push(pathname, { scroll: false })}
            size="sm"
            className=""
          >
            Clear Filters
          </Button>
        </div>

        {/* Filter by Price */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Price</h2>
          <div className="flex items-center justify-between text-sm mb-2">
            <span>$0</span>
            <span>$500000</span>
          </div>
          <Slider
            max={500000}
            step={1}
            onValueChange={(value) => handleSearchQuery("price", value[0])}
            className="w-full"
          />
        </div>

        {/* Product Category */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Product Category</h2>
          <RadioGroup className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={"44"} id={"44"} />
              <Label className="text-gray-500 font-light">Saff</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Brands */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Brands</h2>
          <RadioGroup className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={"sas"} id={"22"} />
              <Label className="text-gray-500 font-light">Brand</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
