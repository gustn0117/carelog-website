import fs from "fs";
import path from "path";

export interface Contact {
  id: string;
  hospitalName: string;
  doctorName: string;
  phone: string;
  email: string;
  category: string;
  region: string;
  currentMarketing: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "contacts.json");

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf-8");
  }
}

export function getContacts(): Contact[] {
  ensureDataFile();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

export function addContact(data: Omit<Contact, "id" | "createdAt" | "isRead">): Contact {
  const contacts = getContacts();
  const contact: Contact = {
    ...data,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    createdAt: new Date().toISOString(),
    isRead: false,
  };
  contacts.unshift(contact);
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2), "utf-8");
  return contact;
}

export function markAsRead(id: string): boolean {
  const contacts = getContacts();
  const contact = contacts.find((c) => c.id === id);
  if (!contact) return false;
  contact.isRead = true;
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2), "utf-8");
  return true;
}

export function deleteContact(id: string): boolean {
  const contacts = getContacts();
  const idx = contacts.findIndex((c) => c.id === id);
  if (idx === -1) return false;
  contacts.splice(idx, 1);
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2), "utf-8");
  return true;
}
