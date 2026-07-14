import Image from 'next/image';

export default function HeroGraphic() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm border border-neutral-200 dark:border-neutral-800 shadow-[0_20px_45px_-28px_rgba(0,0,0,0.35)] bg-white dark:bg-neutral-900">
        <Image
          src={`${basePath}/src/img/img1.png`}
          alt="Jake portrait"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}
