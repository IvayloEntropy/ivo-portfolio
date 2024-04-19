import axios from "axios"
import Airtable from "airtable"
var base = new Airtable({ apiKey: "patuD6f740CQdsH8c.9f5726d69111f3b0d8a81d88b832dbd0659d77eb0eabf9555b33fe6b0118798c" }).base(
  "app4oxLvO7wwYKKFc",
)

export function load(entity) {
  const apiToken = "patuD6f740CQdsH8c.9f5726d69111f3b0d8a81d88b832dbd0659d77eb0eabf9555b33fe6b0118798c"
  return axios.get(
    `https://api.airtable.com/v0/app4oxLvO7wwYKKFc/${entity}?maxRecords=50&view=Grid%20view`,
    {
      headers: { Authorization: "Bearer " + apiToken },
    },
  )
}

export function create(entity, form) {
  return base(entity).create(form)
}
