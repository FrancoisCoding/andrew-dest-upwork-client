const destInfo = [
  {
    A: "Afghanistan",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F: "",
    G: "",
  },
  {
    A: "Albania",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F: "",
    G: "",
  },
  {
    A: "Algeria",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "All international flights to Algeria are suspended.[13] Sea travel with Europe has also been suspended.[14]",
    G: "",
  },
  {
    A: "Andorra",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F:
      "Andorra has lifted its travel ban, however travel to Andorra has to be done through Spain or France, which still have restrictions in place.",
    G: "https://tripsguard.com/destination/andorra/",
  },
  {
    A: "Angola",
    B: "Y",
    C: "72",
    D: "7",
    E: "N",
    F:
      "Angola’s borders remain closed. Entry to Angola is prohibited except for Angolan nationals and foreign nationals resident in Angola.",
    G: "https://www.gov.uk/foreign-travel-advice/angola/entry-requirements",
  },
  {
    A: "Antigua and Barbuda",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F:
      ". A negative COVID-19 test is not required in order to enter Antigua and Barbuda, testing will be done upon arrival to all incoming passengers. There is no quarantine required upon arrival.",
    G: "",
  },
  {
    A: "Argentina",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F: "",
    G: "",
  },
  {
    A: "Armenia",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F: "",
    G: "",
  },
  {
    A: "Australia",
    B: "Y",
    C: "N",
    D: "14",
    E: "N",
    F:
      "Australian citizens and permanent residents are not permitted to depart Australia without being granted an exemption from the Australian Border Force. The Australian Government has announced that any person – regardless of citizenship or residency status – travelling to Australia from any international destination will be required to undergo a compulsory 14-day quarantine, beginning from their date of arrival.",
    G: "",
  },
  {
    A: "Austria",
    B: "N",
    C: "96",
    D: "14",
    E: "N",
    F:
      "Travel restrictions between Hungary], Austria, the Czech Republic and Slovakia were lifted for their citizens on 5 June.[165][166] Austria, France, Germany and Switzerland: On 15 June the four neighbouring countries fully reopened borders with one another",
    G: "",
  },
  {
    A: "zerbijan",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "Effective 23 March 2020, passengers are not allowed to enter Azerbaijan except passengers with a work permit and passengers with a special permission issued by the government of Azerbaijan",
    G: "",
  },
  {
    A: "Bahamas",
    B: "N",
    C: "Y",
    D: "14",
    E: "N",
    F:
      "All international commercial flights are banned from entering the Bahamas, effective Wednesday, July 22. The only exemptions are visitors from the United Kingdom, European Union and Canada who have tested negative.[119] On 31 July 2020, the Bahamas lifted its ban on travelers from the United States, and announced that travelers will be required to present a negative COVID-19 test or quarantine for 14 days.",
    G: "",
  },
  {
    A: "Bahrain",
    B: "N",
    C: "Y",
    D: "N",
    E: "N",
    F:
      "Effective from September 4, Bahrain re-opens borders to tourists and non-residents from 182 countries. Passengers must undergo a PCR test at their own expense after landing. Those staying in the country for longer than 10 days must take a follow-up test on the 10th day of their visi",
    G: "",
  },
  {
    A: "Bangladesh",
    B: "partially (see notes)",
    C: "72",
    D: "14",
    E: "N",
    F:
      "Commercial passenger flights from the UK, Malaysia, Turkey, the UAE, Qatar, Sri Lanka, China and the Maldives are now permitted to land in Bangladesh.\nThe temporary suspension of international passenger flights from: Bahrain, Bhutan, Hong Kong, India, Kuwait, Nepal, Oman, Saudi Arabia, Singapore and Thailand remains in force.",
    G: "https://www.gov.uk/foreign-travel-advice/bangladesh/entry-requirements",
  },
  {
    A: "Barbados",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F:
      "On arrival in Barbados, travelers are required to present evidence of a negative result of a PCR COVID-19 test. If an arriving passenger, does not have a negative test within 72 hours, they will need to get a test at the airport, and then quarantine for up to two days at their own expense until test results come in. If a passenger tests positive, will be put into isolation",
    G: "",
  },
  {
    A: "Belarus",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F: "",
    G: "",
  },
  {
    A: "Belgium",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F: "Closed its borders to non-essential travel on 20 March",
    G: "",
  },
  {
    A: "Belize",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "Borders closed to all travellers, including Belizean nationals except for emergency situations",
    G: "",
  },
  {
    A: "Benin",
    B: "Y",
    C: "n/a",
    D: "14",
    E: "n/a",
    F:
      "Benin Republic borders are shut down.[15] A 14-day quarantine is required for all travelers",
    G: "",
  },
  {
    A: "Bhutan",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      " Effective 24 March 2020, all foreigners are not allowed to enter Bhutan on all border checkpoints",
    G: "",
  },
  {
    A: "Bolivia",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "Effective 20 March, Borders closed to foreigners and international flights were cancelled",
    G: "",
  },
  {
    A: "Bosnia and Herzegovina",
    B: "N",
    C: "48",
    D: "N",
    E: "N",
    F:
      "As of 16 July 2020, Bosnia and Herzegovina has reopen borders for citizens of European Union with a negative test for coronavirus not older than 48 hours.[283] As of 12 September 2020, the country has reopen borders for all foreign tourists who have a negative PCR test for coronavirus.[284]",
    G: "",
  },
  {
    A: "Botswana",
    B: "Y",
    C: "n/a",
    D: "14",
    E: "n/a",
    F:
      "Entry to Botswana is open only to Botswana nationals and foreign nationals with valid residency visas.",
    G: "https://www.gov.uk/foreign-travel-advice/botswana/entry-requirements",
  },
  {
    A: "Brazil",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F: "As of 29 July 2020, Brazil is officially open for tourism",
    G: "",
  },
  {
    A: "Brunei",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      " Effective 24 March 2020, all foreigners are not allowed to enter Brunei on all border checkpoints, including those on transit purposes",
    G: "",
  },
  {
    A: "Bulgaria",
    B: "Y",
    C: "Y",
    D: "14",
    E: "N",
    F:
      "For tourism purposes, without a 14-day quarantine, tourists from 46 countries can arrive in Bulgaria.",
    G:
      "https://www.tourism.government.bg/en/kategorii/covid-19/message-ministry-tourism-bulgaria-welcomes-tourists-46-countries-july-16th-2020",
  },
  {
    A: "Burkina Faso",
    B: "N",
    C: "5 days",
    D: "14",
    E: "Y",
    F:
      "Daily controls will be carried out by the Centre of Health Emergency Response Operations (CORUS), including temperature tests. COVID 19 tests will be carried out on the 1st, 8th and 14th day following arrival.",
    G:
      "https://www.gov.uk/foreign-travel-advice/burkina-faso/entry-requirements",
  },
  {
    A: "Burundi",
    B: "Y",
    C: "see notes",
    D: "see notes",
    E: "N",
    F:
      "Commercial flights into and out of Bujumbura International Airport are suspended. There are some emergency flights taking place\nAll travellers to Burundi must have proof of a negative COVID-19 test issued in the last 72 hours. All travellers must then spend 72 hours in quarantine while awaiting the results of a COVID-19 test taken on arrival in Burundi. If any passenger on your flight tests positive, all passengers from that flight will be placed into quarantine for 14 days.",
    G: "https://www.gov.uk/foreign-travel-advice/burundi/entry-requirements",
  },
  {
    A: "Cambodia",
    B: "partially (see notes)",
    C: "N",
    D: "N",
    E: "N",
    F:
      " Visitors from France, Germany, Iran, Italy, Spain or USA are not allowed to enter Cambodia",
    G: "",
  },
  {
    A: "Cameroon",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F:
      " Anyone that has developed symptoms of Coronavirus on their travel or tests positive on arrival at Yaoundé or Douala airport must quarantine at a government-monitored hotel for 14 days. These requirements are regularly evolving.",
    G: "https://www.gov.uk/foreign-travel-advice/cameroon/entry-requirements",
  },
  {
    A: "Canada",
    B: "Y",
    C: "N",
    D: "14",
    E: "N",
    F:
      "Effective midnight 25 March 2020, the Canadian government announced an Emergency Order under the Quarantine Act that requires any person entering Canada by air, sea or land to self-isolate for 14 days whether or not they have symptoms of COVID-19",
    G: "",
  },
  {
    A: "Cape Verde",
    B: "Y",
    C: "N",
    D: "N",
    E: "N",
    F: "",
    G: "",
  },
  {
    A: "Central African Republic",
    B: "N",
    C: "N",
    D: "see notes",
    E: "N",
    F:
      "A mandatory 21 day self-quarantine is in place for any person entering Central African Republic coming from a location with local transmission of coronavirus.",
    G:
      "https://www.gov.uk/foreign-travel-advice/central-african-republic/entry-requirements",
  },
  {
    A: "Chad",
    B: "N",
    C: "7 days",
    D: "7",
    E: "N",
    F:
      "If you enter Chad, you’ll need to surrender your passport, quarantine at home for 7 days and take a COVID-19 test on the 7th day. Passports will be returned upon presentation of the COVID-19 test receipt.",
    G: "https://www.gov.uk/foreign-travel-advice/chad/entry-requirements",
  },
  {
    A: "Chile",
    B: "Y",
    C: "N",
    D: "N",
    E: "N",
    F: "",
    G: "",
  },
  {
    A: "China",
    B: "partially (see notes)",
    C: "72",
    D: "14",
    E: "before boarding flight",
    F:
      "flights between Beijing and Cambodia, Greece, Denmark, Thailand, Pakistan, Australian, Canada and Sweden will resume on Thursday (Sep 3). Residents of those countries, as well as Chinese residents abroad, will be permitted to travel after they submit a negative COVID-19 test and pass a temperature check before boarding a flight to Beijing.Upon arrival in China, Xu said, all passengers will have to take a nucleic acid test before undergoing a mandatory 14-day quarantine at designated locations.",
    G:
      "https://www.usnews.com/news/world-report/articles/2020-09-02/china-to-resume-international-flights-to-and-from-beijing",
  },
  {
    A: "Colombia",
    B: "N",
    C: "96",
    D: "N",
    E: "N",
    F:
      "As of 19 September 2020, Colombia has opened its international airports to regular air traffic. Travelers are required to present a negative PCR test result issued within 96 hours prior to departure",
    G: "",
  },
  {
    A: "Comoros",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F: "",
    G: "https://www.skyscanner.net/travel-restrictions/comoros/29475264",
  },
  {
    A: "Republic of the Congo",
    B: "Y",
    C: "n/a",
    D: "14",
    E: "n/a",
    F:
      "The Republic of Congo has closed all land, air and maritime borders until further notice with the exception of cargo flights and vessels.",
    G: "https://www.gov.uk/foreign-travel-advice/congo/entry-requirements",
  },
  {
    A: "Democratic Republic of the Congo",
    B: "N",
    C: "Y",
    D: "N",
    E: "N",
    F:
      "As of 15 August 2020, The Democratic Republic of the Congo has resumed commercial flights. All travelers need to present a negative COVID-19 tes",
    G: "",
  },
  {
    A: "Costa Rica",
    B: "partially (see notes)",
    C: "72",
    D: "N",
    E: "N",
    F:
      "Citizens and residents of Canada, the EU, Schengen Zone, UK and certain parts of the USA may enter Costa Rica, as long as their flight originates from one of these permitted countries.\n A negative COVID-19 certificate obtained 72 hours prior to departure, purchase of an insurance product with specific cover requirements and online completion of an advance epidemiological information form",
    G: "https://www.gov.uk/foreign-travel-advice/costa-rica",
  },
  {
    A: "Côte d'Ivoire",
    B: "N",
    C: "5 days",
    D: "see notes",
    E: "Y",
    F:
      " If you have a temperature high than 38 degrees and/or an invalid COVID-19 test result on arrival, you’ll be required to take a COVID-19 test at your own expense.\nYou may be advised to self-isolate in your own accommodation for 14 days on arrival in Côte d’Ivoire.",
    G: "",
  },
  {
    A: "Croatia",
    B: "partially (see notes)",
    C: "N",
    D: "N",
    E: "N",
    F:
      "Member States of the European Union or the Member States of the Schengen area... can enter under the same conditions as before the disease COVID-19",
    G:
      "https://www.koronavirus.hr/travelling-find-all-important-information-in-one-place/210",
  },
  {
    A: "Cuba",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "Effective 24 March 2020, borders closed to all non-residents; only Cuban and foreign residents will be allowed to enter the country",
    G: "",
  },
  {
    A: "Cyprus",
    B: "partially (see notes)",
    C: "72",
    D: "N",
    E: "N",
    F:
      "Three categories of countries : category A do not have any restrictons, B (All citizens arriving in Cyprus from any of the Category B countries are required to present a document showing they have resulted negative for the PCR test, no longer than 72 hours before their arrival. Others not allowed e.g U.S. citizen tourists will not be able to travel to the Republic of Cyprus if they have been in the United States, or any other country not classed as a Category A or B country, in the two weeks before travel to Cyprus.  Those U.S. citizens who have been present in a Category A or B country for the entire 14 days prior to travel to Cyprus will face the same requirements as other travelers coming from those countries.",
    G:
      "https://cy.usembassy.gov/covid-19-information/#:~:text=Are%20U.S.%20citizens%20permitted%20to,weeks%20before%20travel%20to%20Cyprus.\nhttps://www.schengenvisainfo.com/news/only-eight-countries-left-in-cyprus-list-of-covid-19-safe-countries/",
  },
  {
    A: "Czech Republic",
    B: "partially (see notes)",
    C: "N",
    D: "N",
    E: "N",
    F:
      "The Czech Government have classified countries as either ‘high’, or ‘low’ risk. There are currently no restrictions in place on entering the Czech Republic if you are travelling from ‘low’ risk countries, which include the UK.",
    G:
      "https://www.gov.uk/foreign-travel-advice/czech-republic/entry-requirements",
  },
  {
    A: "Denmark",
    B: "partially (see notes)",
    C: "N",
    D: "N",
    E: "N",
    F:
      "the rules on entry into Denmark depend on whether you are arriving from an ‘open’ country or a ‘banned’ country",
    G: "https://www.gov.uk/foreign-travel-advice/denmark/entry-requirements",
  },
  {
    A: "Djibouti",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/djibouti/coronavirus",
  },
  {
    A: "Dominica",
    B: "N",
    C: "72",
    D: "5",
    E: "N",
    F: "14 day quarantine if +ve",
    G: "https://www.gov.uk/foreign-travel-advice/dominica/entry-requirements",
  },
  {
    A: "Dominican Republic",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F: "As of 8 July 2020, Dominican Republic is officially open for tourism",
    G: "",
  },
  {
    A: "Ecuador",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F:
      " As of 1 June 2020, Ecuador has opened its international airport to regular air traffic",
    G: "",
  },
  {
    A: "Egypt",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F: "",
    G: "",
  },
  {
    A: "El Salvador",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F:
      " As of 19 September 2020, El Salvador's airports resumed commercial flights. Incoming passengers are required to show a negative PCR coronavirus test no more than three days old",
    G: "",
  },
  {
    A: "Equatorial Guinea",
    B: "Y",
    C: "48",
    D: "N",
    E: "N",
    F:
      "Equatorial Guinea closed its land, sea and air borders in response to coronavirus and has only partly reopened them, to nationals, residents, diplomats and professionals.",
    G:
      "https://www.gov.uk/foreign-travel-advice/equatorial-guinea/entry-requirements",
  },
  {
    A: "Eritrea",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "All borders are officially closed, as is Asmara international airport. There is no indication of when the airport will re-open",
    G: "https://www.gov.uk/foreign-travel-advice/eritrea/entry-requirements",
  },
  {
    A: "Estonia",
    B: "partially (see notes)",
    C: "N",
    D: "possibly (see notes)",
    E: "N",
    F:
      "Travellers without symptoms arriving from an EU Member State or Schengen Convention state or from the UK are allowed to enter the country. On 6 July, entry was also opened to travellers from some non-EU or EEA countries.\nThose arriving from countries where the COVID-19 infection rate is 16 cases or fewer per 100,000 people for the previous 14 days do not need to self-quarantine on entry.",
    G: "",
  },
  {
    A: "Eswatini",
    B: "Y",
    C: "N",
    D: "14",
    E: "N",
    F:
      "Border restrictions continue to be imposed, limiting entry and exit to Eswatini to citizens and residents only.",
    G: "https://www.gov.uk/foreign-travel-advice/eswatini/entry-requirements",
  },
  {
    A: "Ethiopia",
    B: "N",
    C: "120",
    D: "14",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/ethiopia/entry-requirements",
  },
  {
    A: "Fiji",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F: "",
    G: "",
  },
  {
    A: "Finland",
    B: "partially (see notes)",
    C: "N",
    D: "14",
    E: "n/a",
    F:
      "Finnish borders remain closed to non-resident foreign nationals entering the country, with some exemptions.",
    G: "https://www.gov.uk/foreign-travel-advice/finland/entry-requirements",
  },
  {
    A: "France",
    B: "Y",
    C: "possibly (see notes)",
    D: "N",
    E: "N",
    F:
      "Visitors from certain countries will need to have had a covid test within 72hrs.",
    G: "",
  },
  {
    A: "Gabon",
    B: "N",
    C: "14 days",
    D: "15",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/gabon/entry-requirements",
  },
  {
    A: "Gambia",
    B: "Y",
    C: "72",
    D: "N",
    E: "N",
    F:
      "The Gambia’s airspace is closed, except to medical cargo flights and essential supplies.",
    G: "https://www.gov.uk/foreign-travel-advice/the-gambia/entry-requirements",
  },
  {
    A: "Georgia",
    B: "partially (see notes)",
    C: "on arrival",
    D: "8",
    E: "n/a",
    F:
      "Foreign citizens are not currently allowed to enter Georgia, apart from citizens or residents of five EU Member States (France, Germany, Estonia, Latvia and Lithuania) who arrive by direct flight. ",
    G: "https://www.gov.uk/foreign-travel-advice/georgia/entry-requirements",
  },
  {
    A: "Germany",
    B: "N",
    C: "possibly (see notes)",
    D: "possibly (see notes)",
    E: "N",
    F:
      "Travellers entering Germany from a designated risk area must enter quarantine for 14 days and take a COVID-19 test (48hrs).",
    G: "https://www.gov.uk/foreign-travel-advice/germany/entry-requirements",
  },
  {
    A: "Ghana",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F:
      "As of 1 September 2020, Ghana is officially open for tourism, all new arrivals must take a coronavirus test 72 hours prior to arrival",
    G: "",
  },
  {
    A: "Greece",
    B: "N",
    C: "possibly (see notes)",
    D: "N",
    E: "N",
    F:
      "If you are travelling by air from Bulgaria, Malta, Romania or the United Arab Emirates, and, from 17 August, from Albania, Sweden, Czech Republic, Belgium, Spain, the Netherlands or North Macedonia, you may be denied entry to Greece unless you can show a negative coronavirus result from a test conducted no more than 72 hours before your arrival.",
    G: "",
  },
  {
    A: "Grenada",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F:
      "Grenada government announced from 10 July that travellers will be categorised as Low, Medium or High risk depending on their point of embarkation or travel history and must follow the new rules to be allowed entry to Grenada, including testing before departure in some cases.",
    G: "https://www.gov.uk/foreign-travel-advice/grenada/entry-requirements",
  },
  {
    A: "Guatemala",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/guatemala/entry-requirements",
  },
  {
    A: "Guinea",
    B: "Y",
    C: "120",
    D: "N",
    E: "N",
    F:
      " There is currently limited admission to Guinea only for foreign family or professional long stay resident visa holders, spouses of Guinean nationals, foreign residents in Guinea, holders of diplomatic passports or international organisations established in Guinea, technical assistants and humanitarian staff.",
    G: "https://www.gov.uk/foreign-travel-advice/guinea/entry-requirements",
  },
  {
    A: "Guinea-Bissau",
    B: "Y",
    C: "n/a",
    D: "14",
    E: "N",
    F:
      "All land and sea borders are closed and commercial air links suspended.",
    G:
      "https://www.gov.uk/foreign-travel-advice/guinea-bissau/entry-requirements",
  },
  {
    A: "Guyana",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "In response to the coronavirus (COVID-19) pandemic, all scheduled international flights from the Cheddi Jagan International Airport at Timehri and the Eugene Correia Airport at Ogle have been cancelled for the foreseeable future.",
    G: "https://www.gov.uk/foreign-travel-advice/guyana/entry-requirements",
  },
  {
    A: "Haiti",
    B: "N",
    C: "N",
    D: "possibly (see notes)",
    E: "Y",
    F:
      "if you travel to Haiti by air you may have your temperature taken upon arrival. You may be required to complete a health declaration form on the flight, including contact and location information in Haiti, and present it to immigration authorities upon arrival. You may be asked to self isolate for 14 days in your own accommodation.",
    G: "https://www.gov.uk/foreign-travel-advice/haiti/entry-requirements",
  },
  {
    A: "Honduras",
    B: "N",
    C: "72",
    D: "14",
    E: "N",
    F:
      "If you are eligible for entry, you should self-isolate for 14 days after arrival. Local authorities will provide further instructions about the place where you should complete the quarantine.",
    G: "https://www.gov.uk/foreign-travel-advice/honduras/entry-requirements",
  },
  {
    A: "Hungary",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      " Hungary closed its borders again for foreigners from 1 September and only Hungarian citizens and permanent residents from the EEA are allowed to enter. (UK gov: From 1 September, Hungary has closed its border to most foreign nationals due to the coronavirus pandemic. There are some limited circumstances in which foreign nationals, including UK nationals, may be allowed entry.)",
    G: "https://www.gov.uk/foreign-travel-advice/hungary/entry-requirements",
  },
  {
    A: "Iceland",
    B: "N",
    C: "possibly (see notes)",
    D: "possibly (see notes)",
    E: "N",
    F:
      "All passengers arriving in Iceland on or after 19 August 2020 can choose to either self-isolate for 14 days upon arrival or take two COVID-19 tests, one on arrival and another 5-6 days later. ",
    G: "https://www.gov.uk/foreign-travel-advice/iceland/entry-requirements",
  },
  {
    A: "India",
    B: "Y",
    C: "N",
    D: "14",
    E: "n/a",
    F:
      "To curb the spread of COVID-19, scheduled international commercial passenger air services are currently suspended however certain eligible foreign nationals are able to travel to India via Vande Bharat flights or third country flights",
    G: "https://www.gov.uk/foreign-travel-advice/india/entry-requirements",
  },
  {
    A: "Indonesia",
    B: "Y",
    C: "7 days",
    D: "14",
    E: "n/a",
    F:
      "All foreign nationals are barred from entering and transiting through Indonesia.",
    G: "https://www.gov.uk/foreign-travel-advice/indonesia/entry-requirements",
  },
  {
    A: "Iran",
    B: "N",
    C: "96",
    D: "N",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/iran/entry-requirements",
  },
  {
    A: "Iraq",
    B: "N",
    C: "Y",
    D: "possibly (see notes)",
    E: "N",
    F:
      "You may be required to quarantine on arrival. You should follow local authority instructions.",
    G: "https://www.gov.uk/foreign-travel-advice/iraq/entry-requirements",
  },
  {
    A: "Ireland",
    B: "N",
    C: "N",
    D: "possibly (see notes)",
    E: "N",
    F:
      "All arrivals from countries not on the Green List, including Irish residents, are asked to restrict their movement for 14 days on arrival.",
    G: "https://www.gov.uk/foreign-travel-advice/ireland/entry-requirements",
  },
  {
    A: "Israel",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "The Israeli authorities have announced that with effect from 18 March, foreign nationals will not be permitted to enter unless they are citizens or residents of Israel",
    G: "https://www.gov.uk/foreign-travel-advice/israel/entry-requirements",
  },
  {
    A: "Italy",
    B: "partially (see notes)",
    C: "possibly (see notes)",
    D: "possibly (see notes)",
    E: "N",
    F:
      "Different countries have different rules. Some countries need a test (72hrs) and 14 days quarantine , for some there are no restrictions and for others only certain specific (non tourist) incoming visitors are permitted.",
    G:
      "https://www.esteri.it/mae/en/ministero/normativaonline/decreto-iorestoacasa-domande-frequenti/focus-cittadini-italiani-in-rientro-dall-estero-e-cittadini-stranieri-in-italia.html",
  },
  {
    A: "Jamaica",
    B: "N",
    C: "possibly (see notes)",
    D: "possibly (see notes)",
    E: "N",
    F:
      "covid test from high risk countries (7 days), may have to stay in resilient corridor during stay if not staying in corridor then 14 days",
    G: "",
  },
  {
    A: "Japan",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "The outbreak of the coronavirus is having a big impact on tourism in Japan. While restrictions on domestic tourism have been lifted, Japan's borders remain closed to international tourists, and there are no signs that the borders will be opened to considerable numbers of tourists in the near future.",
    G: "https://www.japan-guide.com/news/alerts.html",
  },
  {
    A: "Jordan",
    B: "N",
    C: "120",
    D: "possibly (see notes)",
    E: "N",
    F: "Depending on the country quarantine may be required.",
    G: "https://www.visitjordan.gov.jo/",
  },
  {
    A: "Kazakhstan",
    B: "Y",
    C: "120",
    D: "N",
    E: "n/a",
    F:
      "Most foreign nationals, including those from the UK, are currently prevented from travelling to Kazakhstan",
    G: "https://www.gov.uk/foreign-travel-advice/kazakhstan/entry-requirements",
  },
  {
    A: "Kenya",
    B: "N",
    C: "96",
    D: "possibly (see notes)",
    E: "Y",
    F:
      "On arrival, travellers from certain countries must spend 14 days in quarantine. Travellers from countries of which the Kenyan government believes that the risk of spreading of the coronavirus is low to average do not need to go into quarantine. This includes, among other countries, the United Kingdom, Germany, France, Belgium and The Netherlands.",
    G: "https://e-visa.co.uk/kenya/corona",
  },
  {
    A: "Kiribati",
    B: "partially (see notes)",
    C: "N",
    D: "N",
    E: "n/a",
    F:
      "Kiribati will now deny entry to any travellers who have been in or transited countries with confirmed local transmission within 14 days immediately prior to entering Kiribati. A list of countries covered by these restrictions is available from the Kiribati Ministry of Health and Medical Services.\nNo quarantine on arrival info found",
    G:
      "https://www.skyscanner.com.au/travel-restrictions/kiribati/29475433\nhttps://www.gov.uk/foreign-travel-advice/kiribati/entry-requirements",
  },
  {
    A: "North Korea",
    B: "Y",
    C: "n/a",
    D: "30",
    E: "n/a",
    F: "",
    G:
      "https://www.gov.uk/foreign-travel-advice/north-korea/entry-requirements",
  },
  {
    A: "South Korea",
    B: "N",
    C: "on arrival",
    D: "14",
    E: "Y",
    F:
      "All arrivals – regardless of nationality and length of stay – are required to be tested for coronavirus (COVID-19) and to undergo quarantine for 14 days",
    G:
      "https://www.gov.uk/foreign-travel-advice/south-korea/entry-requirements",
  },
  {
    A: "Kuwait",
    B: "N",
    C: "96",
    D: "14",
    E: "N",
    F:
      "The Kuwait Government has announced the partial reopening of the International Airport from 1 August. British citizens are allowed to enter Kuwait if they hold valid Kuwait residency visas and a negative PCR test, conducted no more than 96 hours before acceptance on the flight to Kuwait. The test result should be in English. For further information please refer to the guidance on getting a COVID-19 test or an accredited private facility. On entry to Kuwait you will need to self-isolate for 14 days in your home.",
    G: "https://www.gov.uk/foreign-travel-advice/kuwait/entry-requirements",
  },
  {
    A: "Kyrgyzstan",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/kyrgyzstan/entry-requirements",
  },
  {
    A: "Laos",
    B: "Y",
    C: "on arrival",
    D: "14",
    E: "n/a",
    F:
      "The Government of the Lao PDR has suspended the visa on arrival service at all international entry points. No visas are being issued to people travelling from a country with cases of COVID-19, including the UK. However, the Lao authorities may consider granting special entry permission for foreigners (experts, technicians and foreign nationals that are required for essential projects) who wish to come to Laos.",
    G: "https://www.gov.uk/foreign-travel-advice/laos/entry-requirements",
  },
  {
    A: "Latvia",
    B: "N",
    C: "N",
    D: "possibly (see notes)",
    E: "N",
    F:
      "asymptomatic travellers arriving in Latvia from a country (or who have been in a country in the previous 14 days) where the cumulative incidence of COVID-19 cases in 100,000 of population over the previous 14 days is 16 or above are required to self-isolate for 10 days after leaving that country. ",
    G: "https://www.gov.uk/foreign-travel-advice/latvia/entry-requirements",
  },
  {
    A: "Lebanon",
    B: "N",
    C: "72",
    D: "possibly (see notes)",
    E: "N",
    F:
      "From 23 September, if you have travelled from a country where the Government of Lebanon considers PCR tests to be accurate (which includes the UK), you must take an additional PCR test within 72 hours of your arrival. You must also self-quarantine before the test and whilst waiting for your results. If your second test result comes back negative, you are able to end your quarantine. If your test is positive, follow Lebanese government advice. If you do not wish to take a second PCR test, you can instead choose to quarantine at your accommodation for 10 days, from the date of your arrival.\nIf you have travelled from Syria, Turkey and all African countries, you must proceed to your accommodation and quarantine for 48 hours, until you receive the results of a PCR test conducted at the airport.\n",
    G: "https://www.gov.uk/foreign-travel-advice/laos/entry-requirements",
  },
  {
    A: "Lesotho",
    B: "Y",
    C: "n/a",
    D: "14",
    E: "n/a",
    F: "Lesotho’s borders are closed except for all but essential trade.",
    G: "https://www.gov.uk/foreign-travel-advice/lesotho/entry-requirements",
  },
  {
    A: "Liberia",
    B: "N",
    C: "72",
    D: "N",
    E: "Y",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/liberia/entry-requirements",
  },
  {
    A: "Libya",
    B: "N",
    C: "",
    D: "",
    E: "",
    F: "Difficult to get info. 3 flights per day from Istanbul",
    G:
      "https://reliefweb.int/sites/reliefweb.int/files/resources/DTM%20Libya%20Mobility%20Restrictions%20Dashboard_7.pdf",
  },
  {
    A: "Liechtenstein",
    B: "N",
    C: "N",
    D: "possibly (see notes)",
    E: "N",
    F: "see Switzerland (same rules apply)",
    G:
      "https://www.gov.uk/foreign-travel-advice/liechtenstein/entry-requirements",
  },
  {
    A: "Lithuania",
    B: "N",
    C: "possibly (see notes)",
    D: "possibly (see notes)",
    E: "N",
    F:
      "On arrival in Lithuania from a country where the incidence of COVID-19 has exceeded 25 cases per 100,000 of population in the last 14 days you must self-isolate for 14 days and present proof of a negative COVID-19 test carried out up to 72 hours before your arrival in Lithuania",
    G: "https://www.gov.uk/foreign-travel-advice/lithuania/entry-requirements",
  },
  {
    A: "Luxembourg",
    B: "N",
    C: "possibly (see notes)",
    D: "N",
    E: "N",
    F:
      "“Effective August 12, 2020, individuals seeking to enter Luxembourg by air, whose travel does not originate from an EU member country or one of the countries exempted by the European Union (Australia, Canada, China (subject to reciprocity at European Union level), Georgia, Japan, New Zealand, Rwanda, Korea from the South, Thailand, Tunisia and Uruguay), must provide proof of a negative COVID-19 test at the time of boarding,” a notice sent to the embassies reads.\nIt also notes that the COVID-19 test must have been administered less than 48 hours before the flight was taken.",
    G:
      "https://www.schengenvisainfo.com/news/covid-19-test-results-required-for-entering-luxembourg-from-a-non-eu-country-by-air/#:~:text=Those%20entering%20Luxembourg%20by%20air,48%20hours%20before%20the%20flight.",
  },
  {
    A: "Madagascar",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "There are currently no commercial transport options available between the UK and Madagascar. All international flights to Madagascar are currently suspended. Tourist flights to/from the island of Nosy Be are expected to restart from 1 October, but onward travel to the mainland of Madagascar will not be permitted.",
    G: "https://www.gov.uk/foreign-travel-advice/madagascar/coronavirus",
  },
  {
    A: "Malawi",
    B: "N",
    C: "10 days",
    D: "14",
    E: "N",
    F:
      "On 1 September Malawi re-opened it’s airspace to a limited number of weekly commercial flights.",
    G: "https://www.gov.uk/foreign-travel-advice/malawi/entry-requirements",
  },
  {
    A: "Malaysia",
    B: "Y",
    C: "on arrival",
    D: "14",
    E: "n/a",
    F:
      ": All citizens are prohibited from leaving the country while foreigners are prohibited from entering the country effective 18 March 2020",
    G: "",
  },
  {
    A: "Maldives",
    B: "N",
    C: "72",
    D: "14",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/maldives/entry-requirements",
  },
  {
    A: "Mali",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/mali/entry-requirements",
  },
  {
    A: "Malta",
    B: "N",
    C: "possibly (see notes)",
    D: "N",
    E: "N",
    F:
      "3 lists of countries. Green - no test. Amber - test before and random swab tests. Red - no entry unless have been 14 days prior in a safe corridor country. ",
    G:
      "https://www.gov.uk/foreign-travel-advice/malta/entry-requirements\nhttps://www.visitmalta.com/en/covid-19",
  },
  {
    A: "Marshall Islands",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "Marshall Islands authorities have introduced a number of precautionary measures, including a total suspension of international travellers coming into RMI. Domestic air travel between Majuro and Kwajalein on international airlines is also no longer permitted.",
    G:
      "https://www.gov.uk/foreign-travel-advice/marshall-islands/entry-requirements",
  },
  {
    A: "Mauritania",
    B: "N",
    C: "72",
    D: "n/a",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/mauritania/entry-requirements",
  },
  {
    A: "Mauritius",
    B: "Y",
    C: "n/a",
    D: "14",
    E: "n/a",
    F:
      "The Mauritian border is closed. Commercial flights into Mauritius are not currently available.",
    G: "https://www.gov.uk/foreign-travel-advice/mauritius/entry-requirements",
  },
  {
    A: "Mexico",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F: "Mexico does not have any entry restrictions",
    G: "",
  },
  {
    A: "Micronesia",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "Federated States of Micronesia has declared a “state of public health emergency”. No passengers are allowed to disembark any air or sea vessel originating outside of Federated States of Micronesia, with the exception of individuals granted an exception from the National Government or those working on commercial sea vessels abiding precautionary measures and protocols.",
    G: "https://www.gov.uk/foreign-travel-advice/micronesia/entry-requirements",
  },
  {
    A: "Moldova",
    B: "partially (see notes)",
    C: "N",
    D: "N",
    E: "n/a",
    F:
      "Moldova has opened its borders to foreigners from countries with less than 50 cases of coronavirus infection per 100,000 people. The ruling takes effect on Monday, 31 August. ",
    G: "https://travelbans.org/europe/moldova/",
  },
  {
    A: "Monaco",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F:
      "required to provide their contact details and relevant travel information and then either i) supply evidence of a negative Polymerase Chain Reaction (PCR) test carried out in their country of origin 72 hours before their arrival in the Principality, or ii) agree to undergo a PCR test in Monaco and self-isolate until the result is available. More information is available on the Government of Monaco website.",
    G: "https://www.gov.uk/foreign-travel-advice/monaco/entry-requirements",
  },
  {
    A: "Mongolia",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "All international flights and rail are suspended until at least 31 October.",
    G: "https://www.gov.uk/foreign-travel-advice/mongolia/entry-requirements",
  },
  {
    A: "Montenegro",
    B: "partially (see notes)",
    C: "possibly (see notes)",
    D: "N",
    E: "N",
    F:
      "Green and Yellow lists of countries determine if allowed and with or without a test",
    G: "https://www.gov.uk/foreign-travel-advice/montenegro/entry-requirements",
  },
  {
    A: "Morocco",
    B: "N",
    C: "48",
    D: "N",
    E: "N",
    F:
      "Foreign nationals who are not subject to visa formalities in order to enter Morocco, and who have a confirmed hotel reservation in Morocco, will also be permitted entry.",
    G: "https://www.gov.uk/foreign-travel-advice/morocco/entry-requirements",
  },
  {
    A: "Mozambique",
    B: "Y",
    C: "72",
    D: "10",
    E: "N",
    F:
      "Entry to Mozambique is prohibited except for Mozambican nationals and foreign nationals with a valid residency visa for Mozambique.",
    G: "https://www.gov.uk/foreign-travel-advice/mozambique/entry-requirements",
  },
  {
    A: "Myanmar",
    B: "Y",
    C: "Y",
    D: "28",
    E: "N",
    F:
      "The Government of Myanmar has suspended all international commercial passenger flights from any of its airports until 31 October. It will then review the situation.",
    G: "https://www.gov.uk/foreign-travel-advice/myanmar/entry-requirements",
  },
  {
    A: "Namibia",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/namibia/entry-requirements",
  },
  {
    A: "Nauru",
    B: "Y",
    C: "n/a",
    D: "14",
    E: "n/a",
    F:
      "The only scheduled flight to Nauru is now a fortnightly service, on alternate Fridays, Brisbane-Nauru-BrisbaneNauru authorities are requesting all persons to consider whether travel to Nauru is necessary and all persons are asked to cancel or postpone any non-essential travel to Nauru.\nPassengers who have transited through, or have been in mainland China, Hong Kong, Macao, Iran, Italy, Korea, Europe, USA or Asia (except Taiwan) in the past 21 days, will not be allowed to enter Nauru.",
    G: "https://www.gov.uk/foreign-travel-advice/nauru/entry-requirements",
  },
  {
    A: "  Nepal",
    B: "Y",
    C: "72",
    D: "N",
    E: "n/a",
    F:
      "The Government of Nepal’s suspension of international commercial flights was lifted on 1 September, though at present, only Nepalis, international passengers from certain employment categories, and their dependants will be admitted",
    G: "https://www.gov.uk/foreign-travel-advice/nepal/entry-requirements",
  },
  {
    A: "Netherlands",
    B: "partially (see notes)",
    C: "N",
    D: "possibly (see notes)",
    E: "n/a",
    F:
      "Different countries have different rules. Some countries have quarantine requirements , some no requirements and some other countries only open for specific reasons (elite athlete or death of family member)",
    G:
      "https://www.government.nl/topics/coronavirus-covid-19/tackling-new-coronavirus-in-the-netherlands/travel-and-holidays/visiting-the-netherlands",
  },
  {
    A: "New Zealand",
    B: "Y",
    C: "N",
    D: "14",
    E: "n/a",
    F: "The New Zealand border is currently closed to almost all arrivals.",
    G:
      "https://www.gov.uk/foreign-travel-advice/new-zealand/entry-requirements",
  },
  {
    A: "Nicaragua",
    B: "N",
    C: "Y",
    D: "N",
    E: "N",
    F: "Nicaragua has not implemented any entry restrictions",
    G: "",
  },
  {
    A: "Niger",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F:
      "Entry to Niger is only permitted for Nigerien nationals, persons with valid residency and foreign nationals with valid visas.",
    G: "https://www.gov.uk/foreign-travel-advice/niger/entry-requirements",
  },
  {
    A: "Nigeria",
    B: "N",
    C: "120",
    D: "7",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/nigeria/entry-requirements",
  },
  {
    A: "North Macedonia",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F:
      "1. Nationals of Bosnia and Herzegovina, Kosovo (Rep.), Montenegro and Serbia must have a medical certificate with a negative Coronavirus (COVID-19) PCR test result issued at most 72 hours before arrival.",
    G:
      "https://www.skyscanner.com.sg/travel-restrictions/north-macedonia/29475256",
  },
  {
    A: "Norway",
    B: "N",
    C: "N",
    D: "possibly (see notes)",
    E: "N",
    F: "Different countries and areas have different quarantine rules.",
    G:
      "https://www.fhi.no/en/op/novel-coronavirus-facts-advice/facts-and-general-advice/travel-advice-COVID19/",
  },
  {
    A: "Oman",
    B: "N",
    C: "on arrival",
    D: "Y",
    E: "Y",
    F:
      "On arrival in Oman you will have your temperature checked. If you show symptoms of coronavirus you may be sent to a testing centre and/or a quarantine facility.\nFrom 1 October 2020, all arrivals (over the age of 15) will be required to have a PCR (nasal swab) at Muscat International Airport.\nThe results of the PCR test undertaken at the airport will be sent to your registered phone/Tarassud+ application (usually within 24 hours). You should self-isolate until you receive the result.\n\nIf your PCR test result was negative, and you are staying in Oman for less than 7 days, you can end your self-isolation.\n\nRegardless of the PCR test result, if you are staying in Oman for more than 7 days, you must continue to self-isolate for 14 days.",
    G: "https://www.gov.uk/foreign-travel-advice/oman/entry-requirements",
  },
  {
    A: "Pakistan",
    B: "N",
    C: "N",
    D: "14",
    E: "Y",
    F:
      "You will also be subject to thermal screening for high temperatures. If you do not have any COVID-19 symptoms you will be allowed to proceed through the airport and will be given instructions to self-isolate at your residence for 14 days.",
    G: "https://www.gov.uk/foreign-travel-advice/pakistan/entry-requirements",
  },
  {
    A: "Palau",
    B: "N",
    C: "on arrival",
    D: "14",
    E: "N",
    F:
      "A 14 day compulsory quarantine is currently in place for any international arrivals into Palau. During this time, you will be required to undertake two separate PCR swab tests. If your tests return a negative result then at the end of the 14 days quarantine you can transfer to your residence to complete a further 7 days of self isolation, followed by a further PCR swab test.",
    G: "https://www.gov.uk/foreign-travel-advice/palau/entry-requirements",
  },
  {
    A: "Panama",
    B: "Y",
    C: "96",
    D: "14",
    E: "N",
    F:
      "Entry for tourism is barred until at least 21 September 2020. Domestic flights are also suspended. Some special flights are currently operating,",
    G: "https://www.gov.uk/foreign-travel-advice/panama/entry-requirements",
  },
  {
    A: "Papua New Guinea",
    B: "Y",
    C: "7 days",
    D: "14",
    E: "N",
    F:
      "Nobody may enter Papua New Guinea unless they have a written exemption from the Controller and evidence of a negative RT-PCR test result for COVID-19 taken within a 7 day period prior to arrival.\nFlying to or from Port Moresby is restricted only to those with a valid reason to do so. ",
    G:
      "https://www.gov.uk/foreign-travel-advice/papua-new-guinea/entry-requirements",
  },
  {
    A: "Paraguay",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "Borders will remain closed for non-resident foreigners until further notice. Those granted entry to Paraguay must comply with the self-isolation requirement for 14 days.\nAll passenger flights have been suspended until further notice.",
    G: "https://www.gov.uk/foreign-travel-advice/paraguay/entry-requirements",
  },
  {
    A: "Peru",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F: "All borders are closed indefinitely",
    G: "https://www.gov.uk/foreign-travel-advice/peru/entry-requirements",
  },
  {
    A: "Philippines",
    B: "Y",
    C: "on arrival",
    D: "14",
    E: "N",
    F: "Very limited entry for foreign nationals (no tourists)",
    G: "",
  },
  {
    A: "Poland",
    B: "partially (see notes)",
    C: "N",
    D: "possibly (see notes)",
    E: "N",
    F:
      "There is a flight ban from 29 countries (including USA) . Non EU entrants need to quarantine for 10 days.",
    G: "https://www.gov.pl/web/koronawirus/aktualne-zasady-i-ograniczenia",
  },
  {
    A: "Portugal",
    B: "partially (see notes)",
    C: "possibly (see notes)",
    D: "N",
    E: "Y",
    F:
      "Direct air travel to Portugal is permitted for any purpose from the UK, the European Area, Australia, Canada, China, Georgia, Japan, Morocco, New Zealand, Rwanda, South Korea, Thailand, Tunisia and Uruguay.\nTravel to, and transit through Portugal is permitted from countries other than those specified above for essential purposes only, such as to enable you to reunite with your family, or for professional, educational, health or humanitarian reasons.\nIf you are travelling to Portugal from any country other than those specified above, you will need to show proof of a negative COVID-19 test (72 hrs) to airline staff prior to boarding,",
    G: "https://www.gov.uk/foreign-travel-advice/portugal/entry-requirements",
  },
  {
    A: "Qatar",
    B: "N",
    C: "possibly (see notes)",
    D: "7",
    E: "N",
    F:
      "Low risk countries visitors have a test at the airport, other visitors need a test beforehand (48 hrs).\nQuarantine is required for 7 days. For low risk countries a further test is required.",
    G:
      "https://www.gco.gov.qa/en/2020/07/21/government-communications-office-statement-on-qatars-travel-policy-during-the-gradual-lifting-of-covid-19-restrictions/",
  },
  {
    A: "Romania",
    B: "N",
    C: "N",
    D: "possibly (see notes)",
    E: "N",
    F:
      "On 7 July 2020, the Romanian Government issued an updated list of countries for which Covid-19 travel restrictions have been lifted. Travelers from these countries, including the UK, are no longer required to comply with quarantine and isolation rules for 14 days",
    G: "https://www.gov.uk/foreign-travel-advice/romania/entry-requirements",
  },
  {
    A: "Russia",
    B: "N",
    C: "72",
    D: "N",
    E: "Y",
    F:
      "Passengers arriving for permanent work purposes including Highly Qualified Specialist (HQS) visa holders also have to self-isolate for 14 days on arrival in Russia. All other arrivals are not required to self-isolate if arriving on a regularly scheduled flight, provided they can show a negative test certificate.",
    G: "https://www.gov.uk/foreign-travel-advice/russia/entry-requirements",
  },
  {
    A: "Rwanda",
    B: "N",
    C: "see notes",
    D: "24hrs (until test results)",
    E: "N",
    F:
      "After providing proof of a negative COVID-19 PCR test (120 hrs), all arriving passengers must then enter quarantine at a designated hotel for 24 hours whilst awaiting the results of a second COVID-19 test, taken on arrival",
    G: "https://www.gov.uk/foreign-travel-advice/rwanda/entry-requirements",
  },
  {
    A: "Saint Kitts and Nevis",
    B: "Y",
    C: "n/a",
    D: "14",
    E: "N",
    F:
      "Currently the borders of St Kitts and Nevis are closed to all arriving passengers except nationals or residents of St Kitts and Nevis.",
    G:
      "https://www.gov.uk/foreign-travel-advice/st-kitts-and-nevis/entry-requirements",
  },
  {
    A: "Saint Lucia",
    B: "N",
    C: "7 days",
    D: "N",
    E: "Y",
    F:
      "All international visitors must stay at a COVID-certified property for the duration of their stay.",
    G: "https://www.gov.uk/foreign-travel-advice/st-lucia/entry-requirements",
  },
  {
    A: "Saint Vincent and the Grenadines",
    B: "N",
    C: "possibly (see notes)",
    D: "possibly (see notes)",
    E: "N",
    F:
      "Different restrictions for High Risk, Medium Risk and Low Risk countries.  High : 5 day min quarantine and test before (5 days) and on arrival. Further 9 to 16 days monitoring . Low risk : not test/quarantine.",
    G:
      "http://health.gov.vc/health/images/PDF/stories/SVG_Health_Services_Subcommittee_Protocol_for_Travelers_to_SVG_-__17_9_2020.pdf",
  },
  {
    A: "Samoa",
    B: "Y",
    C: "72",
    D: "14",
    E: "N",
    F:
      "Only permanent residents and essential workers are permitted to enter Samoa at this time.",
    G: "https://www.gov.uk/foreign-travel-advice/samoa/entry-requirements",
  },
  {
    A: "San Marino",
    B: "N",
    C: "N",
    D: "N",
    E: "N",
    F:
      "There are no longer any Covid-19 related restrictions on entry into San Marino, although all visitors must comply with social distancing and sanitisation regulations.",
    G: "https://www.gov.uk/foreign-travel-advice/san-marino/coronavirus",
  },
  {
    A: "São Tomé and Príncipe",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F:
      "All air passengers arriving in São Tomé and Principe are required to have proof of a negative COVID-19 PCR test taken in the 72 hours prior to their arrival.",
    G:
      "https://www.gov.uk/foreign-travel-advice/sao-tome-and-principe/entry-requirements",
  },
  {
    A: "Saudi Arabia",
    B: "partially (see notes)",
    C: "48",
    D: "48hrs (until test results)",
    E: "Y",
    F:
      "From 15 September 2020, certain categories of expatriates holding valid visas (exit/entry, business, residence/Iqama and visit) are allowed to enter and exit the Kingdom of Saudi Arabia.\nTravel suspended (except guests with official government invitations) to and from India, Brazil and Argentina, including any person who has been in these countries in the last (14) days prior to their arrival to the Kingdom.\nAll guests will undergo 2-days self-quarantine at home after arriving to the kingdom, then take PCR test by the end of period. If PCR test not conducted, self-quarantine at home continues for 7 days.",
    G:
      "https://www.gov.uk/foreign-travel-advice/saudi-arabia/entry-requirements\nhttps://www.saudia.com/before-flying/travel-information/travel-requirements-by-international-stations",
  },
  {
    A: "Senegal",
    B: "partially (see notes)",
    C: "7 days",
    D: "N",
    E: "N",
    F:
      "The government of Senegal has said airlines are not allowed to carry foreign nationals from countries who have put in place travel restrictions for Senegal unless they are ordinarily resident in Senegal, diplomats, military, health professionals and other specific professional categories",
    G: "https://www.gov.uk/foreign-travel-advice/senegal/entry-requirements",
  },
  {
    A: "Serbia",
    B: "N",
    C: "possibly (see notes)",
    D: "N",
    E: "N",
    F:
      "Serbia's borders are open.Croatia, Bulgaria, Romania and Northern Macedonia travellers, however, are required to provide a PCR test (48 hrs)",
    G:
      "https://www.euronews.com/2020/07/22/which-european-countries-have-opened-their-borders-ahead-of-the-summer-holiday-season",
  },
  {
    A: "Seychelles",
    B: "partially (see notes)",
    C: "48",
    D: "5 days",
    E: "N",
    F:
      "Visitors may only be permitted to enter Seychelles from countries deemed to be a low or medium COVID-19 risk.\nUpon arriving in Seychelles, visitors must stay in a designated hotel/establishment and may not leave the premises for 5 days.\nAnother COVID-19 test will be performed on the fifth day of your stay. Following a negative test result, visitors will be free to travel within Seychelles.",
    G: "https://www.gov.uk/foreign-travel-advice/seychelles/entry-requirements",
  },
  {
    A: "Sierra Leone",
    B: "N",
    C: "see notes",
    D: "N",
    E: "Y",
    F:
      "all passengers are required to have both a COVID-19 PCR and RDT test on arrival (in addition to the negative test result (72 hrs)required to get authorisation to travel to Sierra Leone).",
    G:
      "https://www.facebook.com/mic.gov.sl/photos/pcb.668344287086920/668344170420265\n https://www.gov.uk/foreign-travel-advice/sierra-leone/entry-requirements",
  },
  {
    A: "Singapore",
    B: "Y",
    C: "n/a",
    D: "14",
    E: "N",
    F:
      "Short term visitors from anywhere in the world are not able to enter Singapore.",
    G: "https://www.gov.uk/foreign-travel-advice/singapore/entry-requirements",
  },
  {
    A: "Slovakia",
    B: "N",
    C: "72",
    D: "possibly (see notes)",
    E: "N",
    F:
      " All persons who enter the territory of the Slovak Republic from 1 October 2020, 7.00 a.m., and who during the previous 14 days, visited only EU member states must provide a 72 hrs test or isolate until they have one or 10 days (whichever is the shorter). All persons who enter the territory of the Slovak Republic from 1 October 2020, 7.00 a.m., and who during the previous 14 days, visited a country which is not a member state of the European Union, are ordered a home isolation until they receive the negative RT-PCR test for COVID-19.",
    G: "https://www.mzv.sk/web/en/covid-19",
  },
  {
    A: "Slovenia",
    B: "N",
    C: "possibly (see notes)",
    D: "possibly (see notes)",
    E: "N",
    F:
      "If you are arriving into Slovenia from a country on the Green List, you do not have to enter into quarantine.\nIf you are arriving into Slovenia from a country on the Amber List, you may have to quarantine for 10 days depending on your circumstances .\nIf you arriving into Slovenia from a country on the Red List, you will have to quarantine for 10 days unless you meet one of the specific exemptions that are listed by the Slovenian Government.\nCovid test may be required (48hrs) - complex criteria.\n",
    G: "https://www.gov.uk/foreign-travel-advice/slovenia/entry-requirements",
  },
  {
    A: "Solomon Islands",
    B: "N",
    C: "see notes",
    D: "at least 14 days",
    E: "N",
    F:
      "Covid test required after 14 days quarantine for low risk countries. High risk countries need multiple tests before arriving.",
    G:
      "https://www.gov.uk/foreign-travel-advice/solomon-islands/entry-requirements",
  },
  {
    A: "Somalia",
    B: "N",
    C: "96",
    D: "N",
    E: "N",
    F:
      "A negative COVID-19 negative test, taken no more than 96 hours before travel, is required for entry into Somalia.",
    G: "https://www.gov.uk/foreign-travel-advice/somalia/entry-requirements",
  },
  {
    A: "South Africa",
    B: "Y",
    C: "n/a",
    D: "Y",
    E: "n/a",
    F:
      "Lockdown restrictions restrict entry into South Africa, except for South African nationals and foreign nationals with valid residence permits.\nSouth African airspace is closed to commercial airlines as part of efforts to contain the spread of COVID-19.",
    G:
      "https://www.gov.uk/foreign-travel-advice/south-africa/entry-requirements",
  },
  {
    A: "South Sudan",
    B: "N",
    C: "48",
    D: "N",
    E: "N",
    F:
      "South Sudan has reopened its land borders but in effect they remain closed due to restrictions in place from neighbouring countries.",
    G:
      "https://www.gov.uk/foreign-travel-advice/south-sudan/entry-requirements",
  },
  {
    A: "Spain",
    B: "partially (see notes)",
    C: "48",
    D: "N",
    E: "Y",
    F:
      "You can travel to Spain if you are travelling from the European Union, from a country in the Schengen area, or from another country which has a reciprocal agreement with Spain for accepting travellers\nDue to COVID-19 Spanish travel restrictions, U.S citizens cannot enter Spain unless they meet very specific requirements or have already obtained special permission from the Government of Spain.",
    G:
      "https://es.usembassy.gov/covid-19-information/#:~:text=Due%20to%20COVID%2D19%20Spanish,Spain%20and%20vary%20by%20region.\nhttps://www.spain.info/en/discover-spain/practical-information-tourists-covid-19-travel-spain/",
  },
  {
    A: "Sri Lanka",
    B: "Y",
    C: "Y",
    D: "14",
    E: "N",
    F:
      "Entry to Sri Lanka is currently prohibited for all non-nationals, and the government of Sri Lanka is not currently issuing visas to travel to the country.",
    G: "https://www.gov.uk/foreign-travel-advice/sri-lanka/entry-requirements",
  },
  {
    A: "Sudan",
    B: "N",
    C: "72",
    D: "N",
    E: "N",
    F: "",
    G: "https://www.gov.uk/foreign-travel-advice/sudan/entry-requirements",
  },
  {
    A: "Suriname",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "Airports in Suriname are closed.\nThis does not apply to flights arriving from the Netherlands or medical/repatriation flights.",
    G: "https://www.skyscanner.net/travel-restrictions/suriname/29475402",
  },
  {
    A: "Sweden",
    B: "partially (see notes)",
    C: "N",
    D: "N",
    E: "N",
    F:
      "Like other EU countries, Sweden has banned entry to non-EU and non-EEA citizens arriving from outside of the EU until at least 31 October 2020. ",
    G: "https://www.gov.uk/foreign-travel-advice/sweden/entry-requirements",
  },
  {
    A: " Switzerland",
    B: "N",
    C: "N",
    D: "possibly (see notes)",
    E: "N",
    F:
      "Travellers entering Switzerland who have visited certain countries within the past 10 days are also required to quarantine for 10 days. ",
    G:
      "https://www.gov.uk/foreign-travel-advice/switzerland/entry-requirements",
  },
  {
    A: "Syria",
    B: "N",
    C: "96",
    D: "N",
    E: "N",
    F: "",
    G: "https://www.skyscanner.co.in/travel-restrictions/syria/29475200",
  },
  {
    A: "Tajikistan",
    B: "N",
    C: "on arrival",
    D: "14",
    E: "N",
    F:
      "Travellers arriving in Tajikistan will be screened on arrival.\nTravellers entering Tajikistan are currently being confined in state facilities for 14 days upon arrival; this may be subject to change.",
    G: "",
  },
  {
    A: "Tanzania",
    B: "N",
    C: "N",
    D: "N",
    E: "Y",
    F:
      "The Government of Tanzania is implementing temperature scanning for all international passengers arriving into Tanzania. If you show symptoms of COVID-19 on arrival, you may be required to take a test.",
    G: "https://www.gov.uk/foreign-travel-advice/tanzania/entry-requirements",
  },
  {
    A: "Thailand",
    B: "Y",
    C: "N",
    D: "14",
    E: "N",
    F: "Entry allowed under very specific requirements (no tourists).",
    G: "https://www.gov.uk/foreign-travel-advice/thailand/entry-requirements",
  },
  {
    A: "Timor-Leste",
    B: "N",
    C: "see notes",
    D: "14",
    E: "Y",
    F:
      " Those who present symptoms of COVID-19, including a fever greater than 38°C, cough and/or breathing difficulties will be prevented from travelling, and taken to a health facility for a COVID-19 test. Positive cases will be subject to isolation.",
    G:
      "https://www.gov.uk/foreign-travel-advice/timor-leste/entry-requirements",
  },
  {
    A: "Togo",
    B: "N",
    C: "on arrival",
    D: "N",
    E: "N",
    F:
      "Test results should arrive within 24 hours. Those with positive test results will be required to self-isolate either at home or at a government facility until they test negative.",
    G: "https://www.gov.uk/foreign-travel-advice/togo/entry-requirements",
  },
  {
    A: "Tonga",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "A State of Emergency was declared on 20 March by the Government of the Kingdom of Tonga, this has been extended until 12 March 2021. Tongan borders are closed to entry to all foreign nationals.",
    G: "https://www.gov.uk/foreign-travel-advice/tonga/entry-requirements",
  },
  {
    A: "Trinidad and Tobago",
    B: "Y",
    C: "n/a",
    D: "14",
    E: "n/a",
    F:
      "The Trinidad and Tobago government has closed its borders to all international flights indefinitely.",
    G:
      "https://www.gov.uk/foreign-travel-advice/trinidad-and-tobago/entry-requirements",
  },
  {
    A: "Tunisia",
    B: "partially (see notes)",
    C: "N",
    D: "14",
    E: "N",
    F:
      "Some visitors from certain countries may enter but are subject then to 14 days of quarantine. Other countries banned.",
    G: "https://www.skyscanner.net/travel-restrictions/tunisia/29475368",
  },
  {
    A: "Turkey",
    B: "N",
    C: "N",
    D: "N",
    E: "Y",
    F:
      "All arrivals into Turkey will be subject to a medical evaluation for symptoms of coronavirus, including temperature checks. Any passengers showing symptoms including high fever, coughing or respiratory difficulties will be will be required to undergo a PCR test (a swab test – see here for details) for coronavirus.",
    G: "https://www.gov.uk/foreign-travel-advice/turkey/entry-requirements",
  },
  {
    A: "Turkmenistan",
    B: "Y",
    C: "on arrival",
    D: "14",
    E: "N",
    F:
      "All international scheduled commercial flights to and from Turkmenistan have been suspended.\nAt present, entry to Turkmenistan is prohibited except for Turkmen nationals and accredited diplomats, permanently registered foreigners and some employees of international companies and organisations.",
    G:
      "https://www.gov.uk/foreign-travel-advice/turkmenistan/entry-requirements",
  },
  {
    A: "Tuvalu",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "There are currently no commercial to Tuvalu and the borders are closed to all non-nationals/residents.",
    G: "https://www.gov.uk/foreign-travel-advice/tuvalu/entry-requirements",
  },
  {
    A: "Uganda",
    B: "Y",
    C: "72",
    D: "n/a",
    E: "n/a",
    F:
      "On 20 September, the President announced that Entebbe International Airport will be reopening, though the exact date of re-opening is not yet confirmed.",
    G: "https://www.gov.uk/foreign-travel-advice/uganda/entry-requirements",
  },
  {
    A: "Ukraine",
    B: "N",
    C: "N",
    D: "possibly (see notes)",
    E: "N",
    F:
      "Travellers arriving from countries in what the Ukrainian authorities call the “green zone”, are not required to undergo self-isolation or observation on arrival.\nTravellers arriving from countries in what the Ukrainian authorities call the “red zone”  are required to undergo 14 days’ self-isolation proven by the “Dii Vdoma” tracking app, or quarantine in a government-approved facility for 14 days upon arrival.",
    G: "https://www.gov.uk/foreign-travel-advice/ukraine/entry-requirements",
  },
  {
    A: "United Arab Emirates",
    B: "N",
    C: "see notes",
    D: "until arrival test result",
    E: "N",
    F:
      "Covid test required 96 hours before and also one is taken at the airport on arrival.",
    G:
      "https://www.emirates.com/uk/english/help/covid-19/dubai-travel-requirements/tourists/#82485",
  },
  {
    A: "United Kingdom",
    B: "N",
    C: "N",
    D: "possibly (see notes)",
    E: "N",
    F:
      "14 day self isolate quarantine for countries not on travel corridor list.",
    G:
      "https://www.gov.uk/guidance/coronavirus-covid-19-travel-corridors#:~:text=to%20self%2Disolate.-,Travel%20corridor%20exemption%20rules,you%20arrive%20in%20the%20UK%20.&text=You%20may%20not%20have%20to%20self%2Disolate%20when%20you%20arrive,on%20the%20travel%20corridor%20list.",
  },
  {
    A: "United States",
    B: "partially (see notes)",
    C: "see notes",
    D: "see notes",
    E: "N",
    F:
      "Schengen Area, China, Brazil, Iran, India banned from USA.\nThose allowed entry to most parts of the USA are advised by the Center for Disease Control (CDC) to ‘stay at home’ as much as possible for 14 days following arrival. Those arriving into the District of Columbia on non-essential international travel, and from certain high-risk states, are required to self-isolate on arrival for 14 days.\nPassengers are subject to Coronavirus (COVID-19) measures set by the state/territory of their final destination",
    G:
      "https://www.cdc.gov/coronavirus/2019-ncov/travelers/from-other-countries.html\nhttps://www.skyscanner.net/travel-restrictions/united-states/29475437",
  },
  {
    A: "Uruguay",
    B: "N",
    C: "96",
    D: "see notes",
    E: "N",
    F:
      "Upon arrival you are legally obliged to go to a declared address to carry out a 7-day mandatory quarantine. On day 7 of the quarantine you will be required to have a second swab taken and wait for a negative result before being allowed to finish your quarantine period. Alternatively, you can quarantine for 14 days without having to take the second test.",
    G: "https://www.gov.uk/foreign-travel-advice/uruguay/entry-requirements",
  },
  {
    A: "Uzbekistan",
    B: "N",
    C: "see notes",
    D: "see notes",
    E: "N",
    F:
      "\nAnyone arriving in Uzbekistan on a direct flight from countries categorised as green,will not be required to quarantine or self-isolate.\nPassengers arriving from ‘Yellow’ and ‘Red’ categories of countries- must present a negative Polymerase chain reaction (PCR) test for coronavirus issued within 72 hours of arrival.Passengers arriving from “Yellow” or “Red” category of countries with negative coronavirus PCR tests will have to undergo a mandatory 14 days self-isolation at the hotel or home.",
    G: "https://www.gov.uk/foreign-travel-advice/uzbekistan/entry-requirements",
  },
  {
    A: "Vanuatu",
    B: "Y",
    C: "N",
    D: "14",
    E: "N",
    F: "Borders are closed to non-residents.",
    G: "https://www.gov.uk/foreign-travel-advice/vanuatu/entry-requirements",
  },
  {
    A: " Vatican City",
    B: "partially (see notes)",
    C: "N",
    D: "N",
    E: "N",
    F:
      "Vatican City has partially re-opened for visitors, however since entry is possible only directly form Rome, Italy’s entry restrictions apply.",
    G: "https://tripsguard.com/destination/vatican-city/",
  },
  {
    A: "Venezuela",
    B: "Y",
    C: "Y",
    D: "Y",
    E: "N",
    F:
      "Entry into Venezuela is currently limited to Venezuelan citizens and foreign national residents.",
    G: "https://www.gov.uk/foreign-travel-advice/venezuela/entry-requirements",
  },
  {
    A: "Vietnam",
    B: "Y",
    C: "n/a",
    D: "n/a",
    E: "n/a",
    F:
      "Vietnam has temporarily suspended visa waivers, issuing of visas and the entry into Vietnam for all foreign nationals. There are a very small number of exceptions for diplomats on official business and certain high-skilled workers. ",
    G: "https://www.gov.uk/foreign-travel-advice/vietnam/entry-requirements",
  },
  {
    A: "Yemen",
    B: "Y",
    C: "n/a",
    D: "14",
    E: "n/a",
    F:
      "The majority of land, sea and air ports are closed until further notice, with only very limited international flights taking place. Exemptions are in place for humanitarian relief and essential goods.",
    G: "https://www.gov.uk/foreign-travel-advice/yemen/entry-requirements",
  },
  {
    A: "Zambia",
    B: "N",
    C: "14 days",
    D: "N",
    E: "Y",
    F:
      "Tourist and business visit visas are available, but must be obtained in advance, not on arrival in Zambia.\nAnyone entering Zambia with a body temperature equal to, or above 38.0 C will be tested. Any other arrivals may be randomly selected for testing. \nThere is no requirement for visitors to self-isolate.",
    G: "https://www.gov.uk/foreign-travel-advice/zambia/entry-requirements",
  },
  {
    A: "Zimbabwe",
    B: "Y",
    C: "48",
    D: "14",
    E: "N",
    F: "Zimbabwe’s borders are closed to non-residents",
    G: "https://www.gov.uk/foreign-travel-advice/zimbabwe/entry-requirements",
  },
];

export default destInfo;
