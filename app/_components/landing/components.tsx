import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WendelImage } from "./styled";

export const Wendel = () => (
  <div>
    <WendelImage
      src="/people/wendel-v1.webp"
      alt="Engr. Wendel & Family"
      height={800}
      width={600}
    />
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <Card className="bg-green-100">
        <CardHeader>
          <CardTitle>Engineering Graduate</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Wendel got his masters degree in mechanical engineering from Darwin
            University.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="bg-blue-100">
        <CardHeader>
          <CardTitle>Work - Life Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Wendel was able to bring his whole family in Australia while he was
            still studying.{" "}
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="bg-red-100">
        <CardHeader>
          <CardTitle>Brighter Future</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            I can see a better future for my family. My two kids were
            immediately accepted in schools. There are plenty of parks we can go
            to spend the weekends. The community is great and everything we need
            for the house are easily accessible.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  </div>
);
