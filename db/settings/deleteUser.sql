DELETE FROM streams
WHERE user_id = $1;

DELETE FROM users
WHERE user_id = $1;