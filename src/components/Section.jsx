export const Section = ({ id, children, className = "", hero = false }) => {
  return (
    <section
      id={id}
      className={`site-section ${hero ? "is-hero min-h-screen flex flex-col justify-center" : ""} ${className}`}
    >
      <div className="fluid-container">{children}</div>
    </section>
  );
};
