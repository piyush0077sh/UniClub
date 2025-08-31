import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  gpa: text("gpa"),
  credits: integer("credits").default(0),
  avatar: text("avatar"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const courses = pgTable("courses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  code: text("code").notNull(),
  instructor: text("instructor").notNull(),
  room: text("room").notNull(),
  schedule: jsonb("schedule"), // {day, startTime, endTime}
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const assessments = pgTable("assessments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  courseId: varchar("course_id").references(() => courses.id).notNull(),
  title: text("title").notNull(),
  type: text("type").notNull(), // quiz, exam, assignment
  dueDate: timestamp("due_date"),
  totalQuestions: integer("total_questions"),
  completedQuestions: integer("completed_questions").default(0),
  timeRemaining: integer("time_remaining"), // in minutes
  grade: text("grade"),
  status: text("status").default("pending"), // pending, active, completed, graded
  createdAt: timestamp("created_at").defaultNow(),
});

export const messages = pgTable("messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  senderId: varchar("sender_id").references(() => users.id).notNull(),
  recipientId: varchar("recipient_id").references(() => users.id),
  groupName: text("group_name"),
  content: text("content").notNull(),
  type: text("type").default("direct"), // direct, group
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const announcements = pgTable("announcements", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  content: text("content").notNull(),
  type: text("type").notNull(), // alert, event, resource
  priority: text("priority").default("normal"), // low, normal, high
  createdAt: timestamp("created_at").defaultNow(),
});

export const campusLocations = pgTable("campus_locations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  type: text("type").notNull(), // building, dining, library, parking
  coordinates: jsonb("coordinates"), // {x, y} for map positioning
  status: text("status").default("open"), // open, closed, limited
  description: text("description"),
  hours: text("hours"),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
  createdAt: true,
});

export const insertAssessmentSchema = createInsertSchema(assessments).omit({
  id: true,
  createdAt: true,
});

export const insertMessageSchema = createInsertSchema(messages).omit({
  id: true,
  createdAt: true,
});

export const insertAnnouncementSchema = createInsertSchema(announcements).omit({
  id: true,
  createdAt: true,
});

export const insertCampusLocationSchema = createInsertSchema(campusLocations).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Course = typeof courses.$inferSelect;
export type InsertAssessment = z.infer<typeof insertAssessmentSchema>;
export type Assessment = typeof assessments.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;
export type InsertAnnouncement = z.infer<typeof insertAnnouncementSchema>;
export type Announcement = typeof announcements.$inferSelect;
export type InsertCampusLocation = z.infer<typeof insertCampusLocationSchema>;
export type CampusLocation = typeof campusLocations.$inferSelect;
