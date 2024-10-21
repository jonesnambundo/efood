class Food {
  id: number
  description: string
  image: string
  infos: string[]
  rating: number
  title: string
  link: string
  category?: string // Optional property

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    rating: number,
    title: string,
    link: string,
    category?: string
  ) {
    this.id = id
    this.image = image
    this.description = description
    this.infos = infos
    this.link = link
    this.rating = rating
    this.title = title
    this.category = category
  }
}

export default Food
