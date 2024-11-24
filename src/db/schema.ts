import { relations } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  varchar as text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { AVAILABLE_STATUSES } from "@/data/invoices";

export type Status = (typeof AVAILABLE_STATUSES)[number]["id"];
const statuses = AVAILABLE_STATUSES.map(({ id }) => id) as Array<Status>;
export const statusEnum = pgEnum(
  "status",
  statuses as [Status, ...Array<Status>],
);

export const Invoices = pgTable(
  "Invoices",
  {
    id: uuid("id").primaryKey(),
    invoiceNumber: text("invoiceNumber").notNull().unique(), // For business/legal reference
    createTs: timestamp("createTs").defaultNow().notNull(),
    dueDate: timestamp("dueDate").notNull(), // When payment is expected
    paidDate: timestamp("paidDate"), // Null until paid
    value: integer("value").notNull(), // Store in cents
    subtotal: integer("subtotal").notNull(), // Base amount before any adjustments
    total: integer("total").notNull(), // Final amount after all adjustments
    description: text("description").notNull(),
    notes: text("notes"), // For any additional information or terms
    userId: text("userId").notNull(),
    organizationId: text("organizationId"),
    customerId: uuid("customerId") // Changed to uuid to match Customers.id
      .notNull()
      .references(() => Customers.id),
    status: statusEnum("status").notNull(),
  },
  (table) => [
    // Add indexes for common queries
    index("status_idx").on(table.status),
    index("customer_idx").on(table.customerId),
    index("user_org_idx").on(table.userId, table.organizationId),
    index("due_date_idx").on(table.dueDate),
    index("invoice_number_idx").on(table.invoiceNumber),
  ],
);

export const Customers = pgTable(
  "customers",
  {
    id: uuid("id").primaryKey().notNull(),
    createTs: timestamp("createTs").defaultNow().notNull(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    phone: text("phone").unique().notNull(),
    address1: text("address1").notNull(),
    address2: text("address2"),
    city: text("city").notNull(),
    state: text("state", { length: 2 }).notNull(),
    zip: text("zip", { length: 10 }).notNull(),
    userId: text("userId").notNull(),
    organizationId: text("organizationId"),
    isActive: boolean("isActive").notNull().default(true),
    lastInvoiceDate: timestamp("lastInvoiceDate"),
  },
  (table) => [
    index("email_idx").on(table.email),
    index("phone_idx").on(table.phone),
    index("customer_user_org_idx").on(table.userId, table.organizationId),
  ],
);

// Create relations
export const CustomersRelations = relations(Customers, ({ many }) => ({
  invoices: many(Invoices),
}));

export const InvoicesRelations = relations(Invoices, ({ one }) => ({
  customer: one(Customers, {
    fields: [Invoices.customerId],
    references: [Customers.id],
  }),
}));

// Helper function to generate invoice numbers
export function generateInvoiceNumber(
  prefix: string,
  sequence: number,
): string {
  return `${prefix}-${new Date().getFullYear()}-${sequence.toString().padStart(5, "0")}`;
}

// For future tax implementation
export type TaxConfig = {
  rate: number;
  isEnabled: boolean;
  taxId?: string; // For business tax ID
};

export type CurrencyConfig = {
  code: string;
  symbol: string;
  decimals: number;
};

// Default configs (to be expanded)
export const DEFAULT_CURRENCY: CurrencyConfig = {
  code: "USD",
  symbol: "$",
  decimals: 2,
};
