import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, Briefcase, Music, GraduationCap } from "lucide-react";

const categories = [
  { id: "all", label: "All Events", icon: Calendar },
  { id: "workshops", label: "Workshops", icon: GraduationCap },
  { id: "competitions", label: "Competitions", icon: Trophy },
  { id: "clubs", label: "Club Activities", icon: Users },
  { id: "fests", label: "Fests", icon: Music },
  { id: "career", label: "Career", icon: Briefcase },
];

interface FilterSectionProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterSection = ({ activeCategory, onCategoryChange }: FilterSectionProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        
        return (
          <Button
            key={category.id}
            variant={isActive ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className={`rounded-full transition-all duration-300 ${
              isActive ? "shadow-lg scale-105" : "hover:scale-105"
            }`}
          >
            <Icon className="w-4 h-4 mr-2" />
            {category.label}
          </Button>
        );
      })}
    </div>
  );
};

export default FilterSection;
