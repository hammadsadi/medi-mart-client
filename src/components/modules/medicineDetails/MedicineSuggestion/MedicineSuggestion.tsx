import { getSuggestedMedicines } from "@/services/Medicine";
import MyContainer from "../../shared/MyContainer/MyContainer";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import SuggestedMedicineItem from "./SuggestedMedicineItem";

const MedicineSuggestion = async ({
  prescriptionStatus,
}: {
  prescriptionStatus: boolean;
}) => {
  const { data: suggestMedicines } = await getSuggestedMedicines(
    prescriptionStatus
  );
  return (
    <div>
      <MyContainer>
        <SectionTitle
          sectionSubTitle="Based on your health profile and browsing history"
          sectionTitle=" Suggested Medicines For You"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {suggestMedicines?.data?.slice(0, 8).map((medicine: any) => (
            <div key={medicine._id}>
              <SuggestedMedicineItem medicine={medicine} />
            </div>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default MedicineSuggestion;
