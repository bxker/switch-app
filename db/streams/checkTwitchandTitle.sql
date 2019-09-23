SELECT s.twitch_username, s.stream_title, u.user_id, u.username
FROM streams s
INNER JOIN users u
ON s.user_id = u.user_id;