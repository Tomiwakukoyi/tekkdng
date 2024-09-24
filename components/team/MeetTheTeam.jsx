import Image from "next/image";
import employees from "@/public/data/employees";

const MeetTheTeam = ({ picture, name, position }) => {
  return (
    <div className=" bg-gray-100 rounded-2xl  mx-auto gap-3 flex flex-col p-3  items-center justify-center">
      <Image
        src={`/images/${picture}`}
        width={200}
        height={200}
        className="rounded-xl"
      />
      <div className=" font-sans flex flex-col items-center justify-center">
        <h1 className=" font-medium">{name}</h1>
        <span className="  text-center text-sm">{position}</span>
      </div>
    </div>
  );
};

export default MeetTheTeam;
