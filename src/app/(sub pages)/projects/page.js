import Image from "next/image";
import bg from "../../../../public/background/autumn-field.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Grapes from "@/components/models/Grapes";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed w-full h-full top-0 left-0 object-cover object-center opacity-25"
      />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-20 -left-24 h-screen">
        <RenderModel>
          <Grapes />
        </RenderModel>
      </div>
    </>
  );
}
