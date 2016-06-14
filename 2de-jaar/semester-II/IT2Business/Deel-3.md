## SAP

> **SAP** Systems, Applications, and Products in Data Processing

- Name of the Company
    - SAP AG
    - SAP America
    - SAP UK
- Name of the Software
    - SAP R/2
    - SAP R/3
    - SAP ERP

## Who is SAP?

- SAP AG
    - Founded in Walldorf, Germany in 1972 (1 april)
    - World's Largest Business Software Company
    - World's Third-largest Independent Software Provider
- Company Statistics
    - Over 40.000 employees in more then 50 countries
    - 1500 Business Partners
    - 36.200 Customers in more then 120 countries
    - 12 million users
    - 100.600 installations

## Integrated Business Solution Vendors (IBSV)

- SAP (Systems, Applications, & Products in Data Processing)
    - SAP ERP, All-in-One, Business by Design, Business One
- Oracle Applications
    - Oracle, JD Edwards, PeopleSoft, Siebel, Retek
- Microsoft Business Solutions
    - Dynamics: Great Plains, Navision, Axapta, Soloman
- The Sage Group
    - Sage Software - Accpac ERP, PeachTree
- SSA Global Technologies
    - BAAN

## SAP Architecture

- World-wide usage
- Designed to satisfy the information needs for business sizes (small local to large all international)
    - Multi-lingual
    - Multi-currency
- Designed to satisfy the information needs for all industries

## SAP ERP

- Enables a company to link it's business processes
- Ties together disparate business functions (**integrated business solution**)
- Helps the organization run smoothly
- Real-time environment
- Scalable and flexible

## SAP Architecture

- Client/Server Environment
    - Client: hardware/software environment that can make a request for services for a central repository of resources
    - Server - hardware/software combination that can provide services to a group of clients in a controlled environment
- Three - Tier Structure
    - GUI
        - Graphical User Interface or Web Interface
    - Application Server
        - One or more, help distribute work load
    - Database Server
        - One single data repository

