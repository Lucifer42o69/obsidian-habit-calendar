import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * Multi-project schema feature of Drizzle ORM.
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `obsidian-habit-calendar_${name}`);

export const activities = createTable(
  "activity",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    date: d.date().notNull(),
    activityKey: d.varchar({ length: 100 }).notNull(),
    value: d.integer().default(1).notNull(),
    createdAt: d
      .timestamp({ withTimezone: true })
      .$defaultFn(() => new Date())
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [
    index("date_idx").on(t.date),
    index("date_activity_idx").on(t.date, t.activityKey),
  ]
);
