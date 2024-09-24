import {
  collage01,
  collage02,
  collage05,
  collage07,
  collage08,
} from "@/assets/collages";
import { PhotoView } from "react-photo-view";

const CollegesImages = [collage01, collage02, collage05, collage07, collage08];

const Gallery = () => {
  return (
    <section className="min-h-dvh">
      <div className="container">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {CollegesImages.map((collage, index) => (
            <PhotoView src={collage} key={index}>
              <div
                className="relative min-h-[20rem]"
                data-aos-delay={index && ((index + 1) / 2) * 150}
                data-aos="zoom-in"
              >
                <img className="absolute-cover rounded-md" src={collage} />
              </div>
            </PhotoView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