![](https://robinmalfait.com/afbeeldingen/droplr/1fj5U.png)

## SAP Business Suite

![](https://robinmalfait.com/afbeeldingen/droplr/17ikW.png)

(Uitbreidingen die bij SAP ERP komen):

- SAP PLM: Product Lifecycle Management
- SAP SRM: Supplier Relationship Management (Leveranciers)
- SAP CRM: Customer Relationship Management (Klanten & Prospecten opvolgen)
- SAP SCM: Supply Chain Management

| Block | Naam                  | Onderdeel van |
| ----- | --------------------- | ------------- |
| FI    | Financial Accounting  | Financieel    |
| CO    | Controlling           | Financieel    |
| AM    | Asset Management      | Financieel    |
| PS    | Project System        | Financieel    |
| WF    | Workflow              | &nbsp;        |
| IS    | Industry Solutions    | &nbsp;        |
| HR    | Human Resources       | HR            |
| PM    | Plant Maintenance     | Logistiek     |
| QM    | Quality Management    | Logistiek     |
| PP    | Production Planning   | Logistiek     |
| MM    | Material Management   | Logistiek     |
| SD    | Sales & Distribution  | Logistiek     |

## SAP Software Applications

### Solutions

- SAP ERP
- SAP CRM
- SAP PLM
- SAP SCM
- SAP SRM
- SAP Analytics
- SAP Manufacturing
- SAP Service
- SAP Mobile Solutions
- SAP xApps

### Small & Medium Size Solutions

- Business One
- Business by Design
- SAP All-in-One

### Platforms

- Enterprise Services Architecture
- SAP NetWeaver Platform

## SAP ERP Business Modules

Collections of logically related transactions within identifiable business functions

- MM ("buy")
- PP ("Make")
- SD ("Sell")
- FI and CO ("Track")
- HCM

## SAP ERP Core Applications

- Logistics
    - Sales & Distribution
    - Plant Maintenance
    - Materials Management
    - Production Planing
    - Quality Management
- Human Resources
    - Personnel Management
    - Benefits
    - Payroll
- Accounting
    - Financial Accounting
    - Controlling
    - Asset Management
    - Treasury

## SAP Industry Solutions

- Aerospace & Defense
- Automotive
- Banking
- Chemicals
- Higher Education
- ...

## Process Integration

![](https://robinmalfait.com/afbeeldingen/droplr/PWYF.png)
![](https://robinmalfait.com/afbeeldingen/droplr/10BAC.png)

> Rood gekleurde woorden zijn puur boekhoudkundige processen

- Sales order Process: Verkooporderproces het proces om een aankoop te doen van een goed.
- Production process: productieprocess: wanneer het bedrijf zelf goederen/producten maakt.
- Procurement Process: aankoopprocess: wanneer het bedrijf zelf goederen/producten moet aankopen.

## Functionality

- Sales Support
- Sales
- Shipping and Transportation
- Billing
- Credit Management
- Foreign Trade

## organizational Structure

- S&D
- Client (development, testing, production)
- Company Code (Elk bedrijf dat je wilt beheren heeft een eigen legal set of books (eigen boekhouding))
- Sales Area
    - Sales Organization
    - Distribution Channel
    - Division
- Plant
- Shipping Point
- Loading Point
- Internal Sales Structure
- Sales Offices
- Sales Groups
- Salesperson

![](https://robinmalfait.com/afbeeldingen/droplr/2EpG.png)

| Key | Value |
| --- | ----- |
| Client | An independent environment in the system |
| Company Code | Smallest org unit for which you can maintain a legal set of books |
| Plant | Operating area or branch withing a company (Manufacturing facility or distribution facility) |
| Purchasing Organiization | The buying activity for a plant takes places at the purchasing organisation |
| Purcahsing Group | Key that represents the buyer or group of buyers |
| Purchasing Organization | <ul><li>Organization unit responsible for procuring services and materials</li><li>Negotiates conditions of the purchase with the vendors</li></ul> |
| Purchasing Group | <ul><li>Buyer or group of buyers who are responsible for certain purchasing activities</li><li>Channel of communication for vendors</li></ul> |

## SD Master Data

![](https://robinmalfait.com/afbeeldingen/droplr/1j0GN.png)

## Customer Master Data

![](https://robinmalfait.com/afbeeldingen/droplr/180Oz.png)

- Customer Master
    - Contains all of the information necessary for processing orders, deliveries, invoices and customer payment
    - Every customer **MUST** have a master record
- Created by Sales Area
    - Sales Organisation
    - Distribution Channel
    - Division
- The customer master information is divided into 3 areas:
    - General Data
    - Company Code Data
    - Sales Area Data

## Customer Master

![](https://robinmalfait.com/afbeeldingen/droplr/12wao.png)

## Material Master Data

- Contains all the information a company needs to manage about a material
- It is used by most components within the SAP system
    - Sales and Distribution
    - Materials Management
    - Production
    - Plant Maintenance
    - Accounting/Controller
    - Quality Management
- Material master data is stored in functional segments called *Views*

![](https://robinmalfait.com/afbeeldingen/droplr/16F6Y.png)

![](https://robinmalfait.com/afbeeldingen/droplr/18pZe.png)

## Customer Material Information Record

- Data on a material defined for a specific customer is stored in a Customer material Record.
- Info Records contain:
    - Customer-specific material number
    - Customer-specific material description
    - Customer-specific data on deliveries and delivery tolerances
- You can also maintain default text to appear on sales orders for that customer

## Condition Master (Pricing)

- Condition master data includes:
    - Prices
    - Surcharges (Toeslag)
    - Discounts (Korting)
    - Freights (vrachten, vrachtprijs)
    - Taxes (belastingen)
- You can define the condition master to be dependent on various data:
    - Material specific
    - Customer specific
- Conditions can be dependent on any document field

## Output

- Output is information that is sent to the customer using various media, such as:
    - E-mail
    - Mail
    - EDI (Electronic Data Interchange)
    - Fax
    - XMl
- Output examples:
    - Quotation
    - Confirmation
    - Invoice

## Sales Order Process

![](https://robinmalfait.com/afbeeldingen/droplr/18AEN.png)

- Pre-sales: warm maken om te kopen
- Sales Order Entry: bestelling geplaatst
- Check Availability: ATP: Available To Promise (wat heb ik beschikbaar in stock/planning, en wat kan ik beloven)
- Pick Materials: Materialen gaan opzoeken
- Pack materials: inpakken
- Post Goods Issue: boekhoudkundige transactie, je zegt SAP dat die goederen niet meer van jou als bedrijf zijn, maar dat ze buiten zijn gegaan. Uit stock halen. Voor deze stap kan je de goederen nog naar een andere klant sturen. Hier na niet meer want de goederen zijn weg.
- Invoice customer: laten betalen
- Receipt of customer payment: betaald (betalingsbewijs)

## Pre-Sales activities (CRM Light)

Sales Support is a component of SD.

- Creating and tracking customer contacts and communications (sales activity)
    - Phone call records
    - On-site meeting
    - Letters
    - Campaign communication

> Pre-sales documentes need to be managed within the presales activities: inquiries and quotations. These documents help identify possible sales related activity and determine sales prohability.

Goal: Equip the sales technican with all the information necessary to negotiate and complete the potential sale.

- Information needed:
    - Past sales activity
    - Past communication
    - Contact Information
    - General Company Info
    - Credit limits and usage
    - Current backorders

- 360° View of your customer

## Inquiry

> An inquiry is a customer's request to a company for information or quotation in respect to their products or services without obligation to purchase. **Informatieaanvraag (offerteaanvraag?)**

- How much will it cost
- Material/Service availability
- ay contain specific quantities and dates

The inquiry is maintained in the system and a quotation is created to address questions for the potential customer.

## Quotation

> The quotation presents the customer with a legally binding offer to deliver specific products or a selection of a certain amount of products in a specified timeframe at a pre-defined price. **Offerte contractueel verbonden**

## Sales Order

> Een document dat informatie bevat over koper, materialen/services en hoeveelheid, prijs, data, shipping information en billing information.

- Sales order processing can originate from:
    - Customer contacts us fro orders: phone, internet, email
    - Existing Contact
    - Quotations
- Electronic document that is created should contain the following basic information:
    - Customer information
    - Material/Service and quantity
    - Pricing (conditions)
    - Specific delivery dates and quantities
    - Shipping information
    - Billing information

- The sales document is made up of three primary areas:
    - Header
        - Data relevant for the entire sales order: Customer data, total cost of the order
    - Line item
        - Information about the specific product: material and quantity, cost of an individual line
    - Schedule lines
        - Uniquely belongs to a Line Item, contains delivery quantities and dates for partial deliveries

- The sales order contains all of the information needed to process your customers request, the following information is determined for each sales order:
    - Delivering Schedule
    - Shipping point and route determination
    - Availability Check
    - Transfer of requirements to MRP
    - Pricing
    - Credit limit check

## Delivery Scheduling

> Data selecteren/kiezen voor levering. Systeem zal checken of het mogelijk is.

- When an order is created the you must enter a requested delivery date for the order or each line item
- The system will then determine a delivery timeline, this will be used when determining our material availability, or ATP (availability to promise) date.
- The system will determine this date using forward and backward scheduling rules you have defined.

## Shipping & Route Determination

> Tijdens het maken van een sales order, moet er ook beslist worden vanwaar bepaalde goederen gaan geshipped worden. Dit kan ook individueel per line item gebeuren.

## Availability Check

> Bekijkt of de materialen beshcikbaar zijn voor de datum van vertrek. Houdt ook rekening met andere inkomende/uitgaande bestellingen.

## Transport to Planning

> Het order is overgegaan naar material requirements planning as an CIR (Customer Independent Requirement). Dit zal dan het purchase requirement process starten OF een order plaatsen als er te weinig materiaal in voorraad is.

## Pricing

> Het systeem toont prijs informatie voor alle sales documenten. Informatie voor heel document en per individueel line item. Berekend en verwerkt ook de taxes, toevoegingen, kortingen, ...

## Credit Check

> Als er een fout is bij het betalen kan het systeem een error geven. Het informeert de sales afdeling. Kan ook ingesteld worden zodat er orders en leveringen geblokkeerd worden.

## Shipping en Transportation

- Picking (materiaal verzamelen)
- Packign (materiaal inpakken)
- Post Goods Issue (boekhoudkundige transactie, je zegt SAP dat die goederen niet meer van jou als bedrijf zijn, maar dat ze buiten zijn gegaan. Uit stock halen. Voor deze stap kan je de goederen nog naar een andere klant sturen. Hier na niet meer want de goederen zijn weg.)

> Nu is het officieel eigendom van de klant. Material Management (MM) en Finance (FI) is gekoppeld

## Shipping

> Orders kunnen gecombineerd worden. Orders kunnen partieel geleverd worden. Orders kunnen complete geleverd zijn/worden.

## Delivery Creation

> Kijkt of het mogelijk is om te leveren. Bevestigd availability. Bevestigd export/foreign trade requirements. Berekend totale gewicht/volume.

- Genereert packing proposal
- Berekend gewicht en volume
- Controleert de planning
- Overweegt of partial deliveries nodig zijn
- Wijzigt routes indien nodig
- Wijst picking location aan
- ...

## Delivery document

- picking
- packing
- loading
- posting goods issue

> wijzigingen zijn nog mogelijk van de klant zelf.

## Picking

> aantal gebasseerd op delivery note (volledig, partieel). Datum toegevoegd wanneer picking moet gedaan worden. Locatie aangeduid. Warehouse Management (WM)

## Loading en Packing

> welke packaging (dozen, paletten, ...).  alles checken

## Goods issue

> Vanaf nu is de eigendom van het product niet meer het bedrijf maar de klant. Doet het inventory aantal naar benede. Einde van shipping process binnen het verzendende bedrijf.

## Billing

> Billing document is het kopieren van gegevens van de sales order en/of delivery document. Invoice genereren. Udpate customer's credit status.

## Billing Documents

> Nu zit het process bij Financial Accounting

## Billing methods

![](https://robinmalfait.com/afbeeldingen/droplr/6CrM.png)

## Payment

> Het effectief increases van bank account van bedrijf.

## Document Flow

> Status van een order op elk moment van het Order-to-Cash process.
