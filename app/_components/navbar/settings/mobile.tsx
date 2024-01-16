import { Button } from "@/components/ui/button";
import { FooterInner, ItemWrap, MenuIcon, MobileWrap } from "./styled";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { menuItems } from "../menu/menu";
import { Help, ToggleMode } from "./components";
import useToggleMode from "@/app/_utils/hooks/useToggleMode";
import { User } from "./user";

export const Trigger = () => (
  <MobileWrap asChild>
    <Button variant="ghost">
      <MenuIcon />
    </Button>
  </MobileWrap>
);

const Header = () => (
  <SheetHeader className="h-[56px] items-start">
    <SheetTitle className="flex items-center">
      <MenuIcon className="mr-1" />
      <span className="uppercase tracking-wider text-foreground/60">Menu</span>
    </SheetTitle>
  </SheetHeader>
);

type ItemProps = {
  index: number;
  href: string;
  title: string;
};

const LinkItem = ({ index, href, title }: ItemProps) => (
  <SheetClose asChild>
    <ItemWrap $index={index} href={href} key={href}>
      <span className="text-cyan-50 font-bold">{title}</span>
    </ItemWrap>
  </SheetClose>
);

const MainMenu = () => (
  <div className="grid grid-cols-2 gap-3 mt-2">
    {menuItems.map((item, index) => (
      <LinkItem
        key={item.href}
        index={index}
        href={item.href}
        title={item.title}
      />
    ))}
  </div>
);

const Footer = () => {
  const toggleProps = useToggleMode();
  return (
    <SheetFooter>
      <FooterInner>
        <Help />
        <ToggleMode {...toggleProps} />
        <User />
      </FooterInner>
    </SheetFooter>
  );
};

const Content = () => (
  <SheetContent
    side="bottom"
    className={`bg-gradient-to-tl from-[#54c8e8]/70 to-[##FEF7E4]/70 border-0`}
  >
    <Header />
    <div className={`h-[calc(100vh-300px)]`}>
      <MainMenu />
    </div>

    <Footer />
  </SheetContent>
);

export const Mobile = () => (
  <Sheet>
    <Trigger />
    <Content />
  </Sheet>
);
