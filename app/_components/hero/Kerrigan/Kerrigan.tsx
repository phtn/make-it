import { useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KerriganListProps, KerriganProps } from "./types";
import { map } from "@/app/_utils/helpers";
import Image from "next/image";

const KerriganList = ({ data, title }: KerriganListProps) => {
  return (
    <section className="px-6 md:px-16 pb-10">
      <h2 className="text-3xl font-extrabold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((item) => (
          <div
            key={item?.id}
            className="border rounded-lg overflow-hidden bg-background dark:bg-indigo-100"
          >
            <Image
              alt={item.src ?? ""}
              className="w-full h-64 object-cover"
              src={item?.src ?? "/company/student-v1.webp"}
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
              <Button className="mt-2">
                {item.subtext ?? item.description}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Kerrigan = ({
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
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-slate-800 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {title}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 text-[14px] md:text-xl">
                {description}
              </p>
            </div>
            <div className="md:w-full w-[calc(100vw-64px)] max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <List />
    </main>
  );
};
