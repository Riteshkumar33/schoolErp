// ─── Mock Data for School ERP ───────────────────────────────────────────────
// All data is purely illustrative. Replace with API calls when backend is ready.

// ── Students ──────────────────────────────────────────────────────────────────
export type Student = {
  id: string
  name: string
  rollNo: string
  class: string
  section: string
  guardian: string
  contact: string
  email: string
  gender: "Male" | "Female"
  dob: string
  admissionDate: string
  status: "Active" | "Inactive" | "Graduated"
  avatar?: string
  bloodGroup: string
  address: string
}

export const students: Student[] = [
  { id: "STU001", name: "Aarav Sharma", rollNo: "101", class: "10", section: "A", guardian: "Rajesh Sharma", contact: "+91 98765 43210", email: "aarav.s@school.com", gender: "Male", dob: "2011-03-15", admissionDate: "2021-04-01", status: "Active", bloodGroup: "O+", address: "12 MG Road, New Delhi" },
  { id: "STU002", name: "Priya Patel", rollNo: "102", class: "10", section: "A", guardian: "Suresh Patel", contact: "+91 98765 43211", email: "priya.p@school.com", gender: "Female", dob: "2011-07-22", admissionDate: "2021-04-01", status: "Active", bloodGroup: "A+", address: "45 Park Street, Mumbai" },
  { id: "STU003", name: "Rahul Verma", rollNo: "103", class: "10", section: "B", guardian: "Anil Verma", contact: "+91 98765 43212", email: "rahul.v@school.com", gender: "Male", dob: "2011-01-10", admissionDate: "2021-04-02", status: "Active", bloodGroup: "B+", address: "78 Civil Lines, Jaipur" },
  { id: "STU004", name: "Ananya Gupta", rollNo: "201", class: "9", section: "A", guardian: "Vikram Gupta", contact: "+91 98765 43213", email: "ananya.g@school.com", gender: "Female", dob: "2012-05-18", admissionDate: "2022-04-01", status: "Active", bloodGroup: "AB+", address: "23 Lake Road, Kolkata" },
  { id: "STU005", name: "Arjun Singh", rollNo: "202", class: "9", section: "A", guardian: "Harpreet Singh", contact: "+91 98765 43214", email: "arjun.s@school.com", gender: "Male", dob: "2012-09-03", admissionDate: "2022-04-01", status: "Active", bloodGroup: "O-", address: "56 Sector 17, Chandigarh" },
  { id: "STU006", name: "Diya Reddy", rollNo: "203", class: "9", section: "B", guardian: "Krishna Reddy", contact: "+91 98765 43215", email: "diya.r@school.com", gender: "Female", dob: "2012-11-25", admissionDate: "2022-04-02", status: "Active", bloodGroup: "A-", address: "89 Banjara Hills, Hyderabad" },
  { id: "STU007", name: "Kabir Khan", rollNo: "301", class: "8", section: "A", guardian: "Imran Khan", contact: "+91 98765 43216", email: "kabir.k@school.com", gender: "Male", dob: "2013-02-14", admissionDate: "2023-04-01", status: "Active", bloodGroup: "B-", address: "34 Hazratganj, Lucknow" },
  { id: "STU008", name: "Meera Nair", rollNo: "302", class: "8", section: "A", guardian: "Sunil Nair", contact: "+91 98765 43217", email: "meera.n@school.com", gender: "Female", dob: "2013-06-30", admissionDate: "2023-04-01", status: "Active", bloodGroup: "O+", address: "67 MG Road, Kochi" },
  { id: "STU009", name: "Rohan Das", rollNo: "303", class: "8", section: "B", guardian: "Tapan Das", contact: "+91 98765 43218", email: "rohan.d@school.com", gender: "Male", dob: "2013-08-19", admissionDate: "2023-04-02", status: "Inactive", bloodGroup: "AB-", address: "91 Salt Lake, Kolkata" },
  { id: "STU010", name: "Saanvi Joshi", rollNo: "304", class: "8", section: "B", guardian: "Manoj Joshi", contact: "+91 98765 43219", email: "saanvi.j@school.com", gender: "Female", dob: "2013-12-05", admissionDate: "2023-04-02", status: "Active", bloodGroup: "A+", address: "15 FC Road, Pune" },
  { id: "STU011", name: "Vivaan Mehta", rollNo: "401", class: "7", section: "A", guardian: "Paresh Mehta", contact: "+91 98765 43220", email: "vivaan.m@school.com", gender: "Male", dob: "2014-04-11", admissionDate: "2024-04-01", status: "Active", bloodGroup: "B+", address: "42 CG Road, Ahmedabad" },
  { id: "STU012", name: "Ishita Banerjee", rollNo: "402", class: "7", section: "A", guardian: "Debashis Banerjee", contact: "+91 98765 43221", email: "ishita.b@school.com", gender: "Female", dob: "2014-10-28", admissionDate: "2024-04-01", status: "Active", bloodGroup: "O+", address: "73 Park Circus, Kolkata" },
]

// ── Staff ─────────────────────────────────────────────────────────────────────
export type Staff = {
  id: string
  name: string
  department: string
  designation: string
  contact: string
  email: string
  joinDate: string
  status: "Active" | "On Leave" | "Resigned"
  gender: "Male" | "Female"
  qualification: string
  salary: number
}

