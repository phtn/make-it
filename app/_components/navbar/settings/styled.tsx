import { SheetTrigger } from "@/components/ui/sheet";
import { HelpCircle, Menu, MoonIcon, SunIcon, UserCircle } from "lucide-react";
import Link from "next/link";
import tw from "tailwind-styled-components";

const Wrap = tw.div`
  flex
`;

const MobileWrap = tw(SheetTrigger)`
 flex items-center justify-around px-3 md:scale-0
`;

const MenuIcon = tw(Menu)`
  h-5 w-5 text-cyan-100 hover:text-cyan-50 hover:scale-[115%] transition-all duration-500
`;

const DesktopWrap = tw.div`
  hidden md:flex items-center justify-evenly md:w-[240px]
`;

const HelpIcon = tw(HelpCircle)`
  h-5 w-5 text-cyan-100 hover:text-cyan-50 hover:scale-[115%] transition-all duration-500
`;

const UserIcon = tw(UserCircle)`
  h-5 w-5 text-cyan-100 hover:text-cyan-50 hover:scale-[115%] transition-all duration-500
`;

const Moon = tw(MoonIcon)`
  h-5 w-5 text-cyan-100 hover:text-cyan-50 hover:scale-[115%] transition-all duration-500
`;

const Sun = tw(SunIcon)`
   h-5 w-5 text-cyan-100 hover:text-cyan-50 hover:scale-[115%] transition-all duration-500
`;

const ItemWrap = tw(Link)<{ $index: number }>`
  ${(p) =>
    p.$index === 4
      ? "col-span-2 from-indigo-600 via-sky-700 to-orange-400 dark:from-indigo-400 dark:via-sky-600 dark:to-orange-300 text-center text-[1.7rem]"
      : "col-span-1 from-indigo-600 to-indigo-500 dark:from-sky-600 dark:to-sky-500 text-left text-[1.2rem] pl-4 pr-9"}
  bg-gradient-to-tl h-[100px] flex items-center justify-center   no-underline rounded-xl shadow-md
`;

const FooterInner = tw.div`
  flex items-center justify-evenly rounded-xl bg-gradient-to-tl from-indigo-800 to-sky-900 dark:from-indigo-400 dark:to-sky-400 h-[56px]
`;

export {
  DesktopWrap,
  FooterInner,
  HelpIcon,
  ItemWrap,
  MobileWrap,
  MenuIcon,
  Moon,
  Sun,
  UserIcon,
  Wrap,
};
