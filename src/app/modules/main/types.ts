export interface CulturalEvent {
  image: string;
  title: string;
  date: Date;
}

export interface PopularPlace {
  image: string
  title: string
  description?: string
}
export interface Monument {
  address: string
  datacion: string
  datos: string
  description: string
  estilo: string
  geometry: {
    coordinates: number[]
  } 
  horario: string
  id: number
  image: string
  phone: string
  pois: string
  price: string
  title:string
}