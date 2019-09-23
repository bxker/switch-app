INSERT INTO streams
(twitch_username, user_id)
VALUES
($1, $2)
RETURNING *;
