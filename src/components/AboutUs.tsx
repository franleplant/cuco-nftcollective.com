import VerticalSeparator from "./VerticalSeparator";

export default function AboutUs() {
  return (
    <section className="flex flex-col text-center text-white gap-20">
      <div>
        <h2>ABOUT US</h2>
        <VerticalSeparator className="mt-2" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus
        felis a felis lobortis, in tincidunt enim bibendum. Praesent nec lectus
        at nibh aliquam porttitor vitae sit amet ligula. Praesent semper mollis
        interdum. Donec at congue lacus. Donec vulputate nunc sem, at vehicula
        dui sagittis vitae. Donec eget eros et tortor congue commodo ut at orci.
        Suspendisse in dolor eu leo maximus fermentum. Nunc accumsan, dolor
        vitae accumsan ultricies, enim lorem molestie ligula, sit amet rutrum
        tellus orci sit amet arcu. Aliquam non tortor nec dolor malesuada
        efficitur non in purus. Nunc gravida rhoncus nisi, ac fermentum nulla
        tincidunt a. Suspendisse luctus ex ut hendrerit aliquam. Sed ac
        tincidunt purus. Proin suscipit quam eget consequat varius. Ut aliquam,
        est id ultrices aliquam, eros lacus cursus risus, et molestie dui metus
        eu purus.
      </p>

      <div className="flex flex-row items-center justify-center gap-5">
        <a href="TODO">@franleplant</a>
        <a href="TODO">@nico_alcubo</a>
      </div>
    </section>
  );
}
