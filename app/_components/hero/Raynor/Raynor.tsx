import { useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { KerriganListProps, KerriganProps } from "./types";
import { map } from "@/app/_utils/helpers";
import Image from "next/image";

const KerriganList = ({ data, title }: KerriganListProps) => {
  return (
    <section className="px-16 pb-10">
      <h2 className="text-3xl font-extrabold  mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden bg-background"
          >
            <Image
              alt="Cocktail 1"
              className="w-full h-48 object-cover"
              src="/company/student-v1.webp"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
              <Button className="mt-2">{item.subtext}</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Raynor = ({
  title,
  description,
  data,
  listTitle,
}: KerriganProps) => {
  const List = useCallback(() => {
    const withData = typeof data !== "undefined";
    const options = map(
      <KerriganList data={data} title={listTitle} />,
      <div />,
    );
    return <>{options.get(withData)}</>;
  }, [data, listTitle]);
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {title}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {description}
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <List />
    </main>
  );
};
