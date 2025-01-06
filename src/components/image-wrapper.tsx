import Image from "next/image";

export default function ImageWrapper({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      width={1000}
      height={1000}
    />
  );
}
