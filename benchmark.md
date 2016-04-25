# Benchmarking api.skedify.com

## PHP 5.6.17

```Bash
ab -n 10000 http://api.skedify.com/
This is ApacheBench, Version 2.3 <$Revision: 1663405 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking api.skedify.com (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:        nginx
Server Hostname:        api.skedify.com
Server Port:            80

Document Path:          /
Document Length:        178 bytes

Concurrency Level:      1
Time taken for tests:   26.357 seconds
Complete requests:      10000
Failed requests:        0
Non-2xx responses:      10000
Total transferred:      5230000 bytes
HTML transferred:       1780000 bytes
Requests per second:    379.41 [#/sec] (mean)
Time per request:       2.636 [ms] (mean)
Time per request:       2.636 [ms] (mean, across all concurrent requests)
Transfer rate:          193.78 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0  11.5      0    1002
Processing:     0    2  15.6      0     174
Waiting:        0    2  15.5      0     174
Total:          0    3  19.4      1    1002

Percentage of the requests served within a certain time (ms)
  50%      1
  66%      1
  75%      1
  80%      1
  90%      1
  95%      2
  98%      4
  99%    151
 100%   1002 (longest request)
```

# Benchmarking PHP 7

## Installation Step

```
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update

# RUN THIS COMMAND AT YOUR OWN RISK
sudo apt-get purge php5-fpm
sudo apt-get --purge autoremove

sudo apt-get install php7.0-fpm php7.0-mysql php7.0-curl php7.0-gd php7.0-json php7.0-mcrypt php7.0-opcache php7.0-xml
sudo su
sed -i -e 's/php5-fpm/php\/php7.0-fpm/g' /etc/nginx/sites-enabled/default.conf
sed -i -e 's/php5-fpm/php\/php7.0-fpm/g' /etc/nginx/includes/php_defaults.conf
exit
sudo service php7.0-fpm restart
sudo service nginx restart
```

## Benchmark

```
ab -n 10000 http://api.skedify.com/
This is ApacheBench, Version 2.3 <$Revision: 1663405 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking api.skedify.com (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:        nginx
Server Hostname:        api.skedify.com
Server Port:            80

Document Path:          /
Document Length:        178 bytes

Concurrency Level:      1
Time taken for tests:   25.938 seconds
Complete requests:      10000
Failed requests:        0
Non-2xx responses:      10000
Total transferred:      5230000 bytes
HTML transferred:       1780000 bytes
Requests per second:    385.54 [#/sec] (mean)
Time per request:       2.594 [ms] (mean)
Time per request:       2.594 [ms] (mean, across all concurrent requests)
Transfer rate:          196.91 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   4.1      0     150
Processing:     0    2  15.5      0     190
Waiting:        0    2  15.5      0     190
Total:          0    3  16.1      1     190

Percentage of the requests served within a certain time (ms)
  50%      1
  66%      1
  75%      1
  80%      1
  90%      1
  95%      2
  98%      5
  99%    151
 100%    190 (longest request)
```
