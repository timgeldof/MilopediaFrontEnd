import {Exercise} from './exercise.model'
const JsonExercises = [
    {
        name: "Face pull",
        difficulty: 1,
        youtubeURL: "https://www.youtube.com/watch?v=HSoHeSjvIdY",
        description: "Take the rope pulley by both sides and pull with both hands towards your face. Use a 1-1-2 tempo."
    },
    {
        name: "Wrist curl",
        difficulty: 1,
        youtubeURL: "https://www.youtube.com/watch?v=C5rkx_qBLVw",
        description: "Take a weight in both hands. Rest your forearm on your legs, with your palm facing the floor. Move your hands up and down with only your wrist."
    },
    {
        name: "DB tricep extension",
        difficulty: 1,
        youtubeURL: "https://www.youtube.com/watch?v=-Vyt2QdsR7E",
        description: "Take a dumbbell and lift it above your head with one arm. Bend your elbow slowly until the dumbbell reaches your neck."
    }
];
export const EXERCISES : Exercise[] = JsonExercises.map(Exercise.fromJSON);