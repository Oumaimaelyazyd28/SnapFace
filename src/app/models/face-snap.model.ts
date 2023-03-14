export class FaceSnap{
    id!: number;
    title!: string;
    description!: string;
    imageUrl!: string;
    createdDate!: Date;
    snaps!: number;
    location?: string;
}































//Vous pouvez utiliser cette methode si vous avez des propriétés qui seront initialisées par 
//les arguments passés au constructor comme dans la partie en commentaire
/*export class FaceSnap{

    constructor(public title: string, 
                public description: string, 
                public imageUrl: string, 
                public createdDate: Date, 
                public snaps: number,
                public location?: string){}
}

export class FaceSnap{
    title: string;
    description: string;
    imageUrl: string;
    createdDate: Date;
    snaps: number;

    constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number){
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdDate = createdDate;
        this.snaps = snaps;

    }
}*/