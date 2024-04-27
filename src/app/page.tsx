import Image from "next/image";
import { FaAnglesDown, FaPhoneVolume } from "react-icons/fa6";

type Dos = {
  title: string;
  phonetic: string;
  description: string;
};
export default function Home() {
  const dos: Dos[] = [
    {
      title: "Development",
      phonetic: "/dɪˈvɛləpm(ə)nt/",
      description: `developing is our expertise, as we deliver a truly remarkable   interface for your landing pages, multipage websites, portfolios, custom apps for enterprises with a different level of complexity, that’ll be in a full balance with design afterwards to make a perfect interaction - the core of everything.`,
    },
    {
      title: "Marketing",
      phonetic: "/ˈmɑːkɪtɪŋ/",
      description: `developing is our expertise, as we deliver a truly remarkable   interface for your landing pages, multipage websites, portfolios, custom apps for enterprises with a different level of complexity, that’ll be in a full balance with design afterwards to make a perfect interaction - the core of everything.`,
    },
    {
      title: "Design",
      phonetic: "/dɪˈzʌɪn/",
      description: `developing is our expertise, as we deliver a truly remarkable   interface for your landing pages, multipage websites, portfolios, custom apps for enterprises with a different level of complexity, that’ll be in a full balance with design afterwards to make a perfect interaction - the core of everything.`,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center z-10 gap-8 py-4 mx-8 ">
      <nav className="w-full ">
        <ul className="flex items-center justify-between">
          <li>
            <Image
              src="logo.svg"
              alt={""}
              width={76}
              height={33}
              className=""
            />
          </li>
          <li>
            <button className="border px-4 py-1 rounded-full">
              {">>> Available for Work <<<"}{" "}
            </button>
          </li>
          <li>
            <button className="border px-4 py-1 rounded-full">Menu</button>
          </li>
        </ul>
      </nav>
      <section className="relative w-full h-[100vh] flex flex-col justify-center items-center">
        <Image
          className="animate-pulse"
          src="/main.png"
          alt={""}
          width={600}
          height={400}
        />

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center uppercase tracking-widest -translate-y-20">
            The agency you've been looking for
          </h1>
          <h2>Scroll down</h2>
          <button className="mt-4 animate-bounce">
            <FaAnglesDown />
          </button>
        </div>
        <div className="absolute -z-10 top-0 w-full h-full bg-gradient-radial from-[#362A79]   to-[#171234] to-70%    "></div>
      </section>
      <section className="relative w-full h-[80vh] z-10   ">
        <Image src="/image.png" fill className=" z-0 opacity-50 " alt={""} />
        <p className="absolute text-center text-white font-black md:text-balance md:text-3xl md:leading-10  bottom-[50%] left-[50%] -translate-x-[50%] translate-y-[50%]  mx-auto uppercase ">
          Relink is a digital design agency, <br></br> but above all,we are
          humans <br></br> who are passionate about what we do
        </p>
      </section>
      <div className="uppercase h-32 text-5xl tracking-widest border-b">
        what we do?
      </div>
      <section className=" relative">
        <Image src={"/shapes.png"} fill className="opacity-10" alt={""} />
        {dos.map((e, indx) => (
          <div
            key={indx}
            className="flex flex-col items-start justify-start w-full"
          >
            <p className="text-[#F1B707] text-xl md:text-4xl">
              0{++indx} - {e.title}
            </p>
            <p className="text-xl">
              <span className="text-xl md:text-4xl opacity-0">0{indx} -</span>{" "}
              {e.phonetic}
            </p>

            <p className="text-md md:text-xl w-[50%] text-left mx-auto align-text-top">
              <span className="text-9xl text-[#F1B707]">Re</span>
              {e.description}
            </p>
          </div>
        ))}
      </section>
      <div className="uppercase h-32 text-5xl tracking-widest  ">
        Satisfied clients
      </div>
      <section>
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((e, indx) => (
            <div
              key={indx}
              className="bg-white h-48 w-48 gap-2"
              style={{ margin: `${Math.floor(Math.random() * 60) + 1}px` }}
            ></div>
          ))}
        </div>
      </section>
      <div className=" uppercase  text-5xl tracking-widest  ">
        <span className="relative text-center">
          <h1 className="text-5xl ">Let's collaborate and</h1>
          <h1 className="text-5xl ">make good things together</h1>
        </span>
        <Image
          className=" mt-12"
          width={980}
          height={260}
          src={"/hands.png"}
          alt={""}
        />
      </div>

      <button className="rounded-full bg-transparent border px-2 py-1 ">
        Let's Talk
      </button>
      <footer className="w-full">
        <div className="flex justify-between">
          <Image src={"/flower.png"} height={76} width={76} alt={""} />

          <div className="flex flex-col ">
            <h1>Contact</h1>
            <div className="flex flex-col">
              <span className="inline-flex justify-center items-center gap-2">
                <FaPhoneVolume /> +216 54041337
              </span>

              <span className="inline-flex justify-center items-center gap-2">
                <FaPhoneVolume /> +216 54041337
              </span>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1>Social Media</h1>
            <div className="flex flex-col">
              <span className="inline-flex justify-center items-center gap-2">
                <FaPhoneVolume /> +216 54041337
              </span>

              <span className="inline-flex justify-center items-center gap-2">
                <FaPhoneVolume /> +216 54041337
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
