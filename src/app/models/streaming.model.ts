export class Streaming {
    brani: Brano[];
    artisti: Artista[];
}

export class Artista {
    id: number;
    nome: string;
    brani: number;
}

export class Brano {
    id: number;
    nome: string;
    artista: string;
    durata: string;
}