export const staffMembers: Staff[] = [
  { id: "STF001", name: "Dr. Anand Kumar", department: "Mathematics", designation: "HOD", contact: "+91 99876 54321", email: "anand.k@school.com", joinDate: "2015-06-01", status: "Active", gender: "Male", qualification: "Ph.D Mathematics", salary: 85000 },
  { id: "STF002", name: "Sunita Devi", department: "Science", designation: "Senior Teacher", contact: "+91 99876 54322", email: "sunita.d@school.com", joinDate: "2016-07-15", status: "Active", gender: "Female", qualification: "M.Sc Physics", salary: 72000 },
  { id: "STF003", name: "Ramesh Yadav", department: "English", designation: "Teacher", contact: "+91 99876 54323", email: "ramesh.y@school.com", joinDate: "2018-04-01", status: "Active", gender: "Male", qualification: "M.A English", salary: 55000 },
  { id: "STF004", name: "Kavita Mishra", department: "Hindi", designation: "Teacher", contact: "+91 99876 54324", email: "kavita.m@school.com", joinDate: "2019-07-01", status: "Active", gender: "Female", qualification: "M.A Hindi", salary: 52000 },
  { id: "STF005", name: "Ajay Thakur", department: "Social Science", designation: "Senior Teacher", contact: "+91 99876 54325", email: "ajay.t@school.com", joinDate: "2017-04-01", status: "Active", gender: "Male", qualification: "M.A History", salary: 68000 },
  { id: "STF006", name: "Priyanka Chopra", department: "Computer Science", designation: "Teacher", contact: "+91 99876 54326", email: "priyanka.c@school.com", joinDate: "2020-01-15", status: "Active", gender: "Female", qualification: "M.Tech CS", salary: 62000 },
  { id: "STF007", name: "Deepak Jain", department: "Physical Education", designation: "Sports Coach", contact: "+91 99876 54327", email: "deepak.j@school.com", joinDate: "2019-08-01", status: "On Leave", gender: "Male", qualification: "B.P.Ed", salary: 45000 },
  { id: "STF008", name: "Nisha Agarwal", department: "Administration", designation: "Office Manager", contact: "+91 99876 54328", email: "nisha.a@school.com", joinDate: "2016-03-01", status: "Active", gender: "Female", qualification: "MBA", salary: 58000 },
  { id: "STF009", name: "Suresh Pandey", department: "Science", designation: "Lab Assistant", contact: "+91 99876 54329", email: "suresh.p@school.com", joinDate: "2021-06-01", status: "Active", gender: "Male", qualification: "B.Sc Chemistry", salary: 32000 },
  { id: "STF010", name: "Meena Sharma", department: "Arts", designation: "Teacher", contact: "+91 99876 54330", email: "meena.s@school.com", joinDate: "2022-04-01", status: "Active", gender: "Female", qualification: "MFA", salary: 48000 },
]

// ── Parents ───────────────────────────────────────────────────────────────────
export type Parent = {
  id: string
  name: string
  children: string[]
  contact: string
  email: string
  occupation: string
  portalStatus: "Active" | "Inactive" | "Pending"
  address: string
}

export const parents: Parent[] = [
  { id: "PAR001", name: "Rajesh Sharma", children: ["Aarav Sharma"], contact: "+91 98765 43210", email: "rajesh.s@gmail.com", occupation: "Software Engineer", portalStatus: "Active", address: "12 MG Road, New Delhi" },
  { id: "PAR002", name: "Suresh Patel", children: ["Priya Patel"], contact: "+91 98765 43211", email: "suresh.p@gmail.com", occupation: "Business Owner", portalStatus: "Active", address: "45 Park Street, Mumbai" },
  { id: "PAR003", name: "Anil Verma", children: ["Rahul Verma"], contact: "+91 98765 43212", email: "anil.v@gmail.com", occupation: "Doctor", portalStatus: "Active", address: "78 Civil Lines, Jaipur" },
  { id: "PAR004", name: "Vikram Gupta", children: ["Ananya Gupta"], contact: "+91 98765 43213", email: "vikram.g@gmail.com", occupation: "Architect", portalStatus: "Inactive", address: "23 Lake Road, Kolkata" },
  { id: "PAR005", name: "Harpreet Singh", children: ["Arjun Singh"], contact: "+91 98765 43214", email: "harpreet.s@gmail.com", occupation: "Army Officer", portalStatus: "Active", address: "56 Sector 17, Chandigarh" },
  { id: "PAR006", name: "Krishna Reddy", children: ["Diya Reddy"], contact: "+91 98765 43215", email: "krishna.r@gmail.com", occupation: "Professor", portalStatus: "Active", address: "89 Banjara Hills, Hyderabad" },
  { id: "PAR007", name: "Imran Khan", children: ["Kabir Khan"], contact: "+91 98765 43216", email: "imran.k@gmail.com", occupation: "Journalist", portalStatus: "Pending", address: "34 Hazratganj, Lucknow" },
  { id: "PAR008", name: "Sunil Nair", children: ["Meera Nair"], contact: "+91 98765 43217", email: "sunil.n@gmail.com", occupation: "Bank Manager", portalStatus: "Active", address: "67 MG Road, Kochi" },
]

