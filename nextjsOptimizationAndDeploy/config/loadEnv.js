require('dotenv').config()

const environment = {
  next_public_space_id: process.env.NEXT_PUBLIC_SPACE_ID,
  next_public_access_token: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
}

module.exports = environment
