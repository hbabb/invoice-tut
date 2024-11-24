import { db } from "@/db";
import { sql } from "drizzle-orm";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default async function NewInvoice() {
  const results = await db.execute(sql`SELECT current_database()`);
  console.log(results);

  return (
    <main className="mx-auto flex h-full max-w-7xl flex-col justify-center gap-6 my-12 flex-1">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Create New Invoice</h1>
      </div>

      <form
        // action={createAction}
        // onsubmit={handleOnSubmit}
        className="grid gap-4 max-w-xs"
      >
        <div>
          <Label htmlFor="name" className="block font-semibold text-sm mb-2">
            Billing Name
          </Label>
          <Input type="text" name="name" id="name" />
        </div>

        <div>
          <Label htmlFor="email" className="block font-semibold text-sm mb-2">
            Billing Email
          </Label>
          <Input type="email" name="email" id="email" />
        </div>

        <div>
          <Label htmlFor="value" className="block font-semibold text-sm mb-2">
            Value
          </Label>
          <Input type="text" name="value" id="value" />
        </div>

        <div>
          <Label
            htmlFor="description"
            className="block font-semibold text-sm mb-2"
          >
            Description
          </Label>
          <Textarea name="description" id="description" />
        </div>

        <div>
          <Button className="w-full font-semibold">Submit</Button>
        </div>
      </form>
    </main>
  );
}