// ── Classes ───────────────────────────────────────────────────────────────────
export type ClassSection = {
  id: string
  class: string
  section: string
  classTeacher: string
  totalStudents: number
  capacity: number
  room: string
}

export const classSections: ClassSection[] = [
  { id: "CLS001", class: "10", section: "A", classTeacher: "Dr. Anand Kumar", totalStudents: 42, capacity: 45, room: "Room 301" },
  { id: "CLS002", class: "10", section: "B", classTeacher: "Sunita Devi", totalStudents: 40, capacity: 45, room: "Room 302" },
  { id: "CLS003", class: "9", section: "A", classTeacher: "Ramesh Yadav", totalStudents: 38, capacity: 45, room: "Room 201" },
  { id: "CLS004", class: "9", section: "B", classTeacher: "Kavita Mishra", totalStudents: 41, capacity: 45, room: "Room 202" },
  { id: "CLS005", class: "8", section: "A", classTeacher: "Ajay Thakur", totalStudents: 35, capacity: 40, room: "Room 101" },
  { id: "CLS006", class: "8", section: "B", classTeacher: "Priyanka Chopra", totalStudents: 37, capacity: 40, room: "Room 102" },
  { id: "CLS007", class: "7", section: "A", classTeacher: "Meena Sharma", totalStudents: 34, capacity: 40, room: "Room 001" },
  { id: "CLS008", class: "7", section: "B", classTeacher: "Deepak Jain", totalStudents: 33, capacity: 40, room: "Room 002" },
]

// ── Subjects ──────────────────────────────────────────────────────────────────
export type Subject = {
  id: string
  code: string
  name: string
  type: "Core" | "Elective" | "Lab"
  teachers: string[]
  classes: string[]
}

export const subjects: Subject[] = [
  { id: "SUB001", code: "MATH", name: "Mathematics", type: "Core", teachers: ["Dr. Anand Kumar"], classes: ["7","8","9","10"] },
  { id: "SUB002", code: "PHY", name: "Physics", type: "Core", teachers: ["Sunita Devi"], classes: ["9","10"] },
  { id: "SUB003", code: "CHEM", name: "Chemistry", type: "Core", teachers: ["Suresh Pandey"], classes: ["9","10"] },
  { id: "SUB004", code: "BIO", name: "Biology", type: "Core", teachers: ["Sunita Devi"], classes: ["9","10"] },
  { id: "SUB005", code: "ENG", name: "English", type: "Core", teachers: ["Ramesh Yadav"], classes: ["7","8","9","10"] },
  { id: "SUB006", code: "HIN", name: "Hindi", type: "Core", teachers: ["Kavita Mishra"], classes: ["7","8","9","10"] },
  { id: "SUB007", code: "SST", name: "Social Science", type: "Core", teachers: ["Ajay Thakur"], classes: ["7","8","9","10"] },
  { id: "SUB008", code: "CS", name: "Computer Science", type: "Elective", teachers: ["Priyanka Chopra"], classes: ["8","9","10"] },
  { id: "SUB009", code: "ART", name: "Art & Craft", type: "Elective", teachers: ["Meena Sharma"], classes: ["7","8"] },
  { id: "SUB010", code: "PE", name: "Physical Education", type: "Core", teachers: ["Deepak Jain"], classes: ["7","8","9","10"] },
  { id: "SUB011", code: "PHY-L", name: "Physics Lab", type: "Lab", teachers: ["Sunita Devi", "Suresh Pandey"], classes: ["9","10"] },
  { id: "SUB012", code: "CHEM-L", name: "Chemistry Lab", type: "Lab", teachers: ["Suresh Pandey"], classes: ["9","10"] },
]

// ── Admission Inquiries ───────────────────────────────────────────────────────
export type Inquiry = {
  id: string
  studentName: string
  parentName: string
  contact: string
  classApplied: string
  date: string
  source: "Walk-in" | "Website" | "Referral" | "Advertisement"
  status: "New" | "Contacted" | "Scheduled" | "Converted" | "Closed"
}

export const inquiries: Inquiry[] = [
  { id: "INQ001", studentName: "Aditya Rajan", parentName: "Sunil Rajan", contact: "+91 99887 76655", classApplied: "6", date: "2026-06-01", source: "Website", status: "New" },
  { id: "INQ002", studentName: "Sneha Kapoor", parentName: "Rakesh Kapoor", contact: "+91 99887 76656", classApplied: "8", date: "2026-05-28", source: "Referral", status: "Contacted" },
  { id: "INQ003", studentName: "Yash Malhotra", parentName: "Pankaj Malhotra", contact: "+91 99887 76657", classApplied: "7", date: "2026-05-25", source: "Walk-in", status: "Scheduled" },
  { id: "INQ004", studentName: "Tanya Bhatt", parentName: "Nikhil Bhatt", contact: "+91 99887 76658", classApplied: "9", date: "2026-05-20", source: "Advertisement", status: "Converted" },
  { id: "INQ005", studentName: "Karan Desai", parentName: "Manish Desai", contact: "+91 99887 76659", classApplied: "10", date: "2026-06-05", source: "Website", status: "New" },
  { id: "INQ006", studentName: "Pooja Iyer", parentName: "Ramesh Iyer", contact: "+91 99887 76660", classApplied: "6", date: "2026-06-03", source: "Referral", status: "Contacted" },
]

