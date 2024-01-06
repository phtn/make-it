import Link from "next/link";
import { Container, ItemContainer } from "./styled";
import { ItemProps, MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  { href: "/benefits-of-a-mentee", title: "Benefits of a Mentee" },
  { href: "/meet-a-mentor", title: "Meet a Mentor" },
  { href: "/join-a-class", title: "Join a Class" },
  { href: "/contact-us", title: "Contact Us" },
  { href: "/be-a-mentee", title: "Be a Mentee for Free!" },
];

const Item = ({ href, title, index }: ItemProps) => (
  <Link href={href} className="no-underline">
    <ItemContainer $index={index}>{title}</ItemContainer>
  </Link>
);

export const Menu = () => (
  <Container>
    {menuItems.map((item, index) => (
      <Item key={item.href} href={item.href} title={item.title} index={index} />
    ))}
  </Container>
);
