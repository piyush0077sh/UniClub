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
      username: "rajshekhar",
      password: "password123",
      name: "Raj Shekhar",
      email: "raj.shekhar@motilenehru.du.ac.in",
      gpa: "8.7",
      credits: 18,
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
        instructor: "Prof. Sharma",
        room: "Lab Block 204",
        schedule: { day: "MWF", startTime: "10:00", endTime: "11:30" },
        description: "Advanced organic chemistry principles for B.Sc Chemistry",
        createdAt: new Date(),
      },
      {
        id: "course2",
        name: "Mathematics II",
        code: "MATH 202",
        instructor: "Dr. Gupta",
        room: "Academic Block 108",
        schedule: { day: "TTh", startTime: "13:00", endTime: "14:30" },
        description: "Integral calculus and differential equations",
        createdAt: new Date(),
      },
    ];
    courses.forEach(course => this.courses.set(course.id, course));

    // Create sample assessments
    const assessments: Assessment[] = [
      {
        id: "assessment1",
        courseId: "course2",
        title: "Mathematics II - Differential Equations Quiz",
        type: "quiz",
        dueDate: null,
        totalQuestions: 10,
        completedQuestions: 6,
        timeRemaining: 23,
        grade: null,
        status: "active",
        createdAt: new Date(),
      },
      {
        id: "assessment2",
        courseId: "course1",
        title: "Organic Chemistry Lab Report",
        type: "assignment",
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        totalQuestions: null,
        completedQuestions: null,
        timeRemaining: null,
        grade: null,
        status: "pending",
        createdAt: new Date(),
      },
      {
        id: "assessment3",
        courseId: "course1",
        title: "Physics Honours Midterm",
        type: "exam",
        dueDate: null,
        totalQuestions: null,
        completedQuestions: null,
        timeRemaining: null,
        grade: "94%",
        status: "graded",
        createdAt: new Date(),
      },
    ];
    assessments.forEach(assessment => this.assessments.set(assessment.id, assessment));

    // Create sample messages with Reddit-style features
    const messages: Message[] = [
      {
        id: "message1",
        senderId: "user2",
        recipientId: null,
        groupName: "Chemistry Honours Discussion",
        content: "Can we meet at 3 PM for the practical review? Professor wants us to discuss the benzene reactions.",
        type: "channel",
        channel: "study-groups",
        upvotes: 12,
        isAdmin: false,
        isPinned: true,
        isRead: false,
        createdAt: new Date(Date.now() - 15 * 60 * 1000),
      },
      {
        id: "message2",
        senderId: "admin1",
        recipientId: null,
        groupName: null,
        content: "📌 ADMIN: Office hours for Economics moved to Thursday 2-4 PM at DSE building. All students please take note.",
        type: "channel",
        channel: "announcements",
        upvotes: 24,
        isAdmin: true,
        isPinned: true,
        isRead: false,
        createdAt: new Date(Date.now() - 60 * 60 * 1000),
      },
      {
        id: "message3",
        senderId: "user4",
        recipientId: null,
        groupName: null,
        content: "Anyone up for cricket match this evening at college ground? Need 4 more players!",
        type: "channel",
        channel: "social",
        upvotes: 8,
        isAdmin: false,
        isPinned: false,
        isRead: false,
        createdAt: new Date(Date.now() - 30 * 60 * 1000),
      },
    ];
    messages.forEach(message => this.messages.set(message.id, message));

    // Create sample announcements
    const announcements: Announcement[] = [
      {
        id: "announcement1",
        title: "Semester Registration",
        content: "Even semester registration for Motilal Nehru College starts January 15th at 9 AM. Visit DU portal for course selection.",
        type: "alert",
        priority: "high",
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
      },
      {
        id: "announcement2",
        title: "DU Cultural Fest",
        content: "Annual cultural festival 'Confluence' at North Campus - Feb 5-7. Register your college team now!",
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
        name: "Motilal Nehru College Lab Block",
        type: "building",
        coordinates: { x: 4, y: 6 },
        status: "open",
        description: "Chemistry and Physics Labs for practical sessions",
        hours: "8 AM - 6 PM",
      },
      {
        id: "location2",
        name: "DU Canteen",
        type: "dining",
        coordinates: { x: 12, y: 8 },
        status: "open",
        description: "North Campus dining facility",
        hours: "7 AM - 8 PM",
      },
      {
        id: "location3",
        name: "Delhi School of Economics Library",
        type: "library",
        coordinates: { x: 12, y: 8 },
        status: "open",
        description: "Central library with digital resources",
        hours: "6 AM - 11 PM",
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
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt: new Date(),
      gpa: insertUser.gpa || null,
      credits: insertUser.credits || null,
      avatar: insertUser.avatar || null
    };
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
    const course: Course = { 
      ...insertCourse, 
      id, 
      createdAt: new Date(),
      schedule: insertCourse.schedule || null,
      description: insertCourse.description || null
    };
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
    const assessment: Assessment = { 
      ...insertAssessment, 
      id, 
      createdAt: new Date(),
      dueDate: insertAssessment.dueDate || null,
      totalQuestions: insertAssessment.totalQuestions || null,
      completedQuestions: insertAssessment.completedQuestions || null,
      timeRemaining: insertAssessment.timeRemaining || null,
      grade: insertAssessment.grade || null,
      status: insertAssessment.status || "pending"
    };
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
    const message: Message = { 
      ...insertMessage, 
      id, 
      createdAt: new Date(),
      recipientId: insertMessage.recipientId || null,
      groupName: insertMessage.groupName || null,
      type: insertMessage.type || "direct",
      channel: insertMessage.channel || null,
      upvotes: insertMessage.upvotes || 0,
      isAdmin: insertMessage.isAdmin || false,
      isPinned: insertMessage.isPinned || false,
      isRead: insertMessage.isRead || false
    };
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
    const announcement: Announcement = { 
      ...insertAnnouncement, 
      id, 
      createdAt: new Date(),
      priority: insertAnnouncement.priority || "normal"
    };
    this.announcements.set(id, announcement);
    return announcement;
  }

  async getCampusLocations(): Promise<CampusLocation[]> {
    return Array.from(this.campusLocations.values());
  }

  async createCampusLocation(insertLocation: InsertCampusLocation): Promise<CampusLocation> {
    const id = randomUUID();
    const location: CampusLocation = { 
      ...insertLocation, 
      id,
      coordinates: insertLocation.coordinates || null,
      status: insertLocation.status || "open",
      description: insertLocation.description || null,
      hours: insertLocation.hours || null
    };
    this.campusLocations.set(id, location);
    return location;
  }
}

export const storage = new MemStorage();
