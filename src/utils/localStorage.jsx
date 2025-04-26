const employee = [
  {
    "id": 1,
    "username": "rahul",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Design Homepage",
        "taskDesc": "Create a responsive homepage layout using Tailwind.",
        "date": "2025-04-25",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "username": "manish",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "User Profile Page",
        "taskDesc": "Create a profile page with edit features.",
        "date": "2025-04-25",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "username": "admin.shubham@example.com",
    "password": "123"
  }
];

export const setlocalstorage = () => {
  localStorage.setItem('employee', JSON.stringify(employee));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getlocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem('employee') || '[]');
  const admins = JSON.parse(localStorage.getItem('admin') || '[]');
  return { employees, admins };
}
