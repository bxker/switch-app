UPDATE streams
SET twitch_username = $1
WHERE user_id = $2
RETURNING *;

UPDATE streams
SET twitch_id = $3
WHERE user_id = $2
RETURNING *;