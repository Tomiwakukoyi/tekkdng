import Image from "next/image";

const Desc = ({ header, spanContent, image }) => {
  return (
    <div className="flex flex-col font-serif">
      <Image
        src={`/images/${image}`}
        width={300}
        height={300}
        className="p-0.5 rounded-3xl shadow-md mb-8 hover:w-[303px] mx-auto "
      />
      <h1 className="text font-medium mx-auto pb-2">{header}</h1>
      <span className=" text-[14px] w-[350px] mx-auto text-gray-600 text-center">
        {spanContent}
      </span>
    </div>
  );
};

export default Desc;
