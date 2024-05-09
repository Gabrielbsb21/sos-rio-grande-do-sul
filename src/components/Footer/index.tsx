import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className=" bg-primary bg-opacity-5 pt-6 pb-6 flex justify-center items-center text-center"
      data-wow-delay=".1s"
    >
      <section className="container">
        <p>
          Desenvolvido por{' '}
          <Link
            href="https://github.com/Gabrielbsb21"
            className="font-semibold"
            target='_blank'
          >
            Gabriel Teixeira.
          </Link>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
