import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Block } from "../_components/blocks/type";

export function Faqs({ data }: { data: Block[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full md:w-1/2 border border-zinc-500 rounded-lg p-6"
    >
      {data.map((item) => (
        <AccordionItem key={item.id} value={`${item.id}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent className="max-w-[75ch]">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
