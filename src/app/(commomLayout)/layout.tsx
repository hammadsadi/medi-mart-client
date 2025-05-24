import Footer from "@/components/modules/shared/Footer/Footer";
import Navbar from "@/components/modules/shared/Navbar/Navbar";
import { getAllMedicineCategories } from "@/services/Medicine";
import { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  const { data: medicineCat } = await getAllMedicineCategories();

  return (
    <div className="">
      <Navbar medicineCat={medicineCat} />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
