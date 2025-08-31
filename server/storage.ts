import {
  type User,
  type InsertUser,
  type Course,
  type InsertCourse,
  type Assessment,
  type InsertAssessment,
  type Message,
  type InsertMessage,
  type Announcement,
  type InsertAnnouncement,
  type CampusLocation,
  type InsertCampusLocation,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Course methods
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;

  // Assessment methods
  getAssessments(): Promise<Assessment[]>;
  getAssessmentsByCourse(courseId: string): Promise<Assessment[]>;
  getAssessment(id: string): Promise<Assessment | undefined>;
  createAssessment(assessment: InsertAssessment): Promise<Assessment>;
  updateAssessment(id: string, updates: Partial<Assessment>): Promise<Assessment | undefined>;

  // Message methods
  getMessages(userId: string): Promise<Message[]>;
  getMessage(id: string): Promise<Message | undefined>;
  createMessage(message: InsertMessage): Promise<Message>;
  markMessageAsRead(id: string): Promise<void>;

  // Announcement methods
  getAnnouncements(): Promise<Announcement[]>;
  createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement>;

  // Campus location methods
  getCampusLocations(): Promise<CampusLocation[]>;
  createCampusLocation(location: InsertCampusLocation): Promise<CampusLocation>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private courses: Map<string, Course>;
  private assessments: Map<string, Assessment>;
  private messages: Map<string, Message>;
  private announcements: Map<string, Announcement>;
  private campusLocations: Map<string, CampusLocation>;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.assessments = new Map();
    this.messages = new Map();
    this.announcements = new Map();
    this.campusLocations = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Create sample user
    const user: User = {
      id: "user1",
      username: "alexjohnson",
      password: "password123",
      name: "Alex Johnson",
      email: "alex.johnson@university.edu",
      gpa: "4.2",
      credits: 12,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32",
      createdAt: new Date(),
    };
    this.users.set(user.id, user);

    // Create sample courses
    const courses: Course[] = [
      {
        id: "course1",
        name: "Organic Chemistry",
        code: "CHEM 301",
        instructor: "Prof. Johnson",
        room: "Science 204",
        schedule: { day: "MWF", startTime: "10:00", endTime: "11:30" },
        description: "Advanced organic chemistry principles",
        createdAt: new Date(),
      },
      {
        id: "course2",
        name: "Calculus II",
        code: "MATH 202",
        instructor: "Prof. Smith",
        room: "Math 108",
        schedule: { day: "TTh", startTime: "13:00", endTime: "14:30" },
        description: "Integral calculus and series",
        createdAt: new Date(),
      },
    ];
    courses.forEach(course => this.courses.set(course.id, course));

    // Create sample assessments
    const assessments: Assessment[] = [
      {
        id: "assessment1",
        courseId: "course2",
        title: "Calculus II - Chapter 7 Quiz",
        type: "quiz",
        totalQuestions: 10,
        completedQuestions: 6,
        timeRemaining: 23,
        status: "active",
        createdAt: new Date(),
      },
      {
        id: "assessment2",
        courseId: "course1",
        title: "Chemistry Lab Report",
        type: "assignment",
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        status: "pending",
        createdAt: new Date(),
      },
      {
        id: "assessment3",
        courseId: "course1",
        title: "Physics Midterm",
        type: "exam",
        grade: "94%",
        status: "graded",
        createdAt: new Date(),
      },
    ];
    assessments.forEach(assessment => this.assessments.set(assessment.id, assessment));

    // Create sample messages
    const messages: Message[] = [
      {
        id: "message1",
        senderId: "user2",
        recipientId: "user1",
        groupName: "Study Group: Biology",
        content: "Can we meet at 3 PM for the lab review?",
        type: "group",
        isRead: false,
        createdAt: new Date(Date.now() - 15 * 60 * 1000),
      },
      {
        id: "message2",
        senderId: "user3",
        recipientId: "user1",
        content: "Office hours moved to Thursday 2-4 PM",
        type: "direct",
        isRead: false,
        createdAt: new Date(Date.now() - 60 * 60 * 1000),
      },
    ];
    messages.forEach(message => this.messages.set(message.id, message));

    // Create sample announcements
    const announcements: Announcement[] = [
      {
        id: "announcement1",
        title: "Registration Alert",
        content: "Spring semester registration opens November 15th at 8 AM",
        type: "alert",
        priority: "high",
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
      },
      {
        id: "announcement2",
        title: "Career Fair",
        content: "Tech companies recruiting - Student Center, Nov 20th",
        type: "event",
        priority: "normal",
        createdAt: new Date(),
      },
    ];
    announcements.forEach(announcement => this.announcements.set(announcement.id, announcement));

    // Create sample campus locations
    const locations: CampusLocation[] = [
      {
        id: "location1",
        name: "Science Building",
        type: "building",
        coordinates: { x: 4, y: 6 },
        status: "open",
        description: "Biology and Chemistry Labs",
        hours: "6 AM - 10 PM",
      },
      {
        id: "location2",
        name: "Student Union",
        type: "dining",
        coordinates: { x: 12, y: 8 },
        status: "open",
        description: "Dining and Recreation",
        hours: "Open until 9 PM",
      },
      {
        id: "location3",
        name: "Main Library",
        type: "library",
        coordinates: { x: 12, y: 8 },
        status: "open",
        description: "Study spaces and resources",
        hours: "24/7 Access",
      },
    ];
    locations.forEach(location => this.campusLocations.set(location.id, location));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id, createdAt: new Date() };
    this.users.set(id, user);
    return user;
  }

  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = { ...insertCourse, id, createdAt: new Date() };
    this.courses.set(id, course);
    return course;
  }

  async getAssessments(): Promise<Assessment[]> {
    return Array.from(this.assessments.values());
  }

  async getAssessmentsByCourse(courseId: string): Promise<Assessment[]> {
    return Array.from(this.assessments.values()).filter(a => a.courseId === courseId);
  }

  async getAssessment(id: string): Promise<Assessment | undefined> {
    return this.assessments.get(id);
  }

  async createAssessment(insertAssessment: InsertAssessment): Promise<Assessment> {
    const id = randomUUID();
    const assessment: Assessment = { ...insertAssessment, id, createdAt: new Date() };
    this.assessments.set(id, assessment);
    return assessment;
  }

  async updateAssessment(id: string, updates: Partial<Assessment>): Promise<Assessment | undefined> {
    const assessment = this.assessments.get(id);
    if (!assessment) return undefined;
    
    const updated = { ...assessment, ...updates };
    this.assessments.set(id, updated);
    return updated;
  }

  async getMessages(userId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter(m => m.recipientId === userId || m.senderId === userId)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async getMessage(id: string): Promise<Message | undefined> {
    return this.messages.get(id);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = randomUUID();
    const message: Message = { ...insertMessage, id, createdAt: new Date() };
    this.messages.set(id, message);
    return message;
  }

  async markMessageAsRead(id: string): Promise<void> {
    const message = this.messages.get(id);
    if (message) {
      message.isRead = true;
      this.messages.set(id, message);
    }
  }

  async getAnnouncements(): Promise<Announcement[]> {
    return Array.from(this.announcements.values())
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async createAnnouncement(insertAnnouncement: InsertAnnouncement): Promise<Announcement> {
    const id = randomUUID();
    const announcement: Announcement = { ...insertAnnouncement, id, createdAt: new Date() };
    this.announcements.set(id, announcement);
    return announcement;
  }

  async getCampusLocations(): Promise<CampusLocation[]> {
    return Array.from(this.campusLocations.values());
  }

  async createCampusLocation(insertLocation: InsertCampusLocation): Promise<CampusLocation> {
    const id = randomUUID();
    const location: CampusLocation = { ...insertLocation, id };
    this.campusLocations.set(id, location);
    return location;
  }
}

export const storage = new MemStorage();
