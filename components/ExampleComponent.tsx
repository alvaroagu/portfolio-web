"use client";

interface user {
  username: string;
  email: string;
  password: string;
}

export function ExampleComponent({ username, email, password }: user) {
  return (
    <>
      <div>this is my div in the component </div>
      <h1>Username: {username}</h1>
      <h2>Email: {email}</h2>
      <h3>Password: {password}</h3>
    </>
  );
}
