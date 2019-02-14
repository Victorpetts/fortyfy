import { db } from '../config/db';

export const addTour =  (name, players, wincon, totalMatches) => {
    db.ref('/tours').push({
        name: name,
        players: players,
        wincon: wincon,
        totalMatches: totalMatches
    });
}