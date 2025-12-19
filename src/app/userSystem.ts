interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  role: "admin" | "user";
}

const users: User[] = [
  {
    id: 1,
    name: "Aashish",
    email: "aashish@gmail.com",
    isActive: true,
    role: "user",
  },
  {
    id: 2,
    name: "Ramesh",
    email: "ramesh@gmail.com",
    isActive: false,
    role: "admin",
  },
  {
    id: 3,
    name: "Suresh",
    email: "suresh@gmail.com",
    isActive: true,
    role: "user",
  },
];

function getUserById(id: number): User | undefined {
  return users.find((user) => user.id === id);
}

function printUserInfo(user: User): void {
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Role: ${user.role}`);
  console.log(`Status: ${user.isActive ? "Active" : "Inactive"}`);
}

const userIdToFind: number = 1;
const foundUser = getUserById(userIdToFind);

if (foundUser) {
  printUserInfo(foundUser);
} else {
  console.log("User not found");
}
