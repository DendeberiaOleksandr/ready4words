import Image from "next/image";
import uk from "@/app/img/uk64.png";
import rus from "@/app/img/rus64.png";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <main className="p-4 flex flex-col items-center w-full h-screen bg-light-yellow">
      <h1 className="font-semibold text-[24px] text-dark-green">
        Vocabulary Set
      </h1>

      <div className="mt-4 flex flex-col w-full">
        <div className="flex items-center gap-2 rounded-lg bg-green shadow p-2">
          <div className="drop-shadow flex justify-center items-center">
            <Image
              width={42}
              height={42}
              style={{
                borderRadius: "0.8rem",
              }}
              alt="uk"
              src={uk}
            />
          </div>
          <input
            placeholder="Your text here.."
            className="shadow w-full rounded-lg py-1 px-4"
          />
        </div>

        <div className="mt-4 flex flex-col items-center gap-2 rounded-lg bg-light-green shadow p-2">
          <div className="flex items-center gap-2 w-full">
            <div className="flex justify-center items-center">
              <Image
                width={42}
                height={42}
                style={{
                  borderRadius: "0.8rem",
                }}
                alt="ru"
                className="drop-shadow"
                src={rus}
              />
            </div>
            <input
              placeholder="Translation"
              className="shadow w-full rounded-lg py-1 px-4"
            />
          </div>

          <div className="flex flex-col shadow w-full mt-4">
            <div className="flex rounded-t-lg bg-green p-2">
              <span className="flex flex-1 text-white font-semibold">Word</span>
              <span className="flex flex-1 text-white font-semibold">Translation</span>
              <span className="flex flex-1 text-white font-semibold">Transcription</span>
            </div>
            <div className="bg-light-yellow p-2 flex flex-col rounded-b-lg">
              <div className="flex py-2">
                <span className="text-dark-green flex flex-1">Example</span>
                <span className="text-dark-green flex flex-1">Пример</span>
                <span className="text-dark-green flex flex-1">[ɪɡˈzɑːmpl]</span>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-4 px-4 py-2 shadow rounded-lg flex items-center justify-center bg-dark-green">
          <FaPlus color="white" size={18} />
        </button>
      </div>
    </main>
  );
}
