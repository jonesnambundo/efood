class Food {
  category: string
  description: string
  image: string
  infos: string[]
  rating: number
  title: string
  link: string
  id: number

  construtor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    rating: number,
    title: string,
    link: string
  ) {
    this.id = id
    this.category = category
    this.image = image
    this.description = description
    this.infos = infos
    this.link = link
    this.rating = rating
    this.title = title
  }
}

export default Food
