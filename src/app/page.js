import Image from "next/image";
import bgImage from "../../public/home/download.jpeg";
import Link from "next/link";
import { BookOpenIcon } from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <Image
        src={bgImage}
        alt="background"
        fill
        sizes="100vw"
        className="object-cover blur-sm"
      />

      <div className="z-10 flex flex-col justify-center items-center bg-violet-50 text-black p-6 rounded-md">
        <div className="flex items-center gap-x-2 text-violet-600 pb-5 font-semibold text-xl">
          <BookOpenIcon className="w-12 h-12" />
          <p>Book Bridge</p>
        </div>
        <div className="bg-violet-600 text-white p-2 rounded-sm">
          <Link href="/store">Take me to the store</Link>
        </div>
      </div>
    </div>
  );
}
