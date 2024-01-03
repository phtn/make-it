import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { PanelItem } from "./components"



export function Hover({desc, name, trig}: PanelItem) {
  return (
   <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        {trig}
      </HoverCardTrigger>
      <HoverCardContent className="w-fit h-[56px] bg-[url('/bg/meteor-v2.svg')] bg-cover" side="top">
        <div className="flex flex-col justify-center">
            <h4 className="text-[14px] text-cyan-300 font-extrabold leading-[12px]">{name}</h4>
            <p className="text-[12px] text-cyan-100 font-light leading-[12px]">
              {desc}
            </p>
        </div>
      </HoverCardContent>
    </HoverCard>    
  )
}
