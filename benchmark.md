# Benchmarking api.skedify.com

## PHP 5.6.17

| # | Time (s) |
| :-: | :-----: |
| 1 | 3784 ms |
| 2 | 647 ms |
| 3 | 627 ms |
| 4 | 1501 ms |
| 5 | 612 ms |
| 6 | 1114 ms |
| 7 | 512 ms |
| 8 | 506 ms |
| 9 | 1086 ms |
| 10 | 489 ms |
| 11 | 526 ms |
| 12 | 1027 ms |
| 13 | 500 ms |
| 14 | 520 ms |
| 15 | 500 ms |
| 16 | 1079 ms |
| 17 | 497 ms |
| 18 | 492 ms |
| 19 | 1142 ms |
| 20 | 465 ms |
| 21 | 512 ms |
| 22 | 990 ms |
| 23 | 517 ms |
| 24 | 494 ms |
| 25 | 493 ms |
| === | ======= |
| AVG | 820 ms |

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

| # | Time (s) |
| :-: | :-----: |
| 1 | 977 ms |
| 2 | 332 ms |
| 3 | 329 ms |
| 4 | 982 ms |
| 5 | 1955 ms |
| 6 | 890 ms |
| 7 | 373 ms |
| 8 | 385 ms |
| 9 | 531 ms |
| 10 | 918 ms |
| 11 | 334 ms |
| 12 | 329 ms |
| 13 | 334 ms |
| 14 | 845 ms |
| 15 | 329 ms |
| 16 | 447 ms |
| 17 | 387 ms |
| 18 | 900 ms |
| 19 | 330 ms |
| 20 | 347 ms |
| 21 | 339 ms |
| 22 | 3389 ms |
| 23 | 332 ms |
| 24 | 334 ms |
| 25 | 333 ms |
| === | ======= |
| AVG | 670 ms |
