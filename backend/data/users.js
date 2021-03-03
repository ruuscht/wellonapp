import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Abdifatah Brokle",
    email: "abdi@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "fungizo lobino",
    email: "fungo@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
