import { db } from "@/db/index";
import { migrate } from "drizzle-orm/xata-http/migrator";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "src/db/migrations",
    });
    console.log("Migration complete");
  } catch (error) {
    console.error("Error during migration: ", error);
    process.exit(1);
  }
};

main();
