export default function section(props) {
  return (
    <section className={`bg-white ${props.className}`} id={props.id}>
      {props.children}
    </section>
  );
}
