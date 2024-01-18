import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRightIcon } from "lucide-react";

type MinskProps = {
  title: string;
  description: string;
};

export function Minsk(props: MinskProps) {
  const { title, description } = props;
  return (
    <div className="flex h-screen items-center p-8 text-white ">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="w-1/2 space-y-8">
          <h1 className="text-6xl font-extrabold tracking-tighter text-blue-950">
            {title}
          </h1>
          <p className="my-3 text-xl text-blue-800">{description}</p>

          <div className="flex items-center justify-start gap-4">
            <Input placeholder="Email" className="w-[350px]" />
            <Button size="lg" className="w-[175px]">
              Get in touch <MoveRightIcon className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="flex w-1/2 justify-end">
          <div className="relative h-[600px] w-[200px] rotate-3 transform rounded-lg bg-white p-6 shadow-2xl">
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
              <div className="text-lg font-semibold text-black">$27,563</div>
              <div className="text-sm text-black">205 bonus</div>
            </div>
            <div className="mt-16 space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm text-black">Walmart</div>
                <div className="text-sm text-black">$205</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-black">JPMorgan Chase</div>
                <div className="text-sm text-black">$145.50</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-black">HSBC Holdings</div>
                <div className="text-sm text-black">$24</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-black">Currencies</div>
                <div className="text-sm text-black">Transactions</div>
              </div>
              <div className="mt-6">
                <div className="rounded-lg bg-[#3b5998] p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">facebook</div>
                    <div className="text-xs">BANK</div>
                  </div>
                  <div className="mt-4 text-sm">5411 7512 3331 5443</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-xs">11/23</div>
                    <div className="text-xs">VISA</div>
                  </div>
                </div>
                <div className="mt-2 text-center text-xs text-black">
                  Show all cards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
