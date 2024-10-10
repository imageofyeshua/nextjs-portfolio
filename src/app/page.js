import Image from "next/image";
import bg from "../../public/background/autumn-leaves.png";
import RenderModel from "@/components/RenderModel";
import Radio from "@/components/models/Radio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-screen">
        {/* navigation and 3d model */}
        <RenderModel>
          <Radio />
        </RenderModel>
      </div>
    </main>
  );
}
