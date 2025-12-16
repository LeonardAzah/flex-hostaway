import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");

  return (
    <div>
      Flex Dashboard
      <Button>Apply</Button>
    </div>
  );
}
