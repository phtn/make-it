import { cn } from "@/lib/utils";
import { contactLocations } from "./data";
import {
  Building2,
  MailIcon,
  MailWarning,
  Smartphone,
  UserIcon,
} from "lucide-react";
import { formatNumber } from "../_utils/helpers";

export function ContactLocations() {
  return (
    <section className="w-full mb-24">
      <div className="flex items-center px-4">
        <div className="grid w-full items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="mx-auto w-full max-w-full space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {contactLocations.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "overflow-clip rounded-[18px] transition-all drop-shadow-md duration-500 hover:scale-[105%]",
                      item.bg,
                    )}
                  >
                    <div
                      className={cn(
                        "h-[380px] w-[300px] bg-cover bg-top p-6",
                        item.image,
                      )}
                    >
                      <div className="flex h-[36px] border-b border-cyan-50 items-start justify-between">
                        <h2 className="text-3xl font-bold text-blue-100">
                          {item.title}
                        </h2>
                      </div>

                      <Person name={item.description} />
                      <Address address={item.address} />
                      <Phone phone={item.phone} />
                      <Email email={item.image} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Person = ({ name }: { name: string }) => (
  <div className="items-start">
    <h3 className="mb-1 mt-4 flex items-center text-[20px] font-semibold tracking-tight text-blue-950">
      <UserIcon className="mr-[6px] h-[16px] text-zinc-950" />
      {name}
    </h3>
  </div>
);

const Address = ({ address }: { address: string }) => (
  <div className="items-start">
    <h3 className="mb-1 mt-4 flex items-center text-[20px] font-semibold tracking-tight text-blue-950">
      <Building2 className="mr-[6px] h-[16px] text-zinc-950" />
      Address
    </h3>
    <p className="text-[13px] max-w-[28ch] text-left tracking-wide text-zinc-950">
      {address}
    </p>
  </div>
);

const Phone = ({ phone }: { phone: string }) => (
  <div
    className="items-start cursor-pointer"
    onClick={() => window?.open(`tel:${formatNumber(phone)}`)}
  >
    <h3 className="mb-1 mt-4 flex items-center text-[17px] font-semibold tracking-tight text-blue-950">
      <Smartphone className="mr-[6px] h-[16px] text-slate-700" />
      Phone
    </h3>
    <p className="text-[13px] text-left tracking-wide text-zinc-950">{phone}</p>
  </div>
);

const Email = ({ email }: { email: string }) => (
  <div
    className="items-start cursor-pointer"
    onClick={() => window?.open(`tel:${formatNumber(email)}`)}
  >
    <h3 className="mb-1 mt-4 flex items-center text-[17px] font-semibold tracking-tight text-blue-950">
      {email !== `--` ? (
        <MailIcon className="mr-[6px] h-[16px] text-slate-700" />
      ) : (
        <MailWarning className="mr-[6px] h-[16px] text-slate-700" />
      )}
      Email
    </h3>
    <p className="text-[13px] text-left tracking-wide text-zinc-950">{email}</p>
  </div>
);
