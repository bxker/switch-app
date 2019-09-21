UPDATE users
SET stream_title = $1
WHERE user_id = $2;