// ── Fee Structure ─────────────────────────────────────────────────────────────
export type FeeStructure = {
  id: string
  class: string
  feeType: string
  amount: number
  frequency: "Monthly" | "Quarterly" | "Annually" | "One-time"
  dueDate: string
}

export const feeStructures: FeeStructure[] = [
  { id: "FEE001", class: "10", feeType: "Tuition Fee", amount: 5000, frequency: "Monthly", dueDate: "10th of every month" },
  { id: "FEE002", class: "10", feeType: "Lab Fee", amount: 3000, frequency: "Quarterly", dueDate: "1st of quarter" },
  { id: "FEE003", class: "10", feeType: "Annual Fee", amount: 15000, frequency: "Annually", dueDate: "April 1" },
  { id: "FEE004", class: "9", feeType: "Tuition Fee", amount: 4500, frequency: "Monthly", dueDate: "10th of every month" },
  { id: "FEE005", class: "9", feeType: "Lab Fee", amount: 2500, frequency: "Quarterly", dueDate: "1st of quarter" },
  { id: "FEE006", class: "8", feeType: "Tuition Fee", amount: 4000, frequency: "Monthly", dueDate: "10th of every month" },
  { id: "FEE007", class: "7", feeType: "Tuition Fee", amount: 3500, frequency: "Monthly", dueDate: "10th of every month" },
  { id: "FEE008", class: "All", feeType: "Transport Fee", amount: 2000, frequency: "Monthly", dueDate: "10th of every month" },
  { id: "FEE009", class: "All", feeType: "Admission Fee", amount: 25000, frequency: "One-time", dueDate: "At admission" },
]

// ── Invoices ──────────────────────────────────────────────────────────────────
export type Invoice = {
  id: string
  invoiceNo: string
  studentName: string
  class: string
  amount: number
  status: "Paid" | "Pending" | "Overdue" | "Partial"
  issueDate: string
  dueDate: string
  paidDate?: string
}

export const invoices: Invoice[] = [
  { id: "INV001", invoiceNo: "INV-2026-001", studentName: "Aarav Sharma", class: "10-A", amount: 5000, status: "Paid", issueDate: "2026-06-01", dueDate: "2026-06-10", paidDate: "2026-06-05" },
  { id: "INV002", invoiceNo: "INV-2026-002", studentName: "Priya Patel", class: "10-A", amount: 5000, status: "Paid", issueDate: "2026-06-01", dueDate: "2026-06-10", paidDate: "2026-06-08" },
  { id: "INV003", invoiceNo: "INV-2026-003", studentName: "Rahul Verma", class: "10-B", amount: 5000, status: "Pending", issueDate: "2026-06-01", dueDate: "2026-06-10" },
  { id: "INV004", invoiceNo: "INV-2026-004", studentName: "Ananya Gupta", class: "9-A", amount: 4500, status: "Overdue", issueDate: "2026-05-01", dueDate: "2026-05-10" },
  { id: "INV005", invoiceNo: "INV-2026-005", studentName: "Arjun Singh", class: "9-A", amount: 4500, status: "Paid", issueDate: "2026-06-01", dueDate: "2026-06-10", paidDate: "2026-06-03" },
  { id: "INV006", invoiceNo: "INV-2026-006", studentName: "Diya Reddy", class: "9-B", amount: 4500, status: "Partial", issueDate: "2026-06-01", dueDate: "2026-06-10" },
  { id: "INV007", invoiceNo: "INV-2026-007", studentName: "Kabir Khan", class: "8-A", amount: 4000, status: "Pending", issueDate: "2026-06-01", dueDate: "2026-06-10" },
  { id: "INV008", invoiceNo: "INV-2026-008", studentName: "Meera Nair", class: "8-A", amount: 4000, status: "Paid", issueDate: "2026-06-01", dueDate: "2026-06-10", paidDate: "2026-06-09" },
]

// ── Payments ──────────────────────────────────────────────────────────────────
export type Payment = {
  id: string
  receiptNo: string
  studentName: string
  amount: number
  method: "Cash" | "UPI" | "Bank Transfer" | "Card" | "Cheque"
  date: string
  invoiceRef: string
}

export const payments: Payment[] = [
  { id: "PAY001", receiptNo: "RCT-2026-001", studentName: "Aarav Sharma", amount: 5000, method: "UPI", date: "2026-06-05", invoiceRef: "INV-2026-001" },
  { id: "PAY002", receiptNo: "RCT-2026-002", studentName: "Priya Patel", amount: 5000, method: "Bank Transfer", date: "2026-06-08", invoiceRef: "INV-2026-002" },
  { id: "PAY003", receiptNo: "RCT-2026-003", studentName: "Arjun Singh", amount: 4500, method: "Card", date: "2026-06-03", invoiceRef: "INV-2026-005" },
  { id: "PAY004", receiptNo: "RCT-2026-004", studentName: "Meera Nair", amount: 4000, method: "Cash", date: "2026-06-09", invoiceRef: "INV-2026-008" },
  { id: "PAY005", receiptNo: "RCT-2026-005", studentName: "Diya Reddy", amount: 2500, method: "UPI", date: "2026-06-07", invoiceRef: "INV-2026-006" },
]

