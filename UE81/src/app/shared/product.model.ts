export enum tastes {
  WATERMELON = "Wassermelone",
  BLUEBERRY = "Blaubeere",
  CHERRY = "Kirsche",
  GRAPE = "Traube"
}

export class product{
  id: number;
  name: String;
  description: String;
  validFrom: Date;
  validTo: Date;
  pathToImg: String;


  constructor(id: number, name: String, description: String, validFrom: Date, validTo: Date, pathToImg: String) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.validFrom = validFrom;
    this.validTo = validTo;
    this.pathToImg = pathToImg;
  }
}
