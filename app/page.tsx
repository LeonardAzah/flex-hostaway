import { Button } from "@/components/ui/button";

export default function Home() {
    redirect("/dashboard");

  return (
    <div>
      Flex Dashboard
      <Button>Apply</Button>
    </div>
  );
}