// ── Vehicles ──────────────────────────────────────────────────────────────────
export type Vehicle = {
  id: string
  vehicleNo: string
  type: "Bus" | "Van" | "Mini Bus"
  driver: string
  route: string
  capacity: number
  status: "Active" | "Maintenance" | "Inactive"
  insurance: string
}

export const vehicles: Vehicle[] = [
  { id: "VEH001", vehicleNo: "DL-01-AB-1234", type: "Bus", driver: "Raju Chauhan", route: "Route 1 - North Delhi", capacity: 45, status: "Active", insurance: "2027-03-15" },
  { id: "VEH002", vehicleNo: "DL-01-CD-5678", type: "Bus", driver: "Surender Kumar", route: "Route 2 - South Delhi", capacity: 45, status: "Active", insurance: "2027-01-20" },
  { id: "VEH003", vehicleNo: "DL-01-EF-9012", type: "Mini Bus", driver: "Mohammad Ali", route: "Route 3 - East Delhi", capacity: 25, status: "Active", insurance: "2026-12-10" },
  { id: "VEH004", vehicleNo: "DL-01-GH-3456", type: "Van", driver: "Pappu Yadav", route: "Route 4 - West Delhi", capacity: 15, status: "Maintenance", insurance: "2027-06-05" },
  { id: "VEH005", vehicleNo: "DL-01-IJ-7890", type: "Bus", driver: "Ramesh Gupta", route: "Route 5 - Central Delhi", capacity: 45, status: "Active", insurance: "2027-02-28" },
]

// ── Books ─────────────────────────────────────────────────────────────────────
export type Book = {
  id: string
  title: string
  author: string
  isbn: string
  category: string
  totalCopies: number
  availableCopies: number
  status: "Available" | "Low Stock" | "Out of Stock"
}

export const books: Book[] = [
  { id: "BK001", title: "NCERT Mathematics Class 10", author: "NCERT", isbn: "978-81-7450-001-1", category: "Textbook", totalCopies: 100, availableCopies: 45, status: "Available" },
  { id: "BK002", title: "Physics Fundamentals", author: "HC Verma", isbn: "978-81-7450-002-2", category: "Reference", totalCopies: 30, availableCopies: 8, status: "Low Stock" },
  { id: "BK003", title: "English Grammar & Composition", author: "Wren & Martin", isbn: "978-81-7450-003-3", category: "Reference", totalCopies: 50, availableCopies: 22, status: "Available" },
  { id: "BK004", title: "The Story of My Experiments with Truth", author: "M.K. Gandhi", isbn: "978-81-7450-004-4", category: "Biography", totalCopies: 20, availableCopies: 0, status: "Out of Stock" },
  { id: "BK005", title: "Wings of Fire", author: "APJ Abdul Kalam", isbn: "978-81-7450-005-5", category: "Biography", totalCopies: 25, availableCopies: 12, status: "Available" },
  { id: "BK006", title: "NCERT Science Class 9", author: "NCERT", isbn: "978-81-7450-006-6", category: "Textbook", totalCopies: 80, availableCopies: 35, status: "Available" },
  { id: "BK007", title: "R.D. Sharma Mathematics", author: "R.D. Sharma", isbn: "978-81-7450-007-7", category: "Reference", totalCopies: 40, availableCopies: 3, status: "Low Stock" },
  { id: "BK008", title: "Computer Science with Python", author: "Sumita Arora", isbn: "978-81-7450-008-8", category: "Textbook", totalCopies: 35, availableCopies: 18, status: "Available" },
]

// ── Announcements ─────────────────────────────────────────────────────────────
export type Announcement = {
  id: string
  title: string
  content: string
  author: string
  target: "All" | "Students" | "Staff" | "Parents"
  priority: "High" | "Medium" | "Low"
  date: string
  status: "Published" | "Draft" | "Scheduled"
}

export const announcements: Announcement[] = [
  { id: "ANN001", title: "Annual Day Celebration 2026", content: "Annual day celebrations will be held on July 15th. All students must participate.", author: "Principal", target: "All", priority: "High", date: "2026-06-10", status: "Published" },
  { id: "ANN002", title: "Summer Vacation Schedule", content: "Summer vacation from June 20 to July 5. School reopens on July 6.", author: "Admin Office", target: "All", priority: "High", date: "2026-06-08", status: "Published" },
  { id: "ANN003", title: "PTM - Class 10", content: "Parent-Teacher Meeting for Class 10 scheduled for June 14.", author: "Vice Principal", target: "Parents", priority: "Medium", date: "2026-06-05", status: "Published" },
  { id: "ANN004", title: "Sports Day Registration", content: "Registration for inter-house sports competition is now open.", author: "Sports Dept", target: "Students", priority: "Medium", date: "2026-06-03", status: "Published" },
  { id: "ANN005", title: "Staff Meeting - Curriculum Review", content: "Monthly staff meeting to review Q2 curriculum progress.", author: "Principal", target: "Staff", priority: "Low", date: "2026-06-12", status: "Scheduled" },
  { id: "ANN006", title: "Library Timings Update", content: "Library will now be open from 8 AM to 5 PM on all working days.", author: "Librarian", target: "All", priority: "Low", date: "2026-06-01", status: "Published" },
]

