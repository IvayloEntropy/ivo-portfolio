import axios from "axios"
import Airtable from "airtable"
var base = new Airtable({ apiKey: "keyRwzPKxBwoAGIlj" }).base(
  "app4oxLvO7wwYKKFc",
)

export function load(entity) {
  const apiToken = "keyRwzPKxBwoAGIlj"
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
