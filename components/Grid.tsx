import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


export function Grid() {
  return (
    <div className="bg-[#e7fafa]" id="about">
      <h2 className="text-center text-xl md:text-4xl pb-8 pt-9 font-bold light:text-black dark:text-white">
        My some advantages
      </h2>
      <BentoGrid className="max-w-4xl mx-auto pb-8">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 0 || i === 3 ? "col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton1 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
      src="./b1.svg"
      alt=""
      className="object-center object-cover w-full h-full"
    />
  </div>
);

const Skeleton2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-black overflow-hidden">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpf0CNLUEsv64y8KLLWLwyV6tp56Twy5Q5aA&s"
      alt=""
      className="overflow-hidden w-full h-full"
    />
  </div>
);

const Skeleton3 = () => (
  <div className="flex flex-1 h-full min-h-[6rem] rounded-xl bg-black">
    <img src="./grid.svg" alt="" className="overflow-hidden w-full h-full" />
    <img src="./b4.svg" alt="" className="overflow-hidden w-full h-full" />
  </div>
);

const Skeleton4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-black">
    <img src="./grid.svg" alt="" className="overflow-hidden w-full h-full" />
    <img src="./b5.svg" alt="" className="overflow-hidden w-full h-full" />
  </div>
);

const items = [
  {
    title: "I priotize client collaboration, fostering open communication",
    description:
      "Experience the synergy of collaboration, where groundbreaking ideas and innovative solutions are born through open and effective communication.",
    header: <Skeleton1 />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Learning, Evolving with every opportunity",
    description:
      "Immerse yourself in the transformative power of technology, where every opportunity is a stepping stone to growth and evolution.",
    header: <Skeleton2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tech enthusiast with a passion for development.",
    description:
      "Uncover the beauty of thoughtful and functional design, driven by a deep passion for technology and development.",
    header: <Skeleton3 />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Currently building a new modern web-app",
    description:
      "Explore the profound impact of effective communication, crucial to the success of building modern, impactful web applications",
    header: <Skeleton4 />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
