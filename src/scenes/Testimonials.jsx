import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
    before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;
  return (
    <section id="testimonials" className="pt-32 pb-16 ">
      {/* Headings */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        className="md:w-1/3 text-center md:text-left">
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          Testimonials
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className="mt-10">
          Here’s what people have said about working with me.
        </p>
      </motion.div>

      {/* Testimonials */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          className={`bg-red ${testimonialStyles} before:content-person1`}>
          <p className=" font-playfair text-2xl md:text-6xl">“</p>
          <p className="text-center text-sm md:text-md">
            I had the pleasure of working with Aya on a project for a client. He
            was very professional and completed the project on time. I would
            definitely work with him again.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`bg-blue ${testimonialStyles} before:content-person2`}>
          <p className=" font-playfair text-2xl md:text-6xl">“</p>
          <p className="text-center text-sm md:text-md">
            Aya is a great developer. He is very professional and easy to work
            with. I would definitely recommend him to anyone looking for a
            developer.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`bg-yellow ${testimonialStyles} before:content-person3`}>
          <p className=" font-playfair text-2xl md:text-6xl">“</p>
          <p className="text-center text-sm md:text-md">
            Aya is a great developer. He is very professional and easy to work
            with. I would definitely recommend him to anyone looking for a
            developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
