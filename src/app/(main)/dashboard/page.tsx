import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-7xl flex-col justify-center gap-6 text-center my-12 flex-1 border-2 border-purple-400">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>

        <p>
          <Button variant="ghost" className="inline-flex gap-2" asChild>
            <Link href="/invoices/new">
              <CirclePlus className=" h-4 w-4" />
              Create Invoice
            </Link>
          </Button>
        </p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left font-bold p-4">
              Date
            </TableHead>
            <TableHead className="text-left font-bold p-4">Customer</TableHead>
            <TableHead className="text-left font-bold p-4">Email</TableHead>
            <TableHead className="text-center font-bold p-4">Status</TableHead>
            <TableHead className="text-right font-bold p-4">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-semibold text-left p-4">
              11/11/2022
            </TableCell>
            <TableCell className="text-left font-semibold p-4">
              Philip J. Fry
            </TableCell>
            <TableCell className="text-left font-normal p-4">
              fry@planetexpress.com
            </TableCell>
            <TableCell className="text-center font-normal p-4">
              <Badge className="rounded-full" variant="outline">
                Open
              </Badge>
            </TableCell>
            <TableCell className="text-right font-semibold p-4">
              $250.00
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
