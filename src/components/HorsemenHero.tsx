import VerticalSeparator from "./VerticalSeparator";

export default function HorsemenHero() {
  return (
    <section className="pt-32 text-center text-white">
      <h3 className="py-4 text-lg">INTRODUCING:</h3>
      <h2 className="py-8 text-4xl text-center text-red-500">
        4 Horsemen of the Cryptopocalypse
      </h2>

      <p className="max-w-sm m-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        felis a felis lobortis, in tincidunt enim bibendum. Praesent nec lectus
        at nibh aliquam porttitor vitae sit amet ligula.
      </p>

      <VerticalSeparator className="mt-10" />
    </section>
  );
}
