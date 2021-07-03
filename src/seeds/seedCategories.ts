import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Category } from "../entity/Category";

const categories = [
  { id: 1, name: "Frameworks", description: "Frameworks" },
  { id: 2, name: "Data Management", description: "Data Management" },
  { id: 3, name: "Infrastructure", description: "Infrastructure" },
  { id: 4, name: "Languages", description: "Languages" },
];

export default class seedCategories implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values(categories)
      .execute();
  }
}
