SELECT s.twitch_username, s.stream_title
FROM streams s
INNER JOIN users u
ON s.user_id = u.user_id
WHERE u.username = $1;