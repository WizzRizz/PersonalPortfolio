import { GoToIcon } from "../../Icons";

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
  link?: string;
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
    <div className="border border-white/20 rounded-lg p-3 sm:p-4 w-full sm:w-80 flex flex-col gap-2">
      <img src={img} className="rounded-sm w-full  object-cover" />
      <p className="text-white text-sm sm:text-base font-bold truncate">
        {title}
      </p>
      <p className="text-white/70 text-[10px] sm:text-xs line-clamp-2">
        {description}
      </p>

      <div className="flex flex-row items-center gap-1 w-full mt-auto">
        <button
          className="text-yellow hover:underline flex flex-row items-center gap-1"
          onClick={() => link && window.open(link, "_blank")}
        >
          <p className="text-[10px] sm:text-xs">View Project</p>
          <GoToIcon />
        </button>

        {avatars.length > 0 && (
          <div className="ml-auto flex flex-row items-center -space-x-2">
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
