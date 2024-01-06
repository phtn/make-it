import { Button } from "@/components/ui/button";
import { UserIcon } from "./styled";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Trigger = () => (
  <SheetTrigger asChild>
    <Button variant={"ghost"} size="icon">
      <UserIcon />
    </Button>
  </SheetTrigger>
);

const Header = () => <SheetHeader>Login to your account</SheetHeader>;

const Content = () => (
  <SheetContent side="bottom">
    <Header />
    <div className="h-[400px]">Content</div>
  </SheetContent>
);

const User = () => {
  return (
    <Sheet>
      <Trigger />
      <Content />
    </Sheet>
  );
};

export { User };
