"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
  GiOpenedFoodCan,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Wedding Caterers",
    icon: TbBeach,
    description: "Specialize in catering for weddings!",
  },
  {
    label: "Corporate Caterers",
    icon: GiWindmill,
    description: "Provide catering for corporate events!",
  },
  {
    label: "Event Caterers",
    icon: MdOutlineVilla,
    description: "Cater to various events such as birthdays and anniversaries!",
  },
  {
    label: "Buffet Caterers",
    icon: TbMountain,
    description: "Specialize in buffet-style service!",
  },
  {
    label: "Food Truck Caterers",
    icon: GiOpenedFoodCan,
    description: "Provide catering services through food trucks!",
  },
  {
    label: "Gourmet Caterers",
    icon: GiIsland,
    description: "Provide high-end catering with gourmet dishes!",
  },
  {
    label: "Ethnic Caterers",
    icon: GiBoatFishing,
    description: "Specialize in specific types of cuisine!",
  },
  {
    label: "Kosher Caterers",
    icon: FaSkiing,
    description: "Offer catering services that adhere to kosher dietary laws!",
  },
  {
    label: "Vegan and Vegetarian Caterers",
    icon: GiCastle,
    description: "Provide catering services with vegan and vegetarian dishes!",
  },
  {
    label: "BBQ Caterers",
    icon: GiCaveEntrance,
    description: "Specialize in barbecue-style catering!",
  },
  {
    label: "Dessert Caterers",
    icon: GiForestCamp,
    description: "Focus on providing a variety of desserts!",
  },
  {
    label: "Cocktail Caterers",
    icon: BsSnow,
    description: "Specialize in providing beverages and light snacks!",
  },
];


type Props = {};

function Categories({}: Props) {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((items, index) => (
          <CategoryBox
            key={index}
            icon={items.icon}
            label={items.label}
            selected={category === items.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
