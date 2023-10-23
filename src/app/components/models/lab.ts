export class Lab {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    floor: number;
  
    constructor(id: number, name: string, description: string, isActive: boolean, floor: number) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.isActive = isActive;
      this.floor = floor;
    }
  }
  