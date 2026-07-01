#  esto es una copia del httpd-vhosts.conf

# Virtual Hosts
#
# Required modules: mod_log_config

# If you want to maintain multiple domains/hostnames on your
# machine you can setup VirtualHost containers for them. Most configurations
# use only name-based virtual hosts so the server doesn't need to worry about
# IP addresses. This is indicated by the asterisks in the directives below.
#
# Please see the documentation at 
# <URL:http://httpd.apache.org/docs/2.4/vhosts/>
# for further details before you try to setup virtual hosts.
#
# You may use the command line option '-S' to verify your virtual host
# configuration.

#
# VirtualHost example:
# Almost any Apache directive may go into a VirtualHost container.
# The first VirtualHost section is used for all requests that do not
# match a ServerName or ServerAlias in any <VirtualHost> block.
#
<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host.example.com
    DocumentRoot "/opt/lampp/docs/dummy-host.example.com"
    ServerName dummy-host.example.com
    ServerAlias www.dummy-host.example.com
    ErrorLog "logs/dummy-host.example.com-error_log"
    CustomLog "logs/dummy-host.example.com-access_log" common
</VirtualHost>

<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host2.example.com
    DocumentRoot "/opt/lampp/docs/dummy-host2.example.com"
    ServerName dummy-host2.example.com
    ErrorLog "logs/dummy-host2.example.com-error_log"
    CustomLog "logs/dummy-host2.example.com-access_log" common
</VirtualHost>


#  ----------------------------------------
#  -----  xampp.udemy.antonydev.tech  -----
#  ---------------------------------------- 

<VirtualHost *:80>
    ServerAdmin webmaster@xampp-udemy.antonydev.tech
    DocumentRoot "/home/antonydev/antonydev-desarrollos/01-udemy-desarrollos/udemy.antonydev.tech"
    ServerName xampp-udemy.antonydev.tech
    ErrorLog "logs/xampp-udemy.antonydev.tech-error_log"
    CustomLog "logs/xampp-udemy.antonydev.tech-access_log" common

    <Directory "/home/antonydev/antonydev-desarrollos/01-udemy-desarrollos/udemy.antonydev.tech">
        Options Indexes FollowSymLinks Includes execCGI
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>



#  ---------------------------------------------
#  -----  xampp.javascript.antonydev.tech  -----
#  --------------------------------------------- 

<VirtualHost *:80>
    
    ServerAdmin webmaster@xampp-udemy.antonydev.tech
    DocumentRoot "/home/antonydev/antonydev-desarrollos/03-javascript-desarrollos/javascript.antonydev.tech"
    ServerName xampp-javascript.antonydev.tech
    
    ErrorLog "logs/xampp-javascript.antonydev.tech-error_log"
    CustomLog "logs/xampp-javascript.antonydev.tech-access_log" common

    <Directory "/home/antonydev/antonydev-desarrollos/03-javascript-desarrollos/javascript.antonydev.tech">
        Options Indexes FollowSymLinks Includes execCGI
        AllowOverride All
        Require all granted
    </Directory>
    
</VirtualHost>


#  ----------------------------------------------  #
#  ----------  xampp.jquery.antonydev.tech  -----  #
#  ----------------------------------------------  #

<VirtualHost *:80>
    
    ServerName xampp-jquery.antonydev.tech
    ServerAlias www.xampp-jquery.antonydev.tech

	#  -------------------------------------
    #  -----  👉 Proyecto principal /  -----
    #  -------------------------------------
    
    DocumentRoot "/home/antonydev/antonydev-desarrollos/04-jquery-desarrollos/jquery.antonydev.tech/jquery-main-project"
    <Directory "/home/antonydev/antonydev-desarrollos/04-jquery-desarrollos/jquery.antonydev.tech/jquery-main-project">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    
    #  ---------------------------------------------
    #  -----  👉 Alias para /mis-plugins-spa/  -----
    #  ---------------------------------------------
    Alias /mis-plugins-spa "/home/antonydev/antonydev-desarrollos/04-jquery-desarrollos/jquery.antonydev.tech/mis-plugins-spa"

    <Directory "/home/antonydev/antonydev-desarrollos/04-jquery-desarrollos/jquery.antonydev.tech/mis-plugins-spa">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>


    #  ---------------------------------------
    #  -----  👉 Alias para /escuelait/  -----
    #  ---------------------------------------
    Alias /escuelait "/home/antonydev/antonydev-desarrollos/04-jquery-desarrollos/jquery.antonydev.tech/escuelait"

    <Directory "/home/antonydev/antonydev-desarrollos/04-jquery-desarrollos/jquery.antonydev.tech/escuelait">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # 👉 Alias para udemy
    Alias /udemy "/home/antonydev/antonydev-desarrollos/04-jquery-desarrollos/jquery.antonydev.tech/udemy"

    <Directory "/home/antonydev/antonydev-desarrollos/04-jquery-desarrollos/jquery.antonydev.tech/udemy">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    # 👉 Alias para jquery-with-typescript
    Alias /jquery-with-typescript "/home/antonydev/antonydev-desarrollos/04-jquery-desarrollos/jquery.antonydev.tech/jquery-with-typescript"

    <Directory "/home/antonydev/antonydev-desarrollos/04-jquery-desarrollos/jquery.antonydev.tech/jquery-with-typescript">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog "logs/xampp-jquery-error.log"
    CustomLog "logs/xampp-jquery-access.log" combined
    
</VirtualHost>


#  -----------------------------  #
#  ----------  localhost/  -----  #
#  -----------------------------  #
<VirtualHost *:80>
    ServerName localhost
    DocumentRoot "/opt/lampp/htdocs"

    <Directory "/opt/lampp/htdocs">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
