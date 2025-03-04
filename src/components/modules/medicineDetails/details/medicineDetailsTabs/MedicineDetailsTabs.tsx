
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DetailsInfo from "../detailsInfo/DetailsInfo";
import Reviews from "../../Reviews/Reviews";

export function MedicineDetailsTabs() {
  return (
    <div className="mt-10">
      <Tabs defaultValue="details">
        <div className="max-w-2xl">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
        </div>
        {/* One Tabe */}
        <TabsContent value="details">
          <DetailsInfo />
        </TabsContent>
        {/* Two Tabe */}
        <TabsContent value="reviews">
          <Reviews/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
