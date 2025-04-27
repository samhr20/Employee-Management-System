const employee = [
  {
    id: 1,
    username: "rahul",
    firstName: "Rahul",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      { taskTitle: "Design Homepage", taskDesc: "Create a responsive homepage layout using Tailwind.", date: "2025-04-25", category: "Frontend", active: true, newTask: true, completed: false, failed: false },
      { taskTitle: "Fix Navbar Bug", taskDesc: "Resolve mobile view issues in navbar.", date: "2025-04-26", category: "Frontend", active: true, newTask: false, completed: false, failed: false },
      { taskTitle: "Update Footer", taskDesc: "Redesign footer section as per new guidelines.", date: "2025-04-27", category: "Frontend", active: true, newTask: false, completed: false, failed: false },
      { taskTitle: "Optimize Images", taskDesc: "Compress and optimize website images.", date: "2025-04-28", category: "Frontend", active: false, newTask: true, completed: false, failed: false },
      { taskTitle: "SEO Audit", taskDesc: "Run SEO audit and fix basic issues.", date: "2025-04-29", category: "SEO", active: false, newTask: false, completed: true, failed: false },
      { taskTitle: "Accessibility Check", taskDesc: "Ensure site is accessible for all users.", date: "2025-04-30", category: "Frontend", active: false, newTask: false, completed: false, failed: false }
    ]
  },
  {
    id: 2,
    username: "manish",
    firstName: "Manish",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      { taskTitle: "User Profile Page", taskDesc: "Create a profile page with edit features.", date: "2025-04-25", category: "Frontend", active: true, newTask: true, completed: false, failed: false },
      { taskTitle: "Password Reset Feature", taskDesc: "Add forgot password functionality.", date: "2025-04-27", category: "Backend", active: true, newTask: false, completed: false, failed: false },
      { taskTitle: "Authentication Setup", taskDesc: "Implement login/logout system.", date: "2025-04-28", category: "Backend", active: false, newTask: true, completed: false, failed: false },
      { taskTitle: "Email Verification", taskDesc: "Setup email verification system.", date: "2025-04-29", category: "Backend", active: false, newTask: false, completed: true, failed: false },
      { taskTitle: "Debug API Errors", taskDesc: "Fix 500 internal server errors.", date: "2025-04-30", category: "Backend", active: false, newTask: false, completed: false, failed: true },
      { taskTitle: "Session Management", taskDesc: "Implement proper session handling.", date: "2025-05-01", category: "Backend", active: false, newTask: false, completed: false, failed: false }
    ]
  },
  {
    id: 3,
    username: "priya",
    firstName: "Priya",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 3,
      completed: 1,
      failed: 1
    },
    tasks: [
      { taskTitle: "Set Up Database", taskDesc: "Initialize MongoDB and create basic schemas.", date: "2025-04-26", category: "Backend", active: true, newTask: true, completed: false, failed: false },
      { taskTitle: "Create API Routes", taskDesc: "Set up CRUD operations for blog posts.", date: "2025-04-27", category: "Backend", active: false, newTask: true, completed: false, failed: false },
      { taskTitle: "Database Indexing", taskDesc: "Improve query performance with indexing.", date: "2025-04-28", category: "Backend", active: false, newTask: true, completed: false, failed: false },
      { taskTitle: "Backup Strategy", taskDesc: "Implement daily database backups.", date: "2025-04-29", category: "Backend", active: false, newTask: false, completed: true, failed: false },
      { taskTitle: "Fix Data Migration Bug", taskDesc: "Resolve issues with old data migration.", date: "2025-04-30", category: "Backend", active: false, newTask: false, completed: false, failed: true },
      { taskTitle: "Security Audit", taskDesc: "Audit the database for security vulnerabilities.", date: "2025-05-01", category: "Backend", active: false, newTask: false, completed: false, failed: false }
    ]
  },
  {
    id: 4,
    username: "anmol",
    firstName: "Anmol",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      { taskTitle: "Deploy Website", taskDesc: "Deploy the website using Vercel.", date: "2025-04-28", category: "DevOps", active: true, newTask: true, completed: false, failed: false },
      { taskTitle: "Monitor Server", taskDesc: "Set up server uptime monitoring alerts.", date: "2025-04-29", category: "DevOps", active: true, newTask: false, completed: false, failed: false },
      { taskTitle: "Configure CI/CD", taskDesc: "Setup continuous integration pipeline.", date: "2025-04-30", category: "DevOps", active: true, newTask: false, completed: false, failed: false },
      { taskTitle: "Fix SSL Issues", taskDesc: "Fix SSL certificate errors on server.", date: "2025-05-01", category: "DevOps", active: false, newTask: false, completed: true, failed: false },
      { taskTitle: "Server Crash Debug", taskDesc: "Investigate and fix random server crashes.", date: "2025-05-02", category: "DevOps", active: false, newTask: false, completed: false, failed: true },
      { taskTitle: "Server Load Balancing", taskDesc: "Distribute server load effectively.", date: "2025-05-03", category: "DevOps", active: false, newTask: false, completed: false, failed: false }
    ]
  },
  {
    id: 5,
    username: "sakshi",
    firstName: "Sakshi",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      { taskTitle: "Write Blog Post", taskDesc: "Create a blog post on latest web technologies.", date: "2025-04-27", category: "Content Writing", active: true, newTask: true, completed: false, failed: false },
      { taskTitle: "Content Calendar Planning", taskDesc: "Plan content calendar for next month.", date: "2025-04-28", category: "Content Writing", active: true, newTask: false, completed: false, failed: false },
      { taskTitle: "Social Media Post", taskDesc: "Write post for LinkedIn and Twitter.", date: "2025-04-29", category: "Content Writing", active: false, newTask: true, completed: false, failed: false },
      { taskTitle: "Fix Grammar Errors", taskDesc: "Proofread and fix grammar errors.", date: "2025-04-30", category: "Content Writing", active: false, newTask: false, completed: true, failed: false },
      { taskTitle: "Rejected Blog Review", taskDesc: "Review rejected blog feedback.", date: "2025-05-01", category: "Content Writing", active: false, newTask: false, completed: false, failed: true },
      { taskTitle: "Research Topic Ideas", taskDesc: "Research new trending topics.", date: "2025-05-02", category: "Content Writing", active: false, newTask: false, completed: false, failed: false }
    ]
  }
];


const admin = [
  {
    id: 1,
    firstName: "Shubham",
    username: "sam",
    password: "123"
  }
];

export const setlocalstorage = () => {
  localStorage.setItem('employee', JSON.stringify(employee));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getlocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem('employee') );
  const admins = JSON.parse(localStorage.getItem('admin'));
  return { employees, admins };
}
