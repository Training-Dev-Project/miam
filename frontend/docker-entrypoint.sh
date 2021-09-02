#!/bin/sh
mainFileName=$(ls /usr/share/nginx/html/main*.js)
envsubst '${BACKEND_URL}' < ${mainFileName} > main.tmp
mv main.tmp ${mainFileName}
nginx -g 'daemon off;'
