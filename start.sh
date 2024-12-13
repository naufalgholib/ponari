#!/bin/sh

# Jalankan aplikasi Node.js di latar belakang
npm start &

# Jalankan Nginx di foreground
nginx -g "daemon off;"
