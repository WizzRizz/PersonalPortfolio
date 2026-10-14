import { GoToIcon } from "../../Icons";
import { Link } from "react-router";

type Avatar = {
  src: string;
  link?: string;
  alt?: string;
};

type CardProps = {
  title: string;
  description: string;
  img: string;
  classname?: string;
  link: string;
  avatars?: Avatar[];
};

export const Card = ({
  title,
  description,
  img,
  link,
  avatars = [],
}: CardProps) => {
  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-lg border border-white/20 p-3 sm:p-4 hover-mode">
      <img
        src={img}
        alt={`${title} project preview`}
        className="aspect-video w-full h-full lg:h-46 rounded-sm object-cover"
      />
      <p className="text-white text-sm sm:text-base font-bold leading-tight break-words">
        {title}
      </p>
      <p className="text-white/70 text-[10px] sm:text-xs">{description}</p>

      <div className="flex flex-row items-center gap-1 w-full mt-auto">
        <Link
          to={link}
          target="_blank"
          className="text-yellow hover:underline flex flex-row items-center gap-1"
        >
          <p className="text-[10px] sm:text-xs">View Project</p>
          <GoToIcon />
        </Link>

        {avatars.length > 0 && (
          <div className="ml-auto flex flex-row items-center -space-x-2 ">
            {avatars.map((a, i) => (
              <button
                key={i}
                className="rounded-full overflow-hidden size-6 sm:size-7 ring-2 ring-[#00101d] hover:scale-110 transition"
                onClick={() => a.link && window.open(a.link, "_blank")}
              >
                <img
                  src={a.src}
                  alt={a.alt ?? `${title} avatar ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
