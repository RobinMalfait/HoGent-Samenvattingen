#Samenvatting Netwerken 2 Test
[Terug naar overzicht](./README.md)
##Commandos
###Basis configuratie
| Omschrijving | Commando |
| --- | --- |
|	Set hostname	|	hostname Router	|
|	Set a motd banner	|	banner motd #	|
|	Remove the motd	|	no motd	|
|	Enter basic configuration mode	|	enable	|
|	Enter global configuration mode	|	conf t	|
|	Enter interface configuration mode for SVI	|	interface vlan99	|
|	Configure the management interface IP	|	ip addr 172.17.99.1	|
|	Configure default gateway |	ip default-gateway 172.17.99.1 |
|	Enable the management interface	|	no sh |
|	Return to the priviliged EXEC mode	|	end	|
|	Save the running config to the startup	|	copy running-config startup-config	|
|	Show the current running configuration 	|	show running-config	|
|	Show the basic interface configuration	|	show ip interface brief	|
| 	Configure the interface duplex	|	duplex full	|
|	Configuyre the interface speed 	|	speed 100	|
|	Enable auto-MDIX	|	mdix auto |
| 	Display the MAC address table 	|	show mac-address-table	|

###SSH
| Omschrijving | Commando |
| --- | --- |
|	Set domain name	|	ip domain-name cisco.com	|
|	Generate rsa key	|	crypto key generate rsa	|
|	Set login info	|	username admin password ccna	|
|	Determine the line	|	line vty 0 15	|
|	Set SSH to the line	|	transport input ssh	|
|	Configure the login type	|	login local	|
|	End the configuration	|	end 	|

###Dynamic Port Security
| Omschrijving | Commando |
| --- | --- |
|	Specify the interface to be configured for port security	|	interface f0/18	|
|	Set the interface mode to access	|	switchport mode access	|
|	Enable port security on the interface	|	switchport port-security	|

###Network Time Protocol
| Omschrijving | Commando |
| --- | --- |
|	Enable NTP on client	|	ntp master 1	|
|	Set the ntp master server IP	|	ntp server 10.1.1.1	|
|	Show all of the NTP associations	|	show ntp associations	|

###VLAN
| Omschrijving | Commando |
| --- | --- |
|	Enter global configuration mode	|	conf t	|
|	Create a VLAN on the machine	|	vlan 20	|
|	Set the name	|	name student	|
|	Set an interface to access mode	|	switchport mode access	|
|	Give the interface access to a specific VLAN	|	switchport access vlan 20	|
|	End the configuration	|	end	|
|	Unassign an interface of the VLAN and set it back to native |	no switchport access vlan |
|	Show the VLAN overview	|	show vlan brief	|

###Trunk
| Omschrijving | Commando |
| --- | --- |
|	Enter global configuration mode	|	configure terminal	|
|	Enter interface configuration mode	|	interface f0/1	|
|	Force the link to be a trunk link	|	switchport mode trunk	|
|	Specify a native VLAN for untagged 802.1Q trunks	|	switchport trunk native vlan 99	|
|	Specify the list of VLANs to be allowed on the trunk link	|	switchport trunk allowed vlan 10,20,30,99	|
|	Return to the privileged EXEC mode	|	end	|

###Routing
| Omschrijving | Commando |
| --- | --- |
| Show the current routes | show ip route |
| Set a static route | ip route 'target ip' 'target subnetmask' 'port it goes through' |

`ip route 172.16.0.0 255.248.0.0 s0/0/0`

##VLSM Voorbeeld
###Opgave
Een onderneming wenst een hiërarchische IP adressering te implementeren.   
Gegeven is het aantal hosts per departement (LAN) en enkele seriële verbindingen. Gebruik VLSM om het netwerk efficiënt onder te verdelen in hiërarchische subnetten. Het nulde subnet is hier bruikbaar!  

Starting IP: 172.16.0.0
 
Departement Administratie: 20 hosts  
Departement Directie: 10 hosts  
Departement Personeel: 500 hosts  
2 seriële verbindingen  

###Tabel
| Nr   | Naam Subnet   | Netwerkadres & Subnetmask | CIDR | Adresrange | Broadcast | hosts|
| ------------ | -------  | ------  |------|--------    |-------    |--------- |
| 0 	 | Pers  | 172.16.0.0 & 255.255.254.0  | 32-9=/23 | 172.16.0.1 - 172.16.1.254    | 172.16.1.255    | 510 |
| 1 	 | Adm  | 172.16.2.0 & 255.255.255.224  | 32-5=/27 | 172.16.2.1 - 172.16.2.30    | 172.16.2.31    | 30 |
| 2 	 | Dir  | 172.16.2.32 & 255.255.255.240  | 32-4=/28 | 172.16.2.33 - 172.16.2.46    | 172.16.2.47    | 14 |
| 3 	 | Seri1  | 172.16.2.48 & 255.255.255.252  | 32-2=/30 | 172.16.2.49 - 172.16.2.50    | 172.16.2.51    | 2 |
| 4 	 | Seri2  | 172.16.2.52 & 255.255.255.252  | 32-2=/30 | 172.16.2.53 - 172.16.2.54    | 172.16.2.55   | 2 |

###Werkwijze
####Personeel voorbeeld
1. hosts: Minimaal 500 hosts -> 2^8? = 256 Niet genoeg -> 2^9 = 512 Genoeg! 
MAAR hier 2 van aftrekken voor netwerk en broadcast -> **510**
2. CIDR: 32b – het aantal bits  genomen voor de hosts te bepalen. 
In het geval van personeel is dit 9. ->  **32-9 = 23**
3. Subnetmask: Opsplitsen volgens CIDR -> 23b & 9b -> 11111111.11111111.11111110.00000000 -> 
**255.255.254.0**
4. Netwerkadres: In dit geval gegeven. Maar anders broadcast van vorige subnet + 1     
**172.16.0.0**
5. Range: VAN: Netwerkadres +1 TOT: Aantal hosts - 1 bereikt (Laatste host is voor broadcast)
**172.16.0.1 + (510 - 1 hosts) = 172.16.1.254**
6. Broadcast: Laatste adres van de range + 1 
**172.16.1.254 + 1 = 172.16.1.255**
