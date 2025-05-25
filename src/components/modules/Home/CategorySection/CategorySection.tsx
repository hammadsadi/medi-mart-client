"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Pill,
  Crosshair,
  ShieldCheck,
  HeartPulse,
  Bandage,
  Activity,
  Box,
} from "lucide-react";
import MyContainer from "../../shared/MyContainer/MyContainer";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const categories = [
  {
    id: 1,
    name: "Anti-Inflammatory",
    description: "Medicines to reduce inflammation and swelling.",
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
  },
  {
    id: 2,
    name: "Antibiotic",
    description: "Medicines to fight bacterial infections.",
    icon: <Crosshair className="w-10 h-10 text-primary" />,
  },
  {
    id: 3,
    name: "Antihistamine",
    description: "Medicines for allergy relief and histamine control.",
    icon: <Pill className="w-10 h-10 text-primary" />,
  },
  {
    id: 4,
    name: "Diabetes Medication",
    description: "Medicines and treatments for diabetes management.",
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
  },
  {
    id: 5,
    name: "Pain Reliever",
    description: "Medicines to relieve pain and discomfort.",
    icon: <Bandage className="w-10 h-10 text-primary" />,
  },
  {
    id: 6,
    name: "Qui reprehenderit et",
    description: "Special care medicines for specific needs.",
    icon: <Activity className="w-10 h-10 text-primary" />,
  },
  {
    id: 7,
    name: "Ullamco in iusto ver",
    description: "Medicines for advanced health conditions.",
    icon: <Box className="w-10 h-10 text-primary" />,
  },
];

export default function CategorySection() {
  return (
    <MyContainer>
      <SectionTitle
        sectionSubTitle="Explore our range of medicine categories to find the right treatment
          for you."
        sectionTitle=" Medicine Categories"
      />
      <ScrollArea className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map(({ id, name, description, icon }) => (
            <Card
              key={id}
              className="cursor-pointer hover:shadow-lg hover:border-primary transition-shadow border border-border rounded-lg"
            >
              <CardHeader className="flex flex-col items-center space-y-2 p-6">
                {icon}
                <CardTitle className="text-lg">{name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-sm text-muted-foreground">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </MyContainer>
  );
}
