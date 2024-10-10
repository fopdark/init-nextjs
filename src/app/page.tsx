import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="flex justify-center">
        <Image
          alt="background"
          src={"/assets/img/Mushroom.jpg"}
          width={695}
          height={900}
          className="w-auto h-dvh"
        />
      </div>
    </>
  );
}
