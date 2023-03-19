import { world } from "@/world";
import Image from "next/image";
import React from "react";

const World = () => {
  return (
    <section className=" my-10 py-20 lg:px-40" name="world">
      <h1 className="main-heading text-center mx-10 md:mx-0">
        My Shots around the world
      </h1>
      <div className="grid lg:grid-cols-4 gap-5 mt-20 md:grid-cols-3 grid-cols-2 px-10">
        {world.map((el, index) => (
          <Image
            key={index}
            alt="photo"
            src={el.image}
            className=" md:h-[300px] h-[200px]  w-[1000px] object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default World;
