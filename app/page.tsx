import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Component() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Tenho interesse em treinar com voces");
    window.open(`https://wa.me/12982986505?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-[100dvh] bg-white relative flex flex-col items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-05%20at%2010.54.09-eg273IKjCcMxUskSGuf2Rdfuha1FAy.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-05%20at%2010.54.09-eg273IKjCcMxUskSGuf2Rdfuha1FAy.png"
            alt="Cornerman Fighting Center Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          EM BREVE
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-black mb-8">
          A maior academia de lutas na América Latina
        </p>

        <div className="space-y-6 mb-8">
          <p className="text-black flex items-center justify-center gap-2">
            <span className="inline-block">📍</span>
            Rua Mergenthaler, 900 - Vila Leopoldina
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {[
              "Muay Thai",
              "Boxe",
              "MMA",
              "KickBoxing",
              "Capoeira",
              "Jiu Jitsu",
              "Academia",
              "E muito mais"
            ].map((modalidade) => (
              <span
                key={modalidade}
                className="px-4 py-2 bg-red-600 text-white rounded-full text-sm md:text-base"
              >
                {modalidade}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleWhatsAppClick}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full w-full sm:w-auto"
          >
            Quero Treinar
          </Button>

          <Link
            href="https://www.instagram.com/cornermanfc/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-black hover:text-red-600 transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span>@cornermanfc</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
