import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
import photo6 from "../assets/photo6.jpeg";

export const PhotoList = [
    {image: photo1},
    {image: photo2},
    {image: photo3},
    {image: photo4},
    {image: photo5},
    {image: photo6}
].sort(() => Math.random() - 0.5);