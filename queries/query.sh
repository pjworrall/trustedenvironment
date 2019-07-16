#!/bin/sh

# Author: Paul Worrall

if [ $# -eq 0 ]
  then
    echo "usage: query.sh [queryfile.rq]"
fi

if [ -f $1 ]
  then
    curl -H "Accept: text/csv" --data-urlencode "query@$1"  https://fuseki.interition.info/OIXTrustedEnvironment/query
  else
    echo "$1 does not exit"
fi


