import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

export default function SubscribeSection() {
  return (
    <div className="mb-8 p-6 bg-white border rounded-lg">
      <h3 className="text-xl font-semibold mb-2">Subscribe for Updates</h3>
      <div className="flex flex-col sm:flex-row gap-2">
        <Input placeholder="Your email address" type="email" />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}
