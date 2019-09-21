INSERT INTO users (first_name, last_name, email, favorite_color, username, hash)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;