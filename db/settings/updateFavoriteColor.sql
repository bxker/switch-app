UPDATE users
SET favorite_color = $1
WHERE user_id = $2;