#!/usr/bin/env bash

domain="univ.edu"

## Find a free port using OOD's built-in find_port
port=$(find_port ${host})

## Example URLs for internal binding and external access
url_int="http://0.0.0.0:${port}"
url_ext="http://${host}.${domain}:${port}"
export url_int
export url_ext

## Update/overwrite the users's galaxy.yml
##  Only the relevant lines included for this example

galaxy_conf=$HOME/opt/galaxy/config/galaxy.yml

cat <<EOF > $galaxy_conf
gravity:
  gunicorn:
    bind: ${url_int##http://}
  celery:
  gx_it_proxy:
  tusd:
galaxy:
  admin_users: ${USER}@${domain}
  single_user: ${USER}@${domain}
EOF
