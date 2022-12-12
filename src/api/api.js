import axios from "axios"

export function load(entity) {
  const apiToken = "keyRwzPKxBwoAGIlj"
  return axios.get(
    `https://api.airtable.com/v0/app4oxLvO7wwYKKFc/${entity}?maxRecords=3&view=Grid%20view`,
    {
      headers: { Authorization: "Bearer " + apiToken },
    },
  )
}

export function update() {
  const apiToken = "keyRwzPKxBwoAGIlj"
  return axios.post(
    `https://api.airtable.com/v0/app4oxLvO7wwYKKFc/contacts?maxRecords=3&view=Grid%20view`,
    {
      headers: { Authorization: "Bearer " + apiToken },
    },
  )
}
