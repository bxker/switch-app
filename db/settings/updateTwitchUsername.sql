UPDATE users
SET twitch_username = $1
WHERE user_id = $2
RETURNING *;