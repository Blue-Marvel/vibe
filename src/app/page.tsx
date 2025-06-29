import { Button } from "@/components/ui/button";
import React from "react";
import { prisma } from "@/lib/db";

const Home = async () => {

  const users = await prisma.user.findMany();

return <div>
    <Button variant={"new"}>Click me</Button>
    <pre>{JSON.stringify(users, null, 2)}</pre>
  </div>;
  
};

export default Home;