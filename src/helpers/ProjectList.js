import proj1 from "../assets/project1.webp";
import proj2 from "../assets/project2.webp";
import proj3 from "../assets/project3.webp";
import proj4 from "../assets/project4.webp";
import proj5 from "../assets/project5.webp";
import proj6 from "../assets/project6.webp";
import proj7 from "../assets/project7.webp";
import proj8 from "../assets/project8.webp";

export const ProjectList = [
    {
        name: "Note Taking Application",
        image: proj1,
        link: "https://github.com/SamB032/PyQt5-application",
        description: "Note Taking app built using PyQt5."
    }, 
    {
        name: "A* Path Finding Algorithm",
        image: proj2,
        link: "https://github.com/SamB032/shortest-path-algorithm",
        description: "A* Path Finding Visualiser that lets users setup blocked paths."
    },
    {
        name: "Tetris",
        image: proj3,
        link: "https://github.com/SamB032/pygame-Tetris",
        description: "Tetris game built using pygame."
    },
    {
        name: "Portfolio website",
        image: proj4,
        link: "https://github.com/SamB032/portfolio-website",
        description: "Portfolio Website built using React. A display for my projects and photos."
    }, 
    {
        name: "Connect4 MiniMax Algorithm",
        image: proj5,
        link: "https://github.com/SamB032/connect4",
        description: "React website that allows users to play against a bot using the minimax algorithm." 
    },
    {
        name: "ModelHive",
        image: proj6,
        link: "https://devpost.com/software/modelhive",
        description: "Real-time artifical intelligence insights. Learn how different algorithms work."
    },
    {
        name: "Doomchad theme for Tmux",
        image: proj7,
        link: "https://github.com/SamB032/doomchad-tmux",
        description: "A doomchad theme for tmux from Nvchad neovim."
    },
    {
        name: "Go URL Shortener",
        image: proj8,
        link: "https://github.com/SamB032/Go-URL-Shortener",
        description: "A full scale kubernetes deployment that allows users to access a website and shorten URLs. This uses postgres, Go HTTP standard lib and Traefik."
    }

].sort(() => Math.random() - 0.5);
