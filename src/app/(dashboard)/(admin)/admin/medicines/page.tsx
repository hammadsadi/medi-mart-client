import ManageMedicines from "@/components/modules/medicine";
import { getAllMedicines } from "@/services/Medicine";
import React from "react";
const MedicinesPage = async () => {
  const { data: medicineData } = await getAllMedicines();
  return (
    <div>
      <ManageMedicines medicines={medicineData?.data} />
    </div>
  );
};

export default MedicinesPage;
