import { createConnection } from "typeorm";
import { runSeeder, useRefreshDatabase, useSeeding } from "typeorm-seeding";
import { seedCategories } from "../seeds";

export const createConnectionForTest = async () => {
  const connection = await createConnection({
    type: "mariadb",
    host: process.env.TEST_TYPEORM_HOST,
    port: parseInt(process.env.TEST_TYPEORM_PORT || "3306"),
    username: process.env.TEST_TYPEORM_USERNAME,
    password: process.env.TEST_TYPEORM_PASSWORD,
    database: process.env.TEST_TYPEORM_DATABASE,
    entities: ["src/entity/**/*.ts"],
    synchronize: true,
  });
  await useRefreshDatabase({ connection: "memory" });
  await useSeeding();
  await runSeeder(seedCategories);
  return connection;
};
