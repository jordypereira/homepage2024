import { isFullDatabase, LogLevel } from "@notionhq/client"
import { Client } from "@notionhq/client"
import { z } from "zod"

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG,
}) 

const filmDatabaseId = "2606629c36924cb2bc118f92e0e5bcd7"

const FilmSchema = z.object({
  id: z.string(),
  name: z.string(),
  year: z.number(),
  rating: z.number(),
  tags: z.array(z.string()),
  analysis: z.string(),
})

type Film = z.infer<typeof FilmSchema>

export async function useNotion() {
  const {data: filmsData} = useAsyncData(async () => {
    const data = await notion.databases.query({
      database_id: filmDatabaseId,
      filter: {
        property: "published",
        checkbox: {
          equals: true,
        },
      },
    })

    return data.results
  }, {
    transform: (data): Film[] => {
      return data.map((film) => {
        return {
          id: film.id,
          name: film.properties.Name.title[0].plain_text,
          year: film.properties.year.number,
          rating: film.properties.rating.number,
          tags: film.properties.tags.multi_select.map((tag) => tag.name),
          analysis: film.properties.analysis.rich_text[0].plain_text,
        }
      })
    }
  })

  const films = computed(() => {
    return filmsData.value ? filmsData.value : []
  })

  return {
    films: films,
  }
}
