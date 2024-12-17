"use client"

import { Button } from "@/components/ui/button"
import { NavigationMenuDemo } from "./navigation";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button className="bg-white  text-black">
             < FiMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="text-2xl mb-4 pl-14  ml-14 font-bold">Shop.Co</SheetTitle>

            </SheetHeader>

             {/* navbar */}
    <ul className="">
        <li className="grid grid-cols-1 gap-y-4">
            <Link   href={""}><NavigationMenuDemo/> </Link>
            <Link className="ml-3" href={""}>On Sale</Link>
            <Link className="ml-3" href={"/New Arrivals"}>New Arrival</Link>
            <Link className="ml-3" href={""}>Brands</Link>

        </li>
    </ul>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
