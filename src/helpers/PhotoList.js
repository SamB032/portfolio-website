import photo1 from "../assets/photo1.webp";
import photo2 from "../assets/photo2.webp";
import photo3 from "../assets/photo3.webp";
import photo4 from "../assets/photo4.webp";
import photo5 from "../assets/photo5.webp";
import photo6 from "../assets/photo6.webp";
import photo7 from "../assets/photo7.webp";
import photo8 from "../assets/photo8.webp";
import photo9 from "../assets/photo9.webp";

//Command: cwebp file.jpeg -o file.webp

export const PhotoList = [
    {image: photo1},
    {image: photo2},
    {image: photo3},
    {image: photo4},
    {image: photo5},
    {image: photo6},
    {image: photo7},
    {image: photo8},
    {image: photo9}
].sort(() => Math.random() - 0.5);