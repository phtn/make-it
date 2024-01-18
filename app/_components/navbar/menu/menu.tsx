"use client";

import Link from "next/link";
import { Container, ItemContainer } from "./styled";
import { ItemProps, MenuItem } from "./types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const menuItems: MenuItem[] = [
  { href: "/benefits-of-a-mentee", title: "Benefits of a Mentee" },
  { href: "/meet-a-mentor", title: "Meet a Mentor" },
  { href: "/join-a-class", title: "Join a Class" },
  { href: "/contact-us", title: "Contact Us" },
  { href: "/be-a-mentee", title: "Be a Mentee for Free!" },
];

const Item = ({ href, title, index }: ItemProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className="no-underline">
      <ItemContainer
        $index={index}
        className={cn(
          pathname === href
            ? `bg-gradient-to-br from-slate-950 to-slate-700 text-accent`
            : ``,
        )}
      >
        {title}
      </ItemContainer>
    </Link>
  );
};

export const Menu = () => {
  return (
    <Container>
      {menuItems.map((item, index) => (
        <Item
          key={item.href}
          href={item.href}
          title={item.title}
          index={index}
        />
      ))}
    </Container>
  );
};