// ── Exam Schedule ─────────────────────────────────────────────────────────────
export type Exam = {
  id: string
  name: string
  subject: string
  class: string
  date: string
  startTime: string
  endTime: string
  room: string
  maxMarks: number
}

export const exams: Exam[] = [
  { id: "EXM001", name: "Mid-Term 2026", subject: "Mathematics", class: "10", date: "2026-07-15", startTime: "09:00", endTime: "12:00", room: "Hall A", maxMarks: 100 },
  { id: "EXM002", name: "Mid-Term 2026", subject: "Physics", class: "10", date: "2026-07-17", startTime: "09:00", endTime: "12:00", room: "Hall A", maxMarks: 100 },
  { id: "EXM003", name: "Mid-Term 2026", subject: "Chemistry", class: "10", date: "2026-07-19", startTime: "09:00", endTime: "12:00", room: "Hall B", maxMarks: 100 },
  { id: "EXM004", name: "Mid-Term 2026", subject: "English", class: "10", date: "2026-07-21", startTime: "09:00", endTime: "11:00", room: "Hall A", maxMarks: 80 },
  { id: "EXM005", name: "Mid-Term 2026", subject: "Mathematics", class: "9", date: "2026-07-16", startTime: "09:00", endTime: "12:00", room: "Hall B", maxMarks: 100 },
  { id: "EXM006", name: "Mid-Term 2026", subject: "Science", class: "9", date: "2026-07-18", startTime: "09:00", endTime: "12:00", room: "Hall B", maxMarks: 100 },
  { id: "EXM007", name: "Mid-Term 2026", subject: "English", class: "9", date: "2026-07-20", startTime: "09:00", endTime: "11:00", room: "Hall A", maxMarks: 80 },
  { id: "EXM008", name: "Mid-Term 2026", subject: "Hindi", class: "9", date: "2026-07-22", startTime: "09:00", endTime: "11:00", room: "Hall B", maxMarks: 80 },
]

// ── Users ─────────────────────────────────────────────────────────────────────
export type User = {
  id: string
  name: string
  email: string
  role: "Super Admin" | "Admin" | "Teacher" | "Student" | "Parent" | "Accountant"
  status: "Active" | "Inactive" | "Suspended"
  lastLogin: string
  createdAt: string
}

export const users: User[] = [
  { id: "USR001", name: "Ritesh Kumar", email: "riteshkumar@gmail.com", role: "Super Admin", status: "Active", lastLogin: "2026-06-11 10:30", createdAt: "2025-01-01" },
  { id: "USR002", name: "Dr. Anand Kumar", email: "anand.k@school.com", role: "Teacher", status: "Active", lastLogin: "2026-06-11 09:15", createdAt: "2025-06-01" },
  { id: "USR003", name: "Sunita Devi", email: "sunita.d@school.com", role: "Teacher", status: "Active", lastLogin: "2026-06-10 14:30", createdAt: "2025-06-01" },
  { id: "USR004", name: "Nisha Agarwal", email: "nisha.a@school.com", role: "Admin", status: "Active", lastLogin: "2026-06-11 08:45", createdAt: "2025-03-01" },
  { id: "USR005", name: "Rajesh Sharma", email: "rajesh.s@gmail.com", role: "Parent", status: "Active", lastLogin: "2026-06-09 20:15", createdAt: "2025-04-01" },
  { id: "USR006", name: "Aarav Sharma", email: "aarav.s@school.com", role: "Student", status: "Active", lastLogin: "2026-06-10 16:30", createdAt: "2025-04-01" },
  { id: "USR007", name: "Priya Finance", email: "priya.f@school.com", role: "Accountant", status: "Active", lastLogin: "2026-06-11 11:00", createdAt: "2025-05-01" },
  { id: "USR008", name: "Ramesh Yadav", email: "ramesh.y@school.com", role: "Teacher", status: "Inactive", lastLogin: "2026-05-15 09:00", createdAt: "2025-06-01" },
]

// ── Roles ─────────────────────────────────────────────────────────────────────
export type Role = {
  id: string
  name: string
  description: string
  usersCount: number
  permissions: string[]
}

export const roles: Role[] = [
  { id: "ROL001", name: "Super Admin", description: "Full access to all modules and settings", usersCount: 1, permissions: ["All Modules", "System Settings", "User Management", "Data Export", "Billing"] },
  { id: "ROL002", name: "Admin", description: "School administration with limited system access", usersCount: 2, permissions: ["Academics", "People", "Finance", "Communication", "Reports"] },
  { id: "ROL003", name: "Teacher", description: "Academic operations and student management", usersCount: 8, permissions: ["Academics", "Attendance", "Exams", "Assignments", "Communication"] },
  { id: "ROL004", name: "Student", description: "View-only access to own academics and fees", usersCount: 300, permissions: ["View Academics", "View Fees", "View Timetable", "Assignments"] },
  { id: "ROL005", name: "Parent", description: "View child academic progress and fee status", usersCount: 250, permissions: ["View Child Academics", "View Fees", "Communication", "Leave Requests"] },
  { id: "ROL006", name: "Accountant", description: "Finance module full access", usersCount: 2, permissions: ["Finance", "Fee Collection", "Reports", "Invoices", "Payments"] },
]

