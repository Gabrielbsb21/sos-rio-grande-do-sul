/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import SectionTitle from '@/components/SectionTitle';
import items from './items';

const MaterialsSection = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Materiais"
          paragraph="Confira os materiais mais urgentes:"
          center
          width="665px"
        />
        <article
          className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-dark"
          data-wow-delay=".1s"
        >
          <ul className='flex flex-col gap-4'>
            {items.map((item) => (
              <li className="flex items-center" key={item.id}>
                <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    className="fill-current"
                  >
                    <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
                  </svg>
                </span>
                <p className="m-0 text-xl font-medium text-body-color">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default MaterialsSection;
