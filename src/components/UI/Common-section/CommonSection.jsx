import React from "react";

function CommonSection({ title }) {
  return (
    <section className="py-0 bg-common-img bg-cover bg-no-repeat bg-center">
      <div className="py-32 px-0 bg-hColor/70">
        <div className="container mx-auto">
          <h2 className="text-white">{title}</h2>
        </div>
      </div>
    </section>
  );
}

export default CommonSection;
