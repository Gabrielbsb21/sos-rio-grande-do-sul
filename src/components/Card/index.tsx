/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Link from 'next/link';

import { CardCollectionPoints } from '@/types/card';
import { FaMapLocationDot } from 'react-icons/fa6';

const Card = ({
  collectionPoints
}: {
  collectionPoints: CardCollectionPoints;
}) => {
  const { name, description, locale } = collectionPoints;

  return (
    <article className="w-full">
      <div
        className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
          {name}
        </h3>
        <p className="mb-2 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          {description}
        </p>
        <Link href={locale} target="blank">
          <FaMapLocationDot className="text-2xl" />
        </Link>
      </div>
    </article>
  );
};

export default Card;