// ── Tickets ───────────────────────────────────────────────────────────────────
export type Ticket = {
  id: string
  ticketNo: string
  subject: string
  description: string
  priority: "High" | "Medium" | "Low"
  status: "Open" | "In Progress" | "Resolved" | "Closed"
  createdBy: string
  createdAt: string
  updatedAt: string
}

export const tickets: Ticket[] = [
  { id: "TKT001", ticketNo: "TKT-2026-001", subject: "Unable to access attendance module", description: "Getting 403 error when trying to mark attendance", priority: "High", status: "Open", createdBy: "Sunita Devi", createdAt: "2026-06-11", updatedAt: "2026-06-11" },
  { id: "TKT002", ticketNo: "TKT-2026-002", subject: "Fee receipt not generating", description: "After payment, PDF receipt is not being generated", priority: "High", status: "In Progress", createdBy: "Nisha Agarwal", createdAt: "2026-06-10", updatedAt: "2026-06-11" },
  { id: "TKT003", ticketNo: "TKT-2026-003", subject: "Student data import issue", description: "CSV import failing for class 7 students", priority: "Medium", status: "In Progress", createdBy: "Nisha Agarwal", createdAt: "2026-06-09", updatedAt: "2026-06-10" },
  { id: "TKT004", ticketNo: "TKT-2026-004", subject: "Timetable display bug on mobile", description: "Timetable grid overlaps on mobile screens", priority: "Low", status: "Open", createdBy: "Ramesh Yadav", createdAt: "2026-06-08", updatedAt: "2026-06-08" },
  { id: "TKT005", ticketNo: "TKT-2026-005", subject: "Request: Bulk SMS feature", description: "Need ability to send SMS to all parents of a class", priority: "Medium", status: "Resolved", createdBy: "Dr. Anand Kumar", createdAt: "2026-06-05", updatedAt: "2026-06-10" },
  { id: "TKT006", ticketNo: "TKT-2026-006", subject: "Report card template update", description: "Need to add school logo to report card template", priority: "Low", status: "Closed", createdBy: "Kavita Mishra", createdAt: "2026-06-01", updatedAt: "2026-06-07" },
]

// ── Timetable ─────────────────────────────────────────────────────────────────
export type TimetableSlot = {
  day: string
  period: number
  time: string
  subject: string
  teacher: string
  room: string
}

export const timetable10A: TimetableSlot[] = [
  // Monday
  { day: "Monday", period: 1, time: "08:00 - 08:45", subject: "Mathematics", teacher: "Dr. Anand Kumar", room: "301" },
  { day: "Monday", period: 2, time: "08:45 - 09:30", subject: "English", teacher: "Ramesh Yadav", room: "301" },
  { day: "Monday", period: 3, time: "09:45 - 10:30", subject: "Physics", teacher: "Sunita Devi", room: "Lab 1" },
  { day: "Monday", period: 4, time: "10:30 - 11:15", subject: "Hindi", teacher: "Kavita Mishra", room: "301" },
  { day: "Monday", period: 5, time: "11:30 - 12:15", subject: "Computer Science", teacher: "Priyanka Chopra", room: "CS Lab" },
  { day: "Monday", period: 6, time: "12:15 - 01:00", subject: "Social Science", teacher: "Ajay Thakur", room: "301" },
  // Tuesday
  { day: "Tuesday", period: 1, time: "08:00 - 08:45", subject: "Physics", teacher: "Sunita Devi", room: "301" },
  { day: "Tuesday", period: 2, time: "08:45 - 09:30", subject: "Mathematics", teacher: "Dr. Anand Kumar", room: "301" },
  { day: "Tuesday", period: 3, time: "09:45 - 10:30", subject: "Chemistry", teacher: "Suresh Pandey", room: "Lab 2" },
  { day: "Tuesday", period: 4, time: "10:30 - 11:15", subject: "English", teacher: "Ramesh Yadav", room: "301" },
  { day: "Tuesday", period: 5, time: "11:30 - 12:15", subject: "Art & Craft", teacher: "Meena Sharma", room: "Art Room" },
  { day: "Tuesday", period: 6, time: "12:15 - 01:00", subject: "Physical Education", teacher: "Deepak Jain", room: "Ground" },
  // Wednesday
  { day: "Wednesday", period: 1, time: "08:00 - 08:45", subject: "English", teacher: "Ramesh Yadav", room: "301" },
  { day: "Wednesday", period: 2, time: "08:45 - 09:30", subject: "Chemistry", teacher: "Suresh Pandey", room: "301" },
  { day: "Wednesday", period: 3, time: "09:45 - 10:30", subject: "Mathematics", teacher: "Dr. Anand Kumar", room: "301" },
  { day: "Wednesday", period: 4, time: "10:30 - 11:15", subject: "Biology", teacher: "Sunita Devi", room: "Lab 1" },
  { day: "Wednesday", period: 5, time: "11:30 - 12:15", subject: "Hindi", teacher: "Kavita Mishra", room: "301" },
  { day: "Wednesday", period: 6, time: "12:15 - 01:00", subject: "Social Science", teacher: "Ajay Thakur", room: "301" },
  // Thursday
  { day: "Thursday", period: 1, time: "08:00 - 08:45", subject: "Chemistry", teacher: "Suresh Pandey", room: "301" },
  { day: "Thursday", period: 2, time: "08:45 - 09:30", subject: "Physics", teacher: "Sunita Devi", room: "301" },
  { day: "Thursday", period: 3, time: "09:45 - 10:30", subject: "English", teacher: "Ramesh Yadav", room: "301" },
  { day: "Thursday", period: 4, time: "10:30 - 11:15", subject: "Mathematics", teacher: "Dr. Anand Kumar", room: "301" },
  { day: "Thursday", period: 5, time: "11:30 - 12:15", subject: "Computer Science", teacher: "Priyanka Chopra", room: "CS Lab" },
  { day: "Thursday", period: 6, time: "12:15 - 01:00", subject: "Hindi", teacher: "Kavita Mishra", room: "301" },
  // Friday
  { day: "Friday", period: 1, time: "08:00 - 08:45", subject: "Hindi", teacher: "Kavita Mishra", room: "301" },
  { day: "Friday", period: 2, time: "08:45 - 09:30", subject: "Social Science", teacher: "Ajay Thakur", room: "301" },
  { day: "Friday", period: 3, time: "09:45 - 10:30", subject: "Physics Lab", teacher: "Sunita Devi", room: "Lab 1" },
  { day: "Friday", period: 4, time: "10:30 - 11:15", subject: "Physics Lab", teacher: "Sunita Devi", room: "Lab 1" },
  { day: "Friday", period: 5, time: "11:30 - 12:15", subject: "Mathematics", teacher: "Dr. Anand Kumar", room: "301" },
  { day: "Friday", period: 6, time: "12:15 - 01:00", subject: "Physical Education", teacher: "Deepak Jain", room: "Ground" },
  // Saturday
  { day: "Saturday", period: 1, time: "08:00 - 08:45", subject: "Mathematics", teacher: "Dr. Anand Kumar", room: "301" },
  { day: "Saturday", period: 2, time: "08:45 - 09:30", subject: "Chemistry Lab", teacher: "Suresh Pandey", room: "Lab 2" },
  { day: "Saturday", period: 3, time: "09:45 - 10:30", subject: "Chemistry Lab", teacher: "Suresh Pandey", room: "Lab 2" },
  { day: "Saturday", period: 4, time: "10:30 - 11:15", subject: "English", teacher: "Ramesh Yadav", room: "301" },
]

// ── Dashboard Stats ───────────────────────────────────────────────────────────
export const dashboardStats = {
  totalStudents: 1250,
  totalStaff: 85,
  totalRevenue: 4250000,
  attendanceRate: 94.2,
  feesCollected: 3800000,
  feesPending: 450000,
  upcomingEvents: 5,
  newInquiries: 12,
}

export const attendanceTrend = [
  { month: "Jan", rate: 92.5 },
  { month: "Feb", rate: 93.1 },
  { month: "Mar", rate: 91.8 },
  { month: "Apr", rate: 94.5 },
  { month: "May", rate: 93.9 },
  { month: "Jun", rate: 94.2 },
]

export const feeCollectionTrend = [
  { month: "Jan", collected: 380000, pending: 45000 },
  { month: "Feb", collected: 395000, pending: 32000 },
  { month: "Mar", collected: 410000, pending: 28000 },
  { month: "Apr", collected: 425000, pending: 50000 },
  { month: "May", collected: 390000, pending: 62000 },
  { month: "Jun", collected: 400000, pending: 45000 },
]

export const enrollmentByClass = [
  { class: "Class 7", students: 67 },
  { class: "Class 8", students: 72 },
  { class: "Class 9", students: 79 },
  { class: "Class 10", students: 82 },
]

export const genderDistribution = [
  { gender: "Male", count: 680 },
  { gender: "Female", count: 570 },
]

export const recentActivities = [
  { id: 1, action: "New student enrolled", detail: "Vivaan Mehta - Class 7A", time: "2 hours ago", type: "student" as const },
  { id: 2, action: "Fee payment received", detail: "₹5,000 from Aarav Sharma (10-A)", time: "3 hours ago", type: "finance" as const },
  { id: 3, action: "Attendance marked", detail: "Class 10-A - 42/42 present", time: "4 hours ago", type: "attendance" as const },
  { id: 4, action: "Exam schedule published", detail: "Mid-Term 2026 for Class 9 & 10", time: "5 hours ago", type: "exam" as const },
  { id: 5, action: "Leave request approved", detail: "Deepak Jain - 3 days medical leave", time: "6 hours ago", type: "staff" as const },
  { id: 6, action: "New inquiry received", detail: "Aditya Rajan - Class 6 admission", time: "8 hours ago", type: "admission" as const },
  { id: 7, action: "Announcement published", detail: "Annual Day Celebration 2026", time: "1 day ago", type: "communication" as const },
  { id: 8, action: "Library book returned", detail: "Physics Fundamentals by Rahul Verma", time: "1 day ago", type: "library" as const },
